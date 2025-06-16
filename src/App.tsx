// src/App.tsx
import React from "react";
import "react-pro-sidebar/dist/css/styles.css";
import "remixicon/fonts/remixicon.css";
import Sidebar from "./components/TypeScript/Sidebar"; // Adjust if your folder is different

function App() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "20px" }}>
        <h1>Welcome to Pro Sidebar</h1>
      </main>
    </div>
  );
}

export default App;

