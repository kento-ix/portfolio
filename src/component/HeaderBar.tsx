import React, { useState } from "react";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import useWindowSize from "../custom/useWindowSize"; // useWindowSizeをインポート

interface HeaderProps {
    toggleDarkMode: () => void; 
    darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode, darkMode }) => {
    const { width } = useWindowSize(); // ウィンドウのサイズを取得
    const isMobile = width < 768; // モバイルの条件を設定
    const [isMenuOpen, setIsMenuOpen] = useState(false); // メニューの開閉状態

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // メニューの開閉を切り替え
    };

    return (
        <div className="sticky top-0 flex justify-between p-4">
            {/* ハンバーガーメニュー（モバイルの場合） */}
            {isMobile ? (
                <>
                    <button onClick={toggleMenu} className="flex items-center">
                        {/* ハンバーガーアイコン */}
                        <div className="w-6 h-6 flex flex-col justify-between">
                            <div className="h-1 w-full bg-gray-500"></div>
                            <div className="h-1 w-full bg-gray-500"></div>
                            <div className="h-1 w-full bg-gray-500"></div>
                        </div>
                    </button>
                    {/* メニューが開いているときに表示 */}
                    {isMenuOpen && (
                        <div className="absolute bg-black shadow-lg rounded-lg p-4 mt-2 right-0 z-10">
                            <button className="block hover:text-blue-300 text-white text-lg hover:underline">Home</button>
                            <button className="block hover:text-blue-300 text-white text-lg hover:underline">About</button>
                            <button className="block hover:text-blue-300 text-white text-lg hover:underline">Project</button>
                            <button className="block hover:text-blue-300 text-white text-lg hover:underline">Contact</button>
                        </div>
                    )}
                </>
            ) : (
                // デスクトップの場合
                <div className="p-4 border-2 border-gray-500 rounded-md mx-auto item-center justify-center flex space-x-6">
                    <button className="hover:text-blue-300 text-lg hover:underline">Home</button>
                    <button className="hover:text-blue-300 text-lg hover:underline">About</button>
                    <button className="hover:text-blue-300 text-lg hover:underline">Project</button>
                    <button className="hover:text-blue-300 text-lg hover:underline">Contact</button>
                </div>
            )}
            {/* ダークモードボタン */}
            <button
                onClick={toggleDarkMode}
                className="rounded-full border-2 border-gray-500 w-10 h-10"
            >
                {darkMode ? <WbSunnyIcon /> : <DarkModeIcon />}
            </button>
        </div>
    );
};

export default Header;
