# MovieFlix
[Live Demo](https://main--rainbow-bunny-667e2e.netlify.app/)

Welcome to the MovieFlix! This project is a simple movie application built with React, utilizing React props, Styled Components for styling, and state management for features like adding to cart, rating movies, and adding to favorites.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Running the App](#running-the-app)
- [Features](#features)
  - [Add to Cart](#add-to-cart)
  - [Rate Movies](#rate-movies)
  - [Add to Favorites](#add-to-favorites)
- [Project Structure](#project-structure)

## Getting Started

### Prerequisites

Before you can run the React Movie App, make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone this repository to your local machine:

   ```bash
   gh repo clone aman-q/moviesflix
   ```

2. Navigate to the project directory:

   ```bash
   cd movieflix
   ```

3. Install the project dependencies:

   If you use npm:

   ```bash
   npm install
   ```

   If you use Yarn:

   ```bash
   yarn install
   ```

## Usage

### Running the App

Now that you have installed the project dependencies, you can run the React Movie App:

```bash
npm start
```

or

```bash
yarn start
```

This will start the development server and open the app in your default web browser. You can access it at [Movieflix](https://main--rainbow-bunny-667e2e.netlify.app/).

## Features

### Add to Cart

You can add movies to your shopping cart. Click the "Add to Cart" button on a movie card, and it will be added to your cart. You can also remove movies from the cart if needed.

### Rate Movies

Rate the movies you watch. Give each movie a star rating to track your favorites.

### Add to Favorites

Mark movies as your favorites by clicking the "Add to Favorites" button on a movie card. You can easily access your favorite movies in a dedicated section of the app.

## Project Structure

Here's a brief overview of the project structure:

The code you provided is for a React component called `App`, which is the main component of your movie app. It handles the state and logic for managing movies, their ratings, favorites, and adding/removing them from the cart. Below, I'll generate a file structure for your React project based on the code you provided:

```
/src
  /components
    MovieList.js
    Navbar.js
  /data
    Moviedetails.js
  App.js
/public
  index.html
/package.json
/README.md
```

In this structure:

- `/src` contains the source code for your React application.
  - `/components` is a directory where you can place your React components. You already have `MovieList.js` and `Navbar.js` components.
  - `/data` is where you store your movie data, such as `Moviedetails.js`.
  - `App.js` is the main application component.
- `/public` contains static assets and the HTML file for your React application.
  - `index.html` is the HTML template where your React app is mounted.
- `package.json` is the configuration file for your project, where you define dependencies and scripts.
- `README.md` is the readme file for your project, which provides information and instructions for using the app.


