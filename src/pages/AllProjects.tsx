import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type Props = {
  isDark: boolean;
};

const AllProjects = ({isDark}: Props) => {
  const { t } = useTranslation();

  return (
    <div
      className={`min-h-[calc(100vh-128px)] p-8 flex flex-col items-center gap-8 font-mono ${
        isDark ? 'bg-[#1e1e2e] text-[#d0d0d0]' : 'bg-[#f0faff] text-[#1a1a1a]'
      }`}
    >
      <h1 className={`text-3xl font-bold ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>{t('project_title')}</h1>

      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} isDark={isDark} />
      ))}
      <Link to='/projects'>{t('back')}</Link>
    </div>
  );
}

export default AllProjects