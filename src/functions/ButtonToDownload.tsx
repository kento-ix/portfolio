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
            className={`relative inline-flex items-center justify-center h-12 rounded-2xl overflow-hidden border ${
                darkMode
                    ? "border-white text-white bg-transparent" // ダークモードのスタイル
                    : "border-black text-black bg-transparent" // ライトモードのスタイル
            } transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-50`}
        >
            {/* アニメーションのスパン */}
            <span className={`absolute inset-0 animate-[shimmer_2s_linear_infinite] ${darkMode ? "bg-gradient-to-r from-[#000103] via-[#1e2631] to-[#000103]" : "bg-gradient-to-r from-[#ffffff] to-[#e5edef]"} bg-[length:200%_100%]`} />
            <span className="relative z-10 px-6 py-2 font-bold">
                Download CV
            </span>
        </button>
    );
};

export default ButtonToDownload;
