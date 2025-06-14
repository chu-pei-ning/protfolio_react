import { useTranslation } from 'react-i18next';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiAstro, SiExpress, SiMongodb, SiSass, SiNextdotjs } from 'react-icons/si';
import { BiLogoPostgresql } from "react-icons/bi";

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
    <div
      className={`min-h-[calc(100vh-128px)] px-8 py-12 font-mono ${
        isDark ? 'bg-[#1e1e2e] text-[#d0d0d0]' : 'bg-[#e6f9ff] text-[#1a1a1a]'
      }`}
    >
      <h1 className={`text-3xl font-bold mb-6 ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>
        About Me
      </h1>

      <div className="space-y-4 mb-10">
        <p>{t('about_p1')}</p>
        <p>{t('about_p2')}</p>
        <p>{t('about_p3')}</p>
        <p>{t('about_p4')}</p>
      </div>

      <div>
        <h2  className={`text-2xl font-bold mb-4 ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>Skills</h2>

        {/* Frontend Skills */}
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Frontend</h3>
          <div className="flex flex-wrap gap-4">
            <Skill icon={<FaHtml5 className="text-orange-600" />} label="HTML" />
            <Skill icon={<FaCss3Alt className="text-blue-500" />} label="CSS" />
            <Skill icon={<SiSass className="text-pink-400" />} label="Sass" />
            <Skill icon={<FaJs className="text-yellow-400" />} label="JavaScript" />
            <Skill icon={<FaReact className="text-cyan-400" />} label="React" />
            <Skill icon={<SiAstro className="text-purple-400" />} label="Astro" />
            <Skill icon={<SiTailwindcss className="text-sky-400" />} label="Tailwind CSS" />
          </div>
        </div>

        {/* Backend Skills */}
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Backend</h3>
          <div className="flex flex-wrap gap-4">
            <Skill icon={<FaNodeJs className="text-green-500" />} label="Node.js" />
            <Skill icon={<SiExpress className="text-gray-400" />} label="Express.js" />
            <Skill icon={<img src="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg" alt="Python" className="w-4" />} label="Python" />
          </div>
        </div>

        {/* Fullstack Skills */}
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Fullstack</h3>
          <div className="flex flex-wrap gap-4">
            <Skill icon={<SiNextdotjs className="text-black" />} label="Next.js" />
          </div>
        </div>

        {/* DB Skills */}
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Data base</h3>
          <div className="flex flex-wrap gap-4">
            <Skill icon={<SiMongodb className="text-green-700" />} label="MongoDB" />
            <Skill icon={<BiLogoPostgresql className="text-blue-600" />} label="Postgres" />
          </div>
        </div>

        {/* Other Tools */}
        <div>
          <h3 className="text-xl font-medium mb-2">Tools</h3>
          <div className="flex flex-wrap gap-4">
            <Skill icon={<FaGitAlt className="text-red-500" />} label="Git & GitHub" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
