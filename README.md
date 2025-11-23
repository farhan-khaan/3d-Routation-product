# Node.js 3D Product Web App

A responsive web application built with Node.js, Express, and Three.js, featuring interactive 3D product cards.

## Features

-   **Interactive 3D Products**: Rotate and zoom 3D representations of products directly in the browser.
-   **Responsive Design**: Modern, glassmorphism-inspired UI that works on all devices.
-   **Product Catalog**: Browse products in a grid layout.
-   **Product Details**: View detailed specifications and reviews.
-   **Mock Mode**: Run the application immediately without a database connection.

## Tech Stack

-   **Backend**: Node.js, Express.js
-   **Database**: MongoDB (Mongoose)
-   **Frontend**: EJS Templates, Vanilla CSS
-   **3D Graphics**: Three.js

## Setup Instructions

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Configuration**:
    The `.env` file is pre-configured for "Mock Mode" so you can run it instantly.
    ```env
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/node-3d-app
    USE_MOCK_DB=true
    ```
    To use a real MongoDB database, set `USE_MOCK_DB=false` and ensure your MongoDB server is running.

3.  **Start the Server**:
    ```bash
    npm start
    ```

4.  **Access the App**:
    Open your browser and navigate to `http://localhost:3000`.

## Usage

-   **Home Page**: Scroll through the list of products. Hover over cards to see effects. Drag on the 3D shapes to rotate them.
-   **Product Page**: Click on any product card to view details. On the detail page, you can zoom in/out and rotate the model freely.
