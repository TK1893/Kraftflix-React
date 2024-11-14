# Kraftflix

**Kraftflix** is a responsive single-page application (SPA) built with React. It is designed to allow movie enthusiasts to explore films, learn about directors and genres, and create a personal profile to save their favorite movies. The app is connected to an existing RESTful API developed in a previous project ([**Kraftflix-API**](https://github.com/TK1893/kraftFlix.git)). The user and movie data are stored in a personally created MongoDB database.

## Visit the [Kraftflix](https://kraftflix.netlify.app) Live App

Please check out the Kraftflix Live App:

#### [https://kraftflix.netlify.app](https://kraftflix.netlify.app)

---

## Table of Contents

- [Technologies & Packages](#technologies--packages)
- [Project Structure](#project-structure)
- [Components](#components)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)

---

## Technologies & Packages

### Core Technologies

- **`React`**: JavaScript library for building user interfaces with component-based architecture.
- **`React Router DOM`**: Manages routes within the application, enabling navigation between pages.
- **`React Bootstrap`**: Provides responsive, pre-styled components for a professional UI design.

### State Management

- **`useState & useEffect`**: React hooks for managing component state and handling lifecycle events within functional components.

### HTTP & Data Management

- **`Fetch API`**: JavaScript API for making asynchronous HTTP requests to communicate with the backend server.
- **`Local Storage`** : used to persist user data, like login tokens and user information, between sessions.

### Other Utilities

- **`Prop-Types`**: Ensures that components receive props of the expected data type, aiding in development and debugging.

### Tech Stack

The app is built on the **`MERN stack`**:

- **`MongoDB`**: Database to store user data and movie information.
- **`Express`**: Server framework to manage API endpoints.
- **`React`**: Frontend library for building the client-side.
- **`Node.js`**: Server environment to run the API.

---

## Project Structure

```bash
`src
├── components
│   ├── login-view
│   ├── main-view
│   ├── movie-card
│   ├── movie-view
│   ├── navigation-bar
│   ├── profile-view
│   └── signup-view
├── index.html
└── index.jsx`
```

---

## Components

### `LoginView`

Handles user login, verifies credentials, and stores user session information on successful login.

### `MainView`

Main container component, managing routes, rendering navigation, and handling data flow between components.

### `MovieCard`

Displays movie details, like title and image. Allows users to add or remove movies from favorites.

### `MovieView`

Shows detailed information about a specific movie, including genre, director, actors, release year and the movie plot.

### `NavigationBar`

Top navigation bar providing links for login, signup, movies, profile, and logout options.

### `ProfileView`

Displays user profile, manages updates to user data, and displays the list of favorite movies.

### `SignupView`

User registration component, allowing new users to create an account.

---

## Installation and Setup

### 1. **Clone the repository**:

```bash
git clone https://github.com/TK1893/Kraftflix-React.git
```

### 2. **Navigate to the project directory**:

```bash
cd kraftflix-react
```

### 3. **Install dependencies**:

### 4. **Start the application**:

```bash
parcel src/index.html
```

---

## Usage

1.  **`Launch the app`** - Open the application in a browser at `http://localhost:1234`.

2.  **`Sign up / Login`** - Register a new account or log in with an existing one.
3.  **`Browse Movies`** - Explore available movies (Movie Cards) displayed on the Main View.
4.  **`Single Movie Details`** - To view more details of a single movie (synopsis, director, actors, etc.), click on the MovieCard of the corresponding movie to enter the single movie view.
5.  **`Manage Favorites`** - Click the heart icon on a movie card to add or remove it from your favorites list.
6.  **`Profile Management`** - Access your profile for updating details or deleting your account.

---

## Future Enhancements

- **`Error Handling`**: Improve error messaging for smoother UX.

- **`Styling Improvements`**: Enhance aesthetics.
- **`Search Functionality`**: Add a search bar for quicker movie lookups.
- **`Comments & Ratings`**: Enable user reviews for movies.
