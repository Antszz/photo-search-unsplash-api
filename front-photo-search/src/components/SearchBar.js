import {Button, Title} from "./UtilComponents"


export default function SearchBar({tag}) {
    return (
        <div className="my-5">
            <Title>Search by tag</Title>
            <div className="flex gap-10 mt-2">
                <input className="border border-gray-300 rounded-md p-2 w-full md:w-[350px]" type="text" placeholder="i.e. flags" value={tag} />
                <Button variant="primary">Search</Button>
            </div>
        </div>
    )
}
