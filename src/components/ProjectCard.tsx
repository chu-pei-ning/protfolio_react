// /components/ProjectCard.tsx
import { FaGithub } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';
import type { Project } from '../data/projects';
import { useTranslation } from 'react-i18next';

type Props = {
  project: Project;
  isDark: boolean;
};

const ProjectCard = ({ project, isDark }: Props) => {
  const { t } = useTranslation();

  return (
    <div className={`rounded-xl p-6 shadow-lg w-full max-w-[800px] ${isDark ? 'bg-[#2e2e2e]/80 text-white' : 'bg-[#e6f9ff] text-[#1a1a1a]'}`}>
      <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>{t(project.titlekey)}</h3>
      <img src={isDark ? project.imageDark : project.imageLight} alt={t(project.titlekey)} className="rounded-lg mb-4 object-cover" />
      <div className="flex justify-between text-sm">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:underline"
        >
          <FaGithub /> GitHub
        </a>
        <div className="flex gap-2 mb-4">{project.techs.map((icon, i) => <span key={i}>{icon}</span>)}</div>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
            <BiLinkExternal /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
