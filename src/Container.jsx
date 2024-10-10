import React, { useState } from "react";
import Header from "./component/header";

const HeaderContainner = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode); 
    };

    return (
        <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen`}>
            <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        </div>
    );
};

export default HeaderContainner;
