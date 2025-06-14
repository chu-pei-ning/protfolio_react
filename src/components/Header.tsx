import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MdWbSunny, MdNightlight } from 'react-icons/md';
import { useState } from 'react';

interface HeaderProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

const Header = ({ isDark, setIsDark }: HeaderProps) => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
    setIsMenuOpen(false); // 關閉選單
  };

  return (
    <header className={`sticky top-0 z-50 lxgw-wenkai-tc-regular px-6 py-3 ${isDark ? "text-white bg-[#1e1e2e]" : "text-black bg-sky-400"}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 w-1/3">
          <div className="w-12 h-12 shimmer-mask" />
          <h1 className="text-2xl drop-shadow-lg">Julia</h1>
        </div>

        <nav className="hidden sm:flex items-center text-lg w-2/3 justify-between">
          <div className='flex gap-10 pl-25'>
            <Link to="/">{t('home')}</Link>
            <Link to="/about">{t('about')}</Link>
            <Link to="/projects">{t('projects')}</Link>
            <Link to="/contact">{t('contact')}</Link>
          </div>
          <div className='flex gap-10'>
            <button onClick={toggleLanguage} className="text-sm">
              {t('switch_lang')}
            </button>
            <button onClick={() => setIsDark(!isDark)} className="text-2xl">
              {isDark ? <MdWbSunny /> : <MdNightlight />}
            </button>
          </div>
        </nav>

        {/* 手機版 burger icon */}
        <button
          className="sm:hidden text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* 手機版選單 */}
      {isMenuOpen && (
        <div className="sm:hidden mt-4 flex flex-col gap-4 text-lg">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>{t('home')}</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>{t('about')}</Link>
          <Link to="/projects" onClick={() => setIsMenuOpen(false)}>{t('projects')}</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>{t('contact')}</Link>
          <button onClick={toggleLanguage} className="text-sm flex justify-start">
            {t('switch_lang')}
          </button>
          <button onClick={() => { setIsDark(!isDark); setIsMenuOpen(false); }} className="text-2xl w-fit">
            {isDark ? <MdWbSunny /> : <MdNightlight />}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
