# Datacom Cinema Finder POC

A React-based web application developed as part of the **Datacom Software Engineering Job Simulation** on Forage. This proof-of-concept (POC) cinema locator integrates interactive mapping tools, custom dark-mode UI styling, and dynamic code-splitting to deliver an efficient, high-performance user experience.

---

## 🚀 Key Implementation & Work Completed

* **Performance Optimization (Code Splitting)**: Implemented `@loadable/component` to dynamically load heavy map modules (`CinemaMarkers` and `NearbyCinemaMarkers`), drastically decreasing initial JavaScript payload and improving page startup times.
* **Custom Dark Theme & Map Filter Pipeline**: Built a cinematic dark theme using Material UI tokens and configured CSS tile filters (`brightness`, `invert`, `contrast`, `hue-rotate`) over Leaflet / MapLibre layers for a seamless dark-mode map integration.
* **Interactive Map Synchronization**: Integrated a custom event bus (`map.snapTo`) to dynamically update map coordinates and zoom levels when a user interacts with items in the cinema list.
* **Routing & Accessibility Upgrades**: Structured React Router navigation complete with a custom **404 Not Found** fallback component, and improved Lighthouse accessibility scores using semantic HTML layout landmarks (`component="main"`).

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Frontend Framework** | React.js |
| **UI Library** | Material UI (MUI), `@emotion/react`, `@emotion/styled` |
| **Mapping Engine** | Leaflet / MapLibre GL |
| **Dynamic Imports** | `@loadable/component` |
| **Typography & Styling** | Google Fonts (Poppins), Custom CSS3 Variables |

---

## ⚙️ Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v14+ recommended) installed on your system.

### Local Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/ainycodes07/cinema-finder-poc.git](https://github.com/ainycodes07/cinema-finder-poc.git)
   cd cinema-finder-poc

2. **Install project dependencies:
   ```bash
   npm install
   
3. Launch the development server:
   ```bash
   npm start

The application will run locally at `http://localhost:3000`.

## 🧾 Context & Disclaimer
This repository was created as part of the Datacom Software Engineering Virtual Experience hosted on Forage. It serves as a personal demonstration of practical software engineering skills, performance profiling, and UI implementation.
