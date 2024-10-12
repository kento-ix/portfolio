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
        <div className="sticky top-0 flex justify-between p-4">
            <div className="p-4 border-2 border-gray-500 rounded-md mx-auto item-center justify-center flex space-x-6">
                <button className="hover:text-blue-300 text-lg hover:underline">Home</button>
                <button className="hover:text-blue-300 text-lg hover:underline">About</button>
                <button className="hover:text-blue-300 text-lg hover:underline">Project</button>
                <button className="hover:text-blue-300 text-lg hover:underline">Contact</button>
            </div>
            <button
                onClick={toggleDarkMode}
                className=" rounded-full border-2 border-gray-500 w-10 h-10"
            >
                {darkMode ? <WbSunnyIcon /> : <DarkModeIcon />}
            </button>
        </div>
    );
};

export default Header;
