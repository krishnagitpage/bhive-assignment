# React Assignment

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation--setup)
- [Running the Project](#running-the-project)
- [State Management](#state-management)
- [Mocking network requests](#mocking-network-requests)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [License](#license)

## Overview

This project is a React application built using the latest technologies, including TypeScript, React-Redux, and RTK Query for state management. It follows a modular structure and integrates Tailwind CSS for styling.

## Tech Stack

- **React** (Latest version)
- **TypeScript** (Latest version)
- **Vite** (Fast build tool and development server)
- **Tailwind CSS v3** (Utility-first CSS framework)
- **React-Redux & RTK Query** (State management and API queries)
- **Node.js** v22.13.1
- **npm** v11.1.0

## Installation & Setup

Ensure you have **Node.js** installed. If not, download and install it from [Node.js Official Website](https://nodejs.org/).

### Steps to Install

```bash
# Clone the repository
git clone https://github.com/krishnagitpage/bhive-assignment.git
cd bhive-assignment

# Install dependencies
npm install
```

## Running the Project

To start the development server, use the following command:

```bash
npm run dev
```

This will launch the project in development mode. Open **http://localhost:5173/** (default Vite port) in your browser.

## State Management

This project utilizes **React-Redux** with **RTK Query** for state and API management:

- **React-Redux**: Provides a centralized state management solution.
- **RTK Query**: Handles data fetching efficiently with built-in caching and automatic re-fetching.

### Implementation

- The Redux store is configured in `store.ts`.
- Features are managed using Redux slices.
- API calls are structured using **RTK Query** services.

## Mocking network requests

Mock data is used as a fallback mechanism:

- API responses are checked, and if the request fails, predefined mock data is returned.

## Project Structure

```
├── src
│   ├── components  # UI components
        ├── Atoms   # single level components like buttons and page sections
        ├── Molecules
        ├── Organisms
        ├── Templates
│   ├── pages       # Page-level components
        ├── HomePage
│   ├── app       # Redux store and slices
        ├── api
           ├── apiSlice.ts
        ├── store
           ├── store.ts
│   ├── features    # API services using RTK Query
        ├── spaces
           ├── spacesApiSlice.ts
           ├── spaceTypes.ts
    ├── icons
    ├── lib
    ├── mocks
      ├── fakeData.json
│   ├── App.tsx     # Main application component
│   ├── main.tsx    # Entry point with React and Redux provider
│   ├── tailwind.config.ts # Tailwind CSS customization
│
├── public          # Static assets
├── package.json    # Project dependencies and scripts
├── vite.config.ts  # Vite configuration file
└── README.md       # Project documentation
```

## Configuration

### Tailwind CSS Customization

Tailwind CSS is configured by extending `tailwind.config.ts`:

#### Example

```ts
export default {
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        secondary: "#9333EA",
      },
    },
  },
  plugins: [],
};
```

This allows for custom design configurations and theme extensions.

## License

This project is for educational and interview purposes only.
