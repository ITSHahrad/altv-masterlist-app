# Orion-Wails Boilerplate

🚀 A modern starter template for building desktop applications with **React 18 (JavaScript)**, **Wails v2 (Go)**, and **Tailwind CSS v3**.

## Overview

This boilerplate provides a pre-configured setup for creating cross-platform desktop applications with a responsive JavaScript-based React frontend and a powerful Go backend using the Wails framework. It integrates React 18 for the UI, Tailwind CSS v3 for styling, and Vite for a fast development experience.

## Tech Stack

- **Frontend**: React v18 (JavaScript)
- **Styling**: Tailwind CSS v3 (with JIT compilation)
- **Build Tool**: Vite v4 (optimized for speed)
- **Backend**: Wails v2 (Go-based framework for desktop apps)
- **Platforms**: Windows, macOS, Linux

## Key Features

- 🛠️ **Pre-configured Wails + React**: Seamless integration between Go backend and React frontend.
- 🎨 **Tailwind CSS v3**: Fully set up with JIT for rapid, responsive styling.
- ⚡ **Vite-powered**: Lightning-fast development with hot module replacement (HMR).
- 📱 **Responsive Design**: Includes example layouts for mobile and desktop.
- 🏗️ **Production Ready**: Optimized build scripts for cross-platform deployment.

## Prerequisites

- [Go](https://golang.org/dl/) (v1.18 or later)
- [Node.js](https://nodejs.org/) (v16 or later)
- [Wails CLI](https://wails.io/docs/gettingstarted/installation) (`go install github.com/wailsapp/wails/v2/cmd/wails@latest`)

## Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ITSHahrad/orion-wails.git
   cd orion-wails
   ```

2. **Install frontend dependencies**:
   ```bash
   npm install
   ```

3. **Run in development mode**:
   ```bash
   wails dev
   ```

   This starts the app with hot-reloading for both frontend and backend changes.

## Building for Production

To create a production-ready binary for your platform:

```bash
wails build
```

The output will be in the `build/bin` directory, ready for distribution.

## Project Structure

```
orion-wails/
├── frontend/           # React (JavaScript) + Tailwind CSS frontend
│   ├── src/           # React components and assets
│   ├── public/        # Static assets
│   ├── vite.config.js # Vite configuration
│   └── tailwind.config.js # Tailwind configuration
│   └── postcss.config.js # PostCSS configuration

├── app.go             # Wails backend (Go)
├── go.mod             # Go module dependencies
├── wails.json         # Wails configuration
└── README.md          # This file
```

## Customization

- **Tailwind CSS**: Modify `frontend/tailwind.config.js` to customize themes, plugins, or additional utilities.
- **React Components**: Add or edit components in `frontend/src` using JavaScript.
- **Go Backend**: Extend backend logic in `app.go` for custom API endpoints or system integrations.
- **Wails Config**: Adjust `wails.json` for app metadata, window settings, or build options.

## Troubleshooting

- **Wails dev fails**: Ensure Go and Wails CLI are correctly installed and added to your PATH.
- **Frontend errors**: Run `npm install` again or check for Node.js version compatibility.
- **Build issues**: Verify that all dependencies are installed and your Go environment is set up.

For further assistance, open an issue on the [GitHub repository](https://github.com/ITSHahrad/orion-wails) or contact [@ITSHahrad](https://github.com/ITSHahrad).