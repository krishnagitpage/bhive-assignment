# React Assignment

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation--setup)
- [Running the Project](#running-the-project)
- [State Management](#state-management)
- [Mocking Network Requests](#mocking-network-requests)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [License](#license)

## Overview

This project is a React application built with the latest technologies, including TypeScript, React-Redux, and RTK Query for state management. It follows a modular architecture and integrates Tailwind CSS for styling.

## Design Theory

This project follows the Atomic Design methodology, which organizes UI components into a hierarchical structure. This approach promotes reusability, scalability, and maintainability.

![Atomic Design Structure](https://miro.medium.com/v2/resize:fit:1400/1*PcQ-m317YX6ct9ccBi6H1Q.png)

### Atomic Design Structure

1. **Atoms**: The smallest building blocks, such as buttons, inputs, and labels.
2. **Molecules**: Combinations of atoms that form functional units, like a search bar (input + button).
3. **Organisms**: Complex UI components that consist of multiple molecules, such as a navbar.
4. **Templates**: Layout structures that define how organisms are placed on a page.
5. **Pages**: Complete views composed of templates, organisms, molecules, and atoms.

## Tech Stack

- **React** (Latest version)
- **TypeScript** (Latest version)
- **Vite** (Fast build tool and development server)
- **Tailwind CSS v3** (Utility-first CSS framework)
- **React-Redux & RTK Query** (State management and API queries)
- **Node.js** v22.13.1
- **npm** v11.1.0

## Installation & Setup

Ensure you have **Node.js** installed. If not, download and install it from the [Node.js Official Website](https://nodejs.org/).

### Installation Steps

```bash
# Clone the repository
git clone https://github.com/krishnagitpage/bhive-assignment.git
cd bhive-assignment

# Install dependencies
npm install
```

## Running the Project

To start the development server, run:

```bash
npm run dev
```

This will launch the project in development mode. Open **[http://localhost:5173/](http://localhost:5173/)** (default Vite port) in your browser.

## State Management

This project uses **React-Redux** with **RTK Query** for state and API management:

- **React-Redux**: Provides a centralized state management solution.
- **RTK Query**: Handles data fetching efficiently with built-in caching and automatic re-fetching.

### Implementation Details

- The Redux store is configured in `store.ts`.
- Features are managed using Redux slices.
- API calls are structured using **RTK Query** services.

## Mocking Network Requests

Mock data is used as a fallback mechanism:

- API responses are intercepted, and predefined mock data is returned in case of request failures.
- Mock data is stored in the `mocks` directory.
- Example mock data file: `mocks/fakeData.json`.

## Project Structure

```
├── src
│   ├── components      # UI components
│   │    ├── Atoms      # Small reusable components (e.g., buttons, inputs)
│   │    ├── Molecules  # Grouped components
│   │    ├── Organisms  # Complex UI elements
│   │    ├── Templates  # Page templates
│   ├── pages           # Page-level components
│   │    ├── HomePage
│   ├── app             # Redux store and slices
│   │    ├── api
│   │        ├── apiSlice.ts
│   │    ├── store
│   │        ├── store.ts
│   ├── features        # API services using RTK Query
│   │    ├── spaces
│   │        ├── spacesApiSlice.ts
│   │        ├── spaceTypes.ts
│   ├── icons           # Icons used in the app
│   ├── lib             # Utility functions
│   ├── mocks           # Mock data for API responses
│   │    ├── fakeData.json
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Entry point with React and Redux provider
│   ├── tailwind.config.ts # Tailwind CSS customization
│
├── public              # Static assets
├── package.json        # Project dependencies and scripts
├── vite.config.ts      # Vite configuration file
└── README.md           # Project documentation
```

## Configuration

### Tailwind CSS Customization

Tailwind CSS is configured by extending `tailwind.config.ts`.

#### Example Configuration

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
