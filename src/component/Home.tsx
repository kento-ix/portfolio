import React from "react";
import Header from "./HeaderBar";
import ButtonToDownload from "../functions/ButtonToDownload";
import ButtonGmail from "../functions/ButtonToCopy";

interface HeaderContainerProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const HeaderContainer: React.FC<HeaderContainerProps> = ({
  toggleDarkMode,
  darkMode,
}) => {
  return (
    <div
      className={`min-h-screen ${darkMode ? "text-white" : "text-black"}`}
      style={{
        backgroundColor: darkMode ? "rgba(7, 5, 14, 0.8)" : "white",
        transition: "background-color 0.3s ease",
      }}
    >
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="pt-16 ml-64 items-start flex-col flex">
        <div className="w-full justify-center text-center text-4xl mb-4">Hello, I'm</div>
        <div className="text-6xl text-center justify-center w-full">Kento Kanehira</div>
        <div className="text-3xl text-center justify-center w-full mt-4">Full-Stack developer</div>
        <div className="mt-2 self-center space-x-6">
          <ButtonToDownload /> 
          <ButtonGmail />
        </div>
      </div>
    </div>
  );
};

export default HeaderContainer;
