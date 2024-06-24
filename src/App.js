import React from "react";
import SearchBar from "./components/SearchBar.js";

const App = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center bg-[#000] p-5 font-firaCode text-white">
      <SearchBar />
    </div>
  );
};

export default App;
