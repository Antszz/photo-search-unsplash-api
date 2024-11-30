import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PhotoCard from "./PhotoCard";
import SearchBar from "./SearchBar";
import { Title } from "./UtilComponents";
import { fetchPhotosQuery, fetchRandomPhotos } from "../services/photoServices";


export default function GallerySearch() {
    const { tag } = useParams();
    const [photosData, setPhotosData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const loadPhotos = async () => {
            setIsLoading(true);
            let data = {}
            if (tag) {
                data = await fetchPhotosQuery(tag);
                setPhotosData(data);
            } else {
                data = await fetchRandomPhotos();
                setPhotosData(data);
            }
            setPhotosData(data);
            setIsLoading(false);
        };

        loadPhotos();
    }, [tag]);

    return (
        <div className="px-[5%] py-3">
            <SearchBar tag={tag} />
            <div className="flex flex-col gap-5">
                {tag ? <Title>Results</Title> : <Title>Trending Photos Right Now</Title>}
                {isLoading ? (
                    <p>Cargando fotos...</p>
                ) : (
                    photosData.map((photo_data) => (
                        <PhotoCard key={photo_data.id} photo_data={photo_data} />
                    ))
                )}
            </div>
        </div>
    );
}
