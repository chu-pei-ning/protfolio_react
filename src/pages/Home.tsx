import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type Props = {
  isDark: boolean;
};

const Home = ({ isDark }: Props) => {
  const { t } = useTranslation();

  return (
    <div
      className={`h-[calc(100vh-128px)] font-mono px-8 py-16 flex items-center justify-center`}    
    >
      <div className="max-w-2xl space-y-6">
        {/* Title */}
        <h1 className={`text-5xl font-bold ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>
          {t('home_title')}
        </h1>
        <h2 className={`text-xl ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
          {t('home_subtitle')}
        </h2>

        {/* Paragraphs */}
        <p className="text-base leading-relaxed">{t('home_intro1')}</p>
        <p className="text-base leading-relaxed">{t('home_intro2')}</p>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <Link
            to="/about"
            className={`px-5 py-2 border rounded-md transition duration-200 
              ${isDark
                ? 'border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-[#1e1e2e]'
                : 'border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'}`}
          >
            {t('home_btn_about')}
          </Link>
          <Link
            to="/projects"
            className={`px-5 py-2 border rounded-md transition duration-200 
              ${isDark
                ? 'border-[#70f6d6] text-[#70f6d6] hover:bg-[#70f6d6] hover:text-[#1e1e2e]'
                : 'border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white'}`}
          >
            {t('home_btn_project')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
