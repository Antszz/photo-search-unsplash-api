const API_URL = process.env.REACT_APP_API_URL


export const fetchRandomPhotos = async () => {
    try {
        const response = await fetch(`${API_URL}/api/get-random-photos`);
        return await response.json();
    } catch (error) {
        console.error("Error al obtener las fotos:", error);
        return Promise.resolve([]);
    }
};

export const fetchPhotosQuery = async (tag) => {
    try {
        const response = await fetch(`${API_URL}/api/search/${tag}`);
        return await response.json();
    } catch (error) {
        console.error("Error al obtener las fotos:", error);
        return Promise.resolve([]);
    }
};
