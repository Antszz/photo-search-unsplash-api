import { useNavigate } from 'react-router-dom';


export default function Header() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }
    return (
        <header className="w-full px-[5%] bg-[#222222] text-[#888888] flex flex-row items-center justify-left gap-5">
            <h1 className="pt-3 pb-1 text-2xl md:text-3xl m-0 cursor-pointer" onClick={handleClick}>
                <span className="photo">PHOTO</span>
                <span className="search font-extrabold text-white">SEARCH</span>
            </h1>
            <span className="text-xs md:text-md pt-2">powered by Flickr</span>
        </header>
    );
}
