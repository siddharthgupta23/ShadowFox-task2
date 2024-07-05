import React from 'react';
import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";

const App = () => {
  return (
    <main className="bg-primary text-tertiary">
      <Navbar />
      <Admin />
    </main>
  );
};

export default App;
