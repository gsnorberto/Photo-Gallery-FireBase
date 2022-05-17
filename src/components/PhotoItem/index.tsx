import * as C from './style'
import * as Photos from '../../services/photos'
import { useState } from 'react'

type Props = {
    url: string;
    name: string;
}

export const PhotoItem = ({url, name}: Props) => {
    const [loading, setLoading] = useState(false);

    const deleteItem = async () => {
        if(window.confirm("Tem certeza que deseja excluir essa imagem? ")){
            await Photos.del(url).then(() => {
                alert("Excluído com sucesso!")
                window.location.reload();
            }).catch((error) => {
                alert("Erro ao excluir!");
            });; 
        } 
    }

    return(
        <C.Container>
            <button onClick={deleteItem}>Excluir</button>

            <img src={url} alt="imagem" />
            {name}
        </C.Container>
    );
}