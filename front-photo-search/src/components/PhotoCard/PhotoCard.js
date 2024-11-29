export default function PhotoCard({ photo }) {
    const { id, urls } = photo
    const { full: url } = urls
    return (
        <div>
            <img src={url} alt={id} />
        </div>
    )
}
