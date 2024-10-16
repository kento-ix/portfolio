import React, { useState } from "react";
import HeaderContainer from "./component/Home";
import About from "./component/About";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  // ダークモードをトグルする関数
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`min-h-screen ${darkMode ? "text-white" : "text-black"}`}
      style={{
        backgroundColor: darkMode ? "rgba(7, 5, 14, 0.8)" : "white",
        transition: "background-color 0.3s ease",
      }}
    >
      <HeaderContainer toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <About toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
    </div>
  );
};

export default App;
