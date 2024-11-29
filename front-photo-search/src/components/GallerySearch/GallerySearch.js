import './GallerySearch.css'
import PhotoCard from "../PhotoCard/PhotoCard"
import SearchBar from "../SearchBar/SearchBar"
import Title from "../Title/Title"


export default function GallerySearch({tag}) {
    const photosData = [
        {
            "id": "LBI7cgq3pbM",
            "urls": {
                "full": "https://images.unsplash.com/photo-1523214335813-612f57e2c5c8",
            },
        },
        {
            "id": "LBI7cgq3pbP",
            "urls": {
                "full": "https://images.unsplash.com/photo-1523214335813-612f57e2c5c8",
            },
        },
    ]
    return (
        <div className="gallerySearch">
            <SearchBar tag={tag}/>
            {
                tag ? <Title>Results</Title> : <Title>Trending Photos Right Now</Title>
            }
            {photosData.map((photo) => {
                return <PhotoCard photo={photo} />
            })}
        </div>
    )
}
