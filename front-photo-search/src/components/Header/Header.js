import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <h1>
                <span className="photo">PHOTO</span><span className="search">SEARCH</span>
            </h1>
            <p>powered by Flickr</p>
        </header>
    );
}