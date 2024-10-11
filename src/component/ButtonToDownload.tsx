import React from "react";
import '../index.css';

const ButtonToDownload = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/dummy.pdf';
        link.download = 'resume.pdf';
        link.click();
    };

    return(
        <button onClick={handleDownload} className="my-8 p-4 bg-blue-500 text-white rounded-2xl">
            Download CV
        </button>
    );
};

export default ButtonToDownload;