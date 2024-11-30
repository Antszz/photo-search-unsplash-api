import { useNavigate, useParams } from 'react-router-dom';
import { Button } from "./UtilComponents"


function ImageFooter({ author = "Edu", take_date = "24 de abril", tags = ["bird", "lake", "water"] }) {
    const navigate = useNavigate();
    const { tag: param_tag } = useParams();

    const handleClick = (tag) => {
        if (param_tag === tag) return;
        navigate(`/tag/${tag}`);
    };

    return (
        <div className="flex justify-between p-2 items-center">
            <div className="hidden sm:block flex flex-col">
                <p>by <b>{author}</b></p>
                <p>Take date: {take_date}</p>
            </div>
            <div className="flex gap-3">
                {tags.map((tag) => (
                    <Button
                        key={tag}
                        variant="secondary"
                        onClick={() => handleClick(tag)}
                    >
                        {tag}
                    </Button>
                ))}
            </div>
        </div>
    )
}


export default function PhotoCard({ photo }) {
    const { id, urls } = photo
    const { full: url } = urls
    return (
        <div className="relative aspect-video w-full md:w-[500px]">
            <img src={url} alt={id} />
            <div className="absolute bottom-0 text-white bg-black w-full bg-opacity-50">
                <ImageFooter />
            </div>
        </div>
    )
}
