import { useNavigate, useParams } from 'react-router-dom';
import { Button } from "./UtilComponents"


function ImageFooter({ author, take_date, tags }) {
    const navigate = useNavigate();
    const { tag: param_tag } = useParams();
    const formattedDate = new Date(take_date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    const handleClick = (tag) => {
        if (param_tag === tag) return;
        navigate(`/tag/${tag}`);
    };

    return (
        <div className="flex justify-between p-2 items-center">
            <div className="hidden sm:block flex flex-col">
                <p>by <b>{author}</b></p>
                <p>Taken {formattedDate}</p>
            </div>
            <div className="flex gap-3">
                {tags.slice(0, 3).map((tag) => (
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


export default function PhotoCard({ photo_data }) {
    const { id, author, created_at, tags, url } = photo_data
    return (
        <div className="relative aspect-video w-full md:w-[500px]">
            <img src={url} alt={id} />
            <div className="absolute bottom-0 text-white bg-black w-full bg-opacity-50">
                <ImageFooter
                    author={author}
                    take_date={created_at}
                    tags={tags}
                />
            </div>
        </div>
    )
}
