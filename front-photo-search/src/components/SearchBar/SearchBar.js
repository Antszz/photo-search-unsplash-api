import Title from "../Title/Title"


export default function SearchBar({tag}) {
    return (
        <div className="search-bar">
            <Title>Search by tag</Title>
            <input type="text" placeholder="Search by tag" value={tag} />
            <button>Search</button>
        </div>
    )
}
