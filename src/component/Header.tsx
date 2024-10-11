// Header.tsx
import React from "react";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface HeaderProps {
    toggleDarkMode: () => void; 
    darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode, darkMode }) => {
    return (
        <div className="flex justify-between p-4">
            <div className=" p-4 rounded-md mx-auto justify-center flex space-x-4">
                <button className="hover:text-blue-300 text-lg">About</button>
                <button className="hover:text-blue-300 text-lg">Home</button>
                <button className="hover:text-blue-300 text-lg">Project</button>
                <button className="hover:text-blue-300 text-lg">Contact</button>
            </div>
            <button
                onClick={toggleDarkMode}
                className="ml-4 p-2 rounded-full border-2 border-gray-500"
            >
                {darkMode ? <WbSunnyIcon /> : <DarkModeIcon />}
            </button>
        </div>
    );
};

export default Header;
