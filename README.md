# 🚀 Alt:V Masterlist Viewer – Orion Wails Edition

A polished cross‑platform desktop application for browsing and viewing **Alt:V masterlist server data** — built with the **Orion Wails** boilerplate, **React 18**, **Wails v2 (Go)**, and **Tailwind CSS v3**.

---

## 📖 Overview

This application fetches live Alt:V server data from the masterlist API, presents it in a responsive interface, and allows users to view **detailed information** about each server by simply clicking on it.

The project is powered by **Orion Wails**, combining a Go backend with a React + Tailwind CSS frontend for speed, aesthetic design, and cross‑platform desktop delivery.

---

## 📥 Download

You can download the latest compiled binaries of the application from the **[Releases section](https://github.com/ITSHahrad/altv-masterlist-app/releases)**.

| Platform  | Download Link |
|-----------|--------------|
|  **Windows** | [Download for Windows](https://github.com/ITSHahrad/altv-masterlist-app/releases/latest) |
|  **Linux**   | [Download for Linux](https://github.com/ITSHahrad/altv-masterlist-app/releases/latest) |

> ⚠ **Note:** macOS builds are not yet available; please build from source on macOS.

---

## 🛠 Tech Stack

- **Frontend**: React v18 (JavaScript)
- **UI Styling**: Tailwind CSS v3 (JIT compilation for instant styling updates)
- **Build Tool**: Vite v4 (lightning‑fast hot‑reloads)
- **Backend**: Wails v2 (Go-based framework for desktop apps)
- **Boilerplate**: Orion Wails (customized)
- **Supported Platforms**: Windows, macOS, Linux

---

## ✨ Features

- 📡 **Live API Fetching**: Pulls real-time server data from the Alt:V masterlist API.
- 🖥 **Dual View Modes**:
  - **Server List View** – Compact list of all servers with icons and player stats.
  - **Server Detail View** – Full information for a selected server, with back navigation.
- 🎨 **Modern & Responsive UI**:
  - Built with Tailwind CSS
  - Works on various screen sizes
  - Includes hover effects, themed scrollbars, and custom styling
- ⚡ **Optimized Build**: Small, fast binary with Wails packaging.
- 🛠 **Go-Powered Backend**: Strong API handling and data processing.

---

## 📦 Prerequisites

- [Go](https://golang.org/dl/) (v1.18+)
- [Node.js](https://nodejs.org/) (v16+)
- [Wails CLI](https://wails.io/docs/gettingstarted/installation):
  ```bash
  go install github.com/wailsapp/wails/v2/cmd/wails@latest
  ```

---

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/ITSHahrad/altv-masterlist-app.git
   cd altv-masterlist-app
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Run in development mode**
   ```bash
   wails dev
   ```

---

## 🏗 Building for Production

To generate a runnable desktop binary for your OS:

```bash
wails build
```

Output binaries will be located in `build/bin/`.

--- 

## 🐞 Troubleshooting

- **Dev mode fails** → Check if Go, Node.js, and Wails CLI are installed and up to date.
- **Frontend errors** → Run `npm install` or ensure you’re using Node.js v16+.
- **Build failures** → Confirm your build environment matches your OS requirements for Wails.

---

## 📌 Notes

- This app was **built using the Orion Wails boilerplate**, customized for the Alt:V Masterlist project.
- Orion Wails blends a modern frontend workflow with Wails’ native desktop capabilities — allowing for **fast prototyping** and **production‑ready builds** without heavy dependencies.

---

## 👨‍💻 Author

Shahrad Sheykhlani – [@ITSHahrad](https://github.com/ITSHahrad)  
Founder & CEO – NuXeS Games Community