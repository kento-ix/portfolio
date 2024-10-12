import React from "react";

interface HeaderProps {
    toggleDarkMode: () => void;
    darkMode: boolean;
  }

  const About: React.FC<HeaderProps> = ({ toggleDarkMode, darkMode }) => {
    return(
        <div
            className={`min-h-screen ${darkMode ? "text-white" : "text-black"}`}
            style={{
                backgroundColor: darkMode ? "rgba(7, 5, 14, 0.8)" : "white",
                transition: "background-color 0.3s ease",
            }}
        >
            
        <div className="text-base">
            I am a student of Langara COllege Associate degree in Computer Science
        </div>
    </div>
    
    );
};

export default About;