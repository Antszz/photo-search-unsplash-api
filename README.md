## Photo Search App

This web application allows you to search for photos using the Unsplash API. It was built with React for the frontend and Flask for the backend.

### Features:

*   **Search photos by tag:**  Find photos using relevant tags.
*   **Photo display:**  Displays the photos found with their author, creation date, and tags.
*   **Tag navigation:**  Click on photo tags to perform new searches.
*   **Responsive design:**  The application adapts to different screen sizes.

### Optimizations:

*   **API caching:** `CachedSession` is used to cache responses from the Unsplash API and avoid exceeding the 50 requests per hour rate limit.
*   **Parallel serialization:** `ThreadPoolExecutor` is used to parallelize the serialization of photos, reducing response time.
*   **Singleton for the Unsplash session:** The Singleton pattern is used to ensure that only one instance of the Unsplash session is created. This guarantees that all requests use the same cached session, maximizing the benefits of caching and preventing unnecessary API calls.


### How to start the project:

1.  **Set up the Unsplash API Key:**

    *   For your convenience, a `.env` file with a placeholder API key is already included in the `back-photo-search` folder. This allows you to test the application immediately.
    *   However, please be aware that in a real-world project, you should **never** include your API keys directly in the repository. Instead, you should create your own `.env` file and store it securely.
    *   If you have your own Unsplash API key, replace the placeholder key in the `.env` file with your actual key:

    ```bash
    UNSPLASH_ACCESS_KEY=your_unsplash_access_key
    ```

2.  **Build the Docker images:**

    ```bash
    docker compose build
    ```

3.  **Start the containers:**

    ```bash
    docker compose up -d
    ```

4.  **Open the app in your browser:**

    ```
    http://localhost:3000
    ```

### Project structure:

```
photo-search-unsplash-api/
├── front-photo-search/
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── GallerySearch.js
│       │   └── ...
│       ├── services/
│       │   └── photoServices.js
│       └── App.js
├── back-photo-search/
│   ├── api/
│   │   └── routes.py
│   ├── serializers/
│   │   └── photo.py
│   ├── services/
│   │   └── unsplash_service.py
│   └── ...
├── docker-compose.yml
└── ...
```

### Technologies used:

*   Frontend:
    *   React
    *   `react-router-dom`
    *   Tailwind CSS
*   Backend:
    *   Flask
    *   Flask-CORS
    *   Marshmallow
    *   `requests-cache`
*   Others:
    *   Docker
    *   Docker Compose

### Additional notes:

*   Make sure you have Docker and Docker Compose installed on your system.
*   The `.env` file in the backend contains the Unsplash API key. Create this file and add your key. See [.env.example](back-photo-search/.env.example)
*   You can modify the application port in `docker-compose.yml` if needed.
