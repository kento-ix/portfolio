import { button } from "framer-motion/client";
import React from "react";

const ButtonGmail = () => {
    const gmail = "kento20011105@gmail.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(gmail)
        .then(() => {
            alert("Email copied!!");
        })
        .catch((err) => {
            console.error("Failed to copy email: ", err);
        })
    };

    return (
        <button onClick={copyToClipboard} className="my-4 p-3 bg-blue-800 text-white rounded-2xl">
            Copy Email
        </button>
    )
};

export default ButtonGmail;