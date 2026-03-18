# Running INFINITRIP Local Server

## Quick Start Options

### Option 1: Python HTTP Server (Recommended - Simplest)

**Windows:**
```bash
python -m http.server 8000
```

**Mac/Linux:**
```bash
python3 -m http.server 8000
```

Then open: **http://localhost:8000** in your browser

---

### Option 2: Using the Batch/Script Files

**Windows:**
- Double-click `start-server.bat`

**Mac/Linux:**
```bash
chmod +x start-server.sh
./start-server.sh
```

---

### Option 3: Node.js HTTP Server

If you prefer Node.js:

**Install http-server globally:**
```bash
npm install -g http-server
```

**Run the server:**
```bash
http-server -p 8000
```

Or use npx (no installation needed):
```bash
npx http-server -p 8000
```

---

### Option 4: VS Code Live Server Extension

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

---

## Why Use a Local Server?

- **localStorage** works properly
- **CORS** issues are avoided
- **File paths** work correctly
- **API calls** behave as expected
- Better testing environment

---

## Default Port

The server runs on port **8000** by default.

To use a different port, change `8000` to your preferred port number in the commands above.

---

## Stopping the Server

Press `Ctrl+C` in the terminal to stop the server.

