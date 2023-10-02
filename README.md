# Car Search Website

This project is a car search website built with React.js. The website is designed for desktop-only screens and does not include responsive design.

## Features

- **Car Search**: Cars can be searched by name. The search functionality is implemented using a simple text input field.
- **Pagination**: The website includes pagination functionality. The URL changes to `page/:page` as you navigate through the pages (e.g., `page/1`, `page/2`, etc.). The pagination is limited to 10 pages and does not depend on the car count.
- **Car Cards**: Cars are displayed in cards, with 3 cards in each row and 6 cards shown at a time. Each car card is designed to look similar to the provided image.
- **Next and Previous Buttons**: The pagination includes fully functional next and previous buttons.

## Project Structure

The project is structured as follows:

- `src/components`: This directory contains all the React components used in the project.
  - `CarCard.js`: This component represents a single car card.
  - `CarList.js`: This component displays a list of `CarCard` components.
  - `SearchBar.js`: This component includes the search functionality.
  - `Pagination.js`: This component includes the pagination functionality.
- `src/App.js`: This is the main component that brings together all the other components.
- `src/index.js`: This is the entry point of the React application.

## Running the Project

To run the project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in the terminal.
3. Run `npm install` to install all the necessary dependencies.
4. Run `npm start` to start the development server. The website will be accessible at `http://localhost:3000`.

