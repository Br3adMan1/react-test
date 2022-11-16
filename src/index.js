import React from "react"
import ReactDOM from "react-dom/client"
import App from "./componenets/App"
import "./styles/global.css"

const reactContentRoot = document.getElementById("root")

// Create a root.
const root = ReactDOM.createRoot(reactContentRoot)

// Initial render
root.render(<App />)