import React from "react";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Header = ({ toggleDarkMode, darkMode }) => {
    return (
        <div className="fixed top-0 left-0 w-full flex justify-between p-4 bg-opacity-90 z-50">
            <div className="text-2xl font-bold ml-3">Portfolio</div>
            <div className="flex space-x-4">
                <button className="hover:text-blue-500 font-bold">Home</button>
                <button className="hover:text-blue-500 font-bold">About</button>
                <button className="hover:text-blue-500 font-bold">Project</button>
                <button className="hover:text-blue-500 font-bold">Contact</button>
                <button
                    onClick={toggleDarkMode}
                    className="ml-4 p-2 rounded-full border-2 border-gray-500"
                >
                    {darkMode ? <WbSunnyIcon /> : <DarkModeIcon />}
                </button>
            </div>
        </div>
    );
};

export default Header;
