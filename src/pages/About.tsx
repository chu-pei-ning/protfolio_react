import { useTranslation } from 'react-i18next';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt
} from 'react-icons/fa';
import {
  SiTailwindcss, SiAstro, SiExpress, SiMongodb, SiSass, SiNextdotjs, SiTypescript, SiPostman
} from 'react-icons/si';
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from 'framer-motion';

type Props = {
  isDark: boolean;
};

const Skill = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <span className="flex items-center gap-1 hover:underline cursor-pointer">
    {icon} {label}
  </span>
);

const About = ({ isDark }: Props) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`min-h-[calc(100vh-128px)] px-8 py-12 font-mono ${
        isDark ? 'bg-[#1e1e2e] text-[#d0d0d0]' : 'bg-[#e6f9ff] text-[#1a1a1a]'
      }`}
    >
      {/* Title */}
      <motion.h1
        className={`text-3xl font-bold mb-6 ${isDark ? 'text-sky-400' : 'text-sky-600'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        About Me
      </motion.h1>

      {/* Paragraphs */}
      <motion.div
        className="space-y-4 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <p>{t('about_p1')}</p>
        <p>{t('about_p2')}</p>
        <p>{t('about_p3')}</p>
        <p>{t('about_p4')}</p>
      </motion.div>

    {/* Skills */}
    <motion.h1
      className={`text-2xl font-bold mb-4 ${isDark ? 'text-sky-400' : 'text-sky-600'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
    >
      Skills
    </motion.h1>

    {/* Languages */}
    <motion.div
      className="space-y-4 mb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.3 }}
    >
      <h3 className="text-xl font-medium mb-2">Languages</h3>
      <div className="flex flex-wrap gap-4">
        <Skill icon={<FaJs className="text-yellow-400" />} label="JavaScript" />
        <Skill icon={<SiTypescript className="text-blue-500" />} label="TypeScript" />
        <Skill icon={<FaHtml5 className="text-orange-600" />} label="HTML" />
        <Skill icon={
          <img
            src="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg"
            alt="Python"
            className="w-4"
          />
        } label="Python" />
      </div>
    </motion.div>

    {/* Frameworks */}
    <motion.div
      className="space-y-4 mb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      <h3 className="text-xl font-medium mb-2">Frameworks</h3>
      <div className="flex flex-wrap gap-4">
        <Skill icon={<FaReact className="text-cyan-400" />} label="React" />
        <Skill icon={<SiNextdotjs className="text-black dark:text-white" />} label="Next.js" />
        <Skill icon={<FaNodeJs className="text-green-500" />} label="Node.js" />
        <Skill icon={<SiExpress className="text-gray-400" />} label="Express.js" />
        <Skill icon={<SiAstro className="text-purple-400" />} label="Astro" />
      </div>
    </motion.div>

    {/* Styling */}
    <motion.div
      className="space-y-4 mb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.7 }}
    >
      <h3 className="text-xl font-medium mb-2">Styling</h3>
      <div className="flex flex-wrap gap-4">
        <Skill icon={<SiTailwindcss className="text-sky-400" />} label="Tailwind CSS" />
        <Skill icon={<FaCss3Alt className="text-blue-500" />} label="CSS" />
        <Skill icon={<SiSass className="text-pink-400" />} label="Sass" />
      </div>
      </motion.div>

      {/* Database */}
      <motion.div
        className="space-y-4 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9 }}
      >
        <h3 className="text-xl font-medium mb-2">Database</h3>
        <div className="flex flex-wrap gap-4">
          <Skill icon={<SiMongodb className="text-green-700" />} label="MongoDB" />
          <Skill icon={<BiLogoPostgresql className="text-blue-600" />} label="PostgreSQL" />
        </div>
      </motion.div>

      {/* Tools */}
      <motion.div
        className="space-y-4 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1 }}
      >
        <h3 className="text-xl font-medium mb-2">Tools</h3>
        <div className="flex flex-wrap gap-4">
          <Skill icon={<FaGitAlt className="text-red-500" />} label="Git & GitHub" />
          <Skill icon={<SiPostman className="text-orange-400" />} label="Postman" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
