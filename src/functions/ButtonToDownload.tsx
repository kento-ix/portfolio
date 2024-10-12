import React from "react";

const ButtonToDownload = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/dummy.pdf';
        link.download = 'resume.pdf';
        link.click();
    };

    return(
        <button onClick={handleDownload} className="my-4 p-3 bg-blue-800 text-white rounded-2xl">
            Download CV
        </button>
    );
};

export default ButtonToDownload;