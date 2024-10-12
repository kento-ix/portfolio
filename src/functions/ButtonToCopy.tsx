import React from "react";

interface ButtonGmailProps {
    darkMode: boolean;
}

const ButtonGmail: React.FC<ButtonGmailProps> = ({ darkMode }) => {
    const gmail = "kento20011105@gmail.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(gmail)
            .then(() => {
                alert("Email copied!!");
            })
            .catch((err) => {
                console.error("Failed to copy email: ", err);
            });
    };

    return (
        <button
            onClick={copyToClipboard}
            className={`my-4 p-3 rounded-2xl ${darkMode ? "bg-blue-500/40 text-white" : "bg-blue-500/40 text-black"}`}
        >
            Copy Email
        </button>
    );
};

export default ButtonGmail;
