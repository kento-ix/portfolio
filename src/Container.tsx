import React, { useState } from "react";
import Header from "./component/Header";
import ButtonToDownload from "./component/ButtonToDownload";

const HeaderContainner: React.FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen`}>
            <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            <div className="pt-16 p-8">
                <h1 className="text-4xl">Welcome to my Portfolio</h1>
                <ButtonToDownload/>
            </div>
        </div>
    );
};

export default HeaderContainner;
