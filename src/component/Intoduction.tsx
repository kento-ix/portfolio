import React from "react";
import Header from "./Header";
import ButtonToDownload from "./ButtonToDownload";

interface HeaderContainerProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const HeaderContainer: React.FC<HeaderContainerProps> = ({ toggleDarkMode, darkMode }) => {
  return (
    <div
      className={`min-h-screen ${darkMode ? "text-white" : "text-black"}`}
      style={{
        backgroundColor: darkMode ? "rgba(7, 5, 14, 0.8)" : "white",
        transition: "background-color 0.3s ease",
      }}
    >
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="pt-16 p-8">
        <div>Hello, I'm</div>
        <div className="text-4xl">Kento Kanehira</div>
        <ButtonToDownload />
      </div>
    </div>
  );
};

export default HeaderContainer;
