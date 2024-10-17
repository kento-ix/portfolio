import React, { useEffect } from "react";
import useWindowSize from "../custom/useWindowSize"; // useWindowSizeをインポート
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { textVariants } from "../animation/textAnimations";

interface HeaderProps {
    toggleDarkMode: () => void;
    darkMode: boolean;
}

const About: React.FC<HeaderProps> = ({ toggleDarkMode, darkMode }) => {
    const { width } = useWindowSize(); // ウィンドウのサイズを取得
    const isMobile = width < 768; // モバイルの条件を設定
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.7,  // 10% ビューポート内に入った時にトリガー
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    return (
        <div
            className={`min-h-screen ${darkMode ? "text-white" : "text-black"}`}
            style={{
                backgroundColor: darkMode ? "rgba(7, 5, 14, 0.8)" : "white",
                transition: "background-color 0.3s ease",
            }}
        >
            <div>
                {/* モバイル版 */}
                {isMobile ? (
                    <div className="rounded-xl bg-blue-500/40 ">
                        <p className="text-center">hello</p>
                    </div>
                ) : (
                    // デスクトップ版
                    <div className="pt-10">
                        <div className="text-lg rounded-xl bg-gray-500/40 w-1/3 ml-32 flex items-center justify-center p-3" style={{ height: '350px' }}>
                            <motion.p
                                ref={ref}               
                                variants={textVariants}  
                                initial="hidden"         
                                animate={controls} 
                            >
                                Hello, I'm Kento Kanehira, a passionate web developer with a focus on creating dynamic and responsive user experiences. I specialize in React, TypeScript, and modern web technologies.
                            </motion.p>
                        </div>
                        
                    </div>
                )}
            </div>
        </div>
    );
};

export default About;
