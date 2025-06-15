import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

type Props = {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

const Layout = ({isDark, setIsDark}: Props) => {

  // 一開始載入時，檢查 localStorage 裡的 dark mode 設定
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDark(true);
    }
  }, []);

  // 每次 isDark 改變時，存到 localStorage
  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);
  

  return (
    <div className={`min-h-screen flex flex-col relative ${isDark ? "text-[#abb2bf]" : "text-[#1e1e1e]"}`}>

      
      {/* <div className={`bg-cover absolute inset-0 -z-10 before:content-[''] before:absolute before:inset-0 ${
        isDark 
          ? "bg-[url(/img/night_star.jpg)] before:bg-black/70" 
          : "bg-[url(/img/day.jpg)] before:bg-white/60"}`}> */}
        {/* this div is just background */}
      {/* </div> */}
    
      <Header isDark={isDark} setIsDark={setIsDark} />

      <main className={`flex-1 p-6 ${isDark ? 'bg-[#1e1e2e] text-[#d0d0d0]' : 'bg-[#e6f9ff] text-[#1a1a1a]'} font-mono`}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
