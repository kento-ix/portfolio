import React from "react";

interface ButtonToDownloadProps {
    darkMode: boolean;
}

const ButtonToDownload: React.FC<ButtonToDownloadProps> = ({ darkMode }) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/dummy.pdf';
        link.download = 'resume.pdf';
        link.click();
    };

    return (
        <button
            onClick={handleDownload}
            className={`my-4 p-3 rounded-2xl ${darkMode ? "bg-blue-500/40 text-white" : "bg-blue-500/40 text-black"}`}
        >
            Download CV
        </button>
    );
};

export default ButtonToDownload;
