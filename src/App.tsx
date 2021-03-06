import { useState, useEffect, FormEvent, useContext } from 'react';
import * as C from './App.styles';
import * as Photos from './services/photos';
import { Photo } from './types/Photo'
import gif from './assets/imgs/loadingGif.gif'
import { PhotoItem } from './components/PhotoItem';

import themeContext from './contexts/Context';

const App = () => {
    const [loading, setLoading] = useState(false);
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [uploading, setUploading] = useState(false);

    const { setState, state } = useContext(themeContext);

    //Carregar fotos do servidor
    useEffect(() => {
        const getPhotos = async () => {
            setLoading(true);

            setPhotos(await Photos.getAll());

            setLoading(false);
        }
        getPhotos();
    }, [])

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const file = formData.get('image') as File;

        if (file && file.size > 0) { // Se o upload deu certo
            setUploading(true);
            let result = await Photos.insert(file)
            setUploading(false);

            if (result instanceof Error) {
                alert(`${result.name} - ${result.message}`)
            } else {
                let newPhotoList = [...photos]
                newPhotoList.push(result);
                setPhotos(newPhotoList)
            }
        }
    }

    //Change page theme
    const handleToggleTheme = () => {
        if (state.status === 'light') {
            setState({
                ...state,
                status: 'dark'
            })
        } else {
            setState({
                ...state,
                status: 'light'
            })
        }
    }

    return (
        <C.Container theme={state.status}>
            <C.Area>
                <C.ThemeArea>
                    <C.Button onClick={handleToggleTheme}>Mudar Tema</C.Button>
                </C.ThemeArea>

                <C.Header theme={state.status}>Galeria de fotos</C.Header>

                <C.UploadForm method="POST" onSubmit={handleFormSubmit}>
                    <input type="file" name='image' />
                    <input type="submit" value="Enviar" />
                    {uploading && "Enviando..."}
                </C.UploadForm>

                {loading &&
                    <C.ScreenWarning>
                        <img src={gif} alt="loading" width={80} />
                    </C.ScreenWarning>
                }

                {!loading && photos.length > 0 &&
                    <C.PhotoList>
                        {photos.map((item, index) => (
                            <PhotoItem key={index} url={item.url} name={item.name} />
                        ))}
                    </C.PhotoList>
                }

                {!loading && photos.length === 0 &&
                    <C.ScreenWarning>
                        <div>Galeria Vazia</div>
                    </C.ScreenWarning>
                }
            </C.Area>
        </C.Container>
    );
}

export default App;