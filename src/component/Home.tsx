import React from "react";
import { motion } from "framer-motion";
import Header from "./HeaderBar";
import ButtonToDownload from "../functions/ButtonToDownload";
import ButtonGmail from "../functions/ButtonToCopy";
import useWindowSize from "../custom/useWindowSize";
import { ShootingStars } from "../aceternity/ShootingStar";
import { StarsBackground } from "../aceternity/StarsBackground";
import { TypewriterEffect } from "../aceternity/Typewritter";
import { HTMLIcon } from "../icons/HTMLIcon";
import { FadeIn, FadeInWithStagger } from "../animation/fadeInAnimation";


interface HeaderContainerProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const HeaderContainer: React.FC<HeaderContainerProps> = ({
  toggleDarkMode,
  darkMode,
}) => {
  const { width } = useWindowSize();

  const isMobile = width < 768;

  return (
    <div
      className={`min-h-screen relative ${darkMode ? "text-white" : "text-black"}`}
      style={{
        backgroundColor: darkMode ? "rgba(7, 5, 14, 0.8)" : "white",
        transition: "background-color 0.3s ease",
      }}
    >
      {/* 星の背景を追加 */}
      <StarsBackground darkMode={darkMode} />

      {/* 流星のアニメーションを追加 */}
      <ShootingStars 
        minSpeed={10} 
        maxSpeed={30} 
        minDelay={1200} 
        maxDelay={4200} 
        starColor={darkMode ? "#FFD700" : "#9E00FF"} // ダークモード時は金色
        trailColor={darkMode ? "#2EB9DF" : "#2EB9DF"} // どちらの場合もトレイルカラーは同じ
        className="absolute inset-0" // 背景に適用するために絶対位置を指定
      />

      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      {/*モバイル版の場合*/}
      {isMobile ? ( 
        <div className="mt-16 px-4 flex-col flex items-center">
          <div className="text-center text-2xl mb-2">Hello, I'm</div>
          <div className="text-4xl text-center w-full">Kento Kanehira</div>
          <div className="text-xl text-center w-full mt-2">Full-Stack Enginner</div>
          <div className="mt-4 self-center space-x-4">
            <ButtonToDownload darkMode={darkMode}/> 
            <ButtonGmail darkMode={darkMode}/>
          </div>
        </div>
      ) : ( //デスクトップの場合
        <div className="mt-36 pr-96 mr-40 items-start flex-col flex">
          <div className="w-full justify-center text-center text-4xl mb-4">Hello, I'm</div>
          <div className="text-6xl text-center justify-center w-full">Kento Kanehira</div>
          <div className="text-3xl text-center justify-center w-full mt-4">Full-Stack Enginner</div>
          <div className="mt-2 self-center space-x-6">
            <ButtonToDownload darkMode={darkMode}/> 
            <ButtonGmail darkMode={darkMode}/>
          </div>
          <div className="icon-containers">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <HTMLIcon/>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderContainer;
