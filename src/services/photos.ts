import { Photo } from "../types/Photo";
import { storage } from "../libs/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

export const getAll = async () => {
    let list: Photo[] = [];

    const imagesFolder = ref(storage, "images"); //Acesso à pasta "images" dentro da Storage do firebase
    const photoList = await listAll(imagesFolder); //Lista todo conteúdo dentro da pasta

    for(let i in photoList.items){
        let photoUrl = await getDownloadURL(photoList.items[i]); //link direto de acesso à imagem

        list.push({
            name: photoList.items[i].name,
            url: photoUrl
        })
    }

    return list;
}