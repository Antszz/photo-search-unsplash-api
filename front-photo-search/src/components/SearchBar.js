import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Title } from "./UtilComponents"


export default function SearchBar({ tag }) {
    const inputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (inputRef.current) {
          inputRef.current.value = tag || '';
        }
      }, [tag]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const inputTag = event.target.elements.tag.value;
        if (!inputTag || tag === inputTag) return;
        navigate(`/tag/${inputTag}`);
    };

    return (
        <div className="my-5">
            <Title>Search by tag</Title>
            <form onSubmit={handleSubmit} className="flex gap-10 mt-2">
                <input
                    ref={inputRef}
                    className="border border-gray-300 rounded-md p-2 w-full md:w-[350px]"
                    type="text"
                    placeholder="Search by tag"
                    name="tag"
                    defaultValue={tag}
                />
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </form>
        </div>
    )
}
