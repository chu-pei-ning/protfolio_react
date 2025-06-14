import { useState, useEffect, useRef } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

type Props = {
  isDark: boolean;
};

const Projects = ({ isDark }: Props) => {
  const { t } = useTranslation();
  const [[currentIndex, direction], setCurrent] = useState<[number, number]>([0, 0]);
  const timeoutRef = useRef<number | null>(null);

  const paginate = (newDirection: number) => {
    setCurrent(([prevIndex]) => {
      const newIndex =
        (prevIndex + newDirection + projects.length) % projects.length;
      return [newIndex, newDirection];
    });
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    timeoutRef.current = setTimeout(() => paginate(1), 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div
      className={`min-h-[calc(100vh-128px)] p-8 flex flex-col items-center gap-8 font-mono relative overflow-hidden ${
        isDark ? 'bg-[#1e1e2e] text-[#d0d0d0]' : 'bg-[#f0faff] text-[#1a1a1a]'
      }`}
      onMouseEnter={() => timeoutRef.current && clearTimeout(timeoutRef.current)}
      onMouseLeave={() => {
        timeoutRef.current = setTimeout(() => paginate(1), 5000);
      }}
    >
      <h1 className={`text-3xl font-bold ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>
        {t('project_title')}
      </h1>

      <div className="relative w-full flex justify-center items-center max-w-[800px]">
        {/* 左右按鈕 */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-0 z-10 text-2xl hover:scale-110 transition"
          aria-label="Previous Project"
        >
          <FaArrowLeft />
        </button>

        {/* ProjectCard 動畫切換 */}
        <div className="w-full">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <ProjectCard
                key={currentIndex}
                project={projects[currentIndex]}
                isDark={isDark}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={() => paginate(1)}
          className="absolute right-0 z-10 text-2xl hover:scale-110 transition"
          aria-label="Next Project"
        >
          <FaArrowRight />
        </button>
      </div>
      <div>
        <Link to="/all-projects">{t("See_All_Projects")}</Link>
      </div>
    </div>
  );
};

export default Projects;

