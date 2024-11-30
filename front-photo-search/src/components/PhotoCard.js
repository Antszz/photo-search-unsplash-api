function ImageFooter({ author = "Edu", take_date = "24 de abril", tags = ["bird", "lake", "water"] }) {
    return (
        <div className="flex justify-between p-2 items-center">
            <div className="hidden sm:block flex flex-col">
                <p>by <b>{author}</b></p>
                <p>Take date: {take_date}</p>
            </div>
            <div className="flex">
                {tags.map((tag) => {
                    return <button className="border-white border-2 rounded-md px-2 py-1 mx-1.5">{tag}</button>
                })}
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