export function Title({ children }) {
    return <h1 className="font-bold text-xl text-[#4a4a4a]">{children}</h1>
}


export function Button({ children, variant, onClick }) {
    const baseStyles = "rounded-md p-2";

    let variantStyles = "";
    switch (variant) {
        case "primary":
            variantStyles = "bg-[#418bca] text-white";
            break;
        case "secondary":
            variantStyles = "border-white border-2";
            break;
        default:
            variantStyles = "";
    }

    return (
        <button className={`${baseStyles} ${variantStyles} hover:bg-blue-600`} onClick={onClick}>
            {children}
        </button>
    );
}
