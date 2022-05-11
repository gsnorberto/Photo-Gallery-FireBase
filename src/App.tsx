import { useState, useEffect } from 'react';
import * as C from './App.styles';
import * as Photos from './services/photos';
import { Photo } from './types/Photo'
import gif from './assets/imgs/loadingGif.gif'

const App = () => {
    const [loading, setLoading] = useState(false);
    const [photos, setPhotos] = useState<Photo[]>([]);

    //Carregar fotos do servidor
    useEffect(() => {
        const getPhotos = async () => {
            setLoading(true);

            setPhotos(await Photos.getAll());

            setLoading(false);
        }
        getPhotos();
    }, [])

    return (
        <C.Container>
            <C.Area>
                <C.Header>Galeria de fotos</C.Header>

                {loading &&
                    <C.ScreenWarning>
                        <img src={gif} alt="loading" width={80} />
                    </C.ScreenWarning>
                }

                {!loading && photos.length > 0 &&
                    <C.PhotoList>
                        {photos.map((item, index) => (
                            <div>{item.name}</div>
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