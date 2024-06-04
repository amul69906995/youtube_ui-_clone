# React + Vite

# YouTube UI Clone

This project is a clone of the YouTube UI, featuring several key functionalities to provide a seamless user experience similar to YouTube. The application utilizes the YouTube Data API v3 and integrates advanced features like voice assistance and search debouncing. It is fully responsive, ensuring a great experience on both desktop and mobile devices.

## Features

1. **Home Page with Infinite Loading**:
    - The home page displays a list of videos with infinite scrolling, ensuring a continuous stream of content as the user scrolls down.

2. **Voice Assistance**:
    - Voice assistance functionality allows users to search for videos using voice commands, enhancing accessibility and ease of use.

3. **Search Functionality with Debouncing**:
    - The search feature includes debouncing to optimize performance and prevent unnecessary API calls while the user is typing.

4. **Search Autocomplete**:
    - Utilizes the Google Search Recommendation API to provide real-time search suggestions, improving the search experience by offering relevant recommendations as users type.

5. **Fully Responsive Design**:
    - The application is fully responsive, ensuring a great user experience on both desktop and mobile devices.

6. **Routing with React Router v6**:
    - The application uses React Router v6 for managing navigation and routing within the application.

## Technologies Used

- **Frontend**: React, Vite
- **Routing**: React Router v6
- **APIs**: YouTube Data API v3, Google Search Recommendation API
- **Environment Variables**: Managed using `.env` files

## Upcoming Features

In addition to the UI clone, a backend project is also in development. This backend will include:

1. **Video Upload with Thumbnail**:
    - Users will be able to upload videos along with thumbnails. Videos will be stored in GridFS or Cloudinary.

2. **Video Streaming with DRM and DASH**:
    - Implementing video streaming with Digital Rights Management (DRM) and Dynamic Adaptive Streaming over HTTP (DASH) for secure and efficient video delivery.
3. **Comment Section**:
    - Users can add comments to videos, enabling interaction and feedback.

4. **Video Recommendations**:
    - The application provides video recommendations based on the current video being watched, similar to YouTube's recommendation system.

5. **Caching System**:
    - Implements a caching system to store previously searched results, improving performance and reducing redundant API calls.

## How to Run the Project

1. Clone the repository:
    ```bash
    git clone https://github.com/amul69906995/youtube_ui-_clone.git
    ```

2. Navigate to the project directory:
    ```bash
    cd youtube-ui-clone
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add your environment variables:
    ```
    VITE_YOUTUBE_API_KEY=your_youtube_api_key
    ```

5. Run the project:
    ```bash
    npm run dev
    ```

## Contributions

Contributions are welcome! Feel free to open issues or submit pull requests with your improvements and bug fixes.

## License

This project is licensed under the MIT License.

