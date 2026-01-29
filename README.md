# Lendsqr Frontend Engineering Assessment

This repository contains the implementation of the Lendsqr Admin Console frontend assessment.

## Tech Stack

- **React** with **TypeScript**
- **Vite** for build tooling
- **SCSS** for styling (modular architecture)
- **React Router** for navigation
- **Lucide React** for iconography
- **Axios** for API simulation

## Features implemented

- [x] **Login Page**: Responsive login with password toggle.
- [x] **Dashboard**: Metric cards showing user statistics.
- [x] **Users List**: Filterable, paginated table with 500 mock records.
- [x] **User Details**: Comprehensive user information view with tabbed navigation.
- [x] **Data Persistence**: Local Storage used to cache user details.
- [x] **Mobile Responsive**: Fully adaptive design for mobile, tablet, and desktop.

## Project Structure

- `public`: Static assets including brand logos, illustrations, icons, and favicons.
- `public/icons`: Collection of custom SVG icons used for navigation and UI elements.
- `src/components`: Shared UI components (Layout, Navbar, Sidebar).
- `src/pages`: Individual application screens.
- `src/services`: Mock API service layer.
- `src/styles`: Global styles and component-specific SCSS.
- `src/types`: TypeScript interfaces and mock data generation logic.

## Setup Instructions

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Run `npm run build` to create a production-ready build.

## Implementation Details

- The application uses a mock API service that generates 500 records on initialization.
- Styling follows a modular SCSS approach with central variables for design tokens.
- Navigation is handled via client-side routing.
- Pixel-perfect attention was paid to the design specifications provided in the brief.
