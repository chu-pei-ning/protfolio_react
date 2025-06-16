import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Props = {
  isDark: boolean;
};

const Home = ({ isDark }: Props) => {
  const { t } = useTranslation();
  const fullTitle = t('home_title');
  const [displayedTitle, setDisplayedTitle] = useState('');

  // Typing effect
  useEffect(() => {
    let index = 0;
    setDisplayedTitle('');
    const interval = setInterval(() => {
      setDisplayedTitle((prev) => prev + fullTitle.charAt(index));
      index++;
      if (index >= fullTitle.length) clearInterval(interval);
    }, 80); // 文字間隔 ?ms
    return () => clearInterval(interval);
  }, [fullTitle]);

  return (
    <div className={`h-[calc(100vh-128px)] font-mono px-8 py-16 flex items-center justify-center`}>
      <div className="max-w-2xl space-y-6">
        {/* Title with typing effect */}
        <motion.h1
          className={`text-5xl font-bold ${isDark ? 'text-sky-400' : 'text-sky-600'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {displayedTitle}
        </motion.h1>
        <motion.h2
          className={`text-xl ${isDark ? 'text-slate-400' : 'text-gray-600'}`}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          {t('home_subtitle')}
        </motion.h2>

        {/* Paragraphs */}
        <motion.p
          className="text-base leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          {t('home_intro1')}
        </motion.p>
        <motion.p
          className="text-base leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.9 }}
        >
          {t('home_intro2')}
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex gap-4 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.1 }}
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
