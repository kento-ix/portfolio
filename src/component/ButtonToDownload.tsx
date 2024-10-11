import React from "react";

const ButtonToDownload = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/dummy.pdf';
        link.download = 'resume.pdf';
        link.click();
    };

    return(
        <button onClick={handleDownload} className="bg-blue-500 text-white rounded hover:bg-blue-600 shadow-md hover:shadow-lg transition duration-300">
            Download Resume
        </button>
    );
};

export default ButtonToDownload;