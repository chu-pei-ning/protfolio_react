import { SiExpress, SiJavascript, SiSass, SiMongodb, SiAstro, SiTypescript } from 'react-icons/si';
import { FaCss3Alt, FaNodeJs } from 'react-icons/fa';

export type Project = {
  titlekey: string;
  imageLight: string;
  imageDark: string;
  techs:  React.ReactNode[];
  github: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    titlekey: 'projects_movie_web',
    imageLight: 'img/projects/movie_web_light.png',
    imageDark: 'img/projects/movie_web_dark.png',
    techs: [
      <SiSass className="text-pink-400 text-xl" key="Sass" />,
      <FaCss3Alt className="text-blue-500 text-xl" key="css" />,
      <SiJavascript className="text-yellow-400 text-xl" key="js" />,
    ],
    github: 'https://github.com/chu-pei-ning/js-movie-web',
    demo: 'https://js-movie-web.vercel.app/index.html',
  },{
    titlekey: 'projects_simple_shopping_web',
    imageLight: 'img/projects/simple_shopping_web.png',
    imageDark: 'img/projects/simple_shopping_web.png',
    techs: [
      <FaCss3Alt className="text-blue-500 text-xl" key="css" />,
      <SiJavascript className="text-yellow-400 text-xl" key="js" />,
    ],
    github: 'https://github.com/chu-pei-ning/oop-and-ts-shopping-web',
    demo: 'https://oop-and-ts-shopping-web.vercel.app/',
  },{
    titlekey: 'teamprojects_chatting_web',
    imageLight: 'img/projects/chattin_web.png',
    imageDark: 'img/projects/chattin_web.png',
    techs: [
      <SiAstro className="text-purple-400 text-xl" key="Astro" />,
      <FaNodeJs className="text-green-500 text-xl" key="Nodejs" />,
      <SiExpress className="text-gray-400 text-xl" key="Express" />,
      <SiMongodb className="text-green-700 text-xl" key="MongoDB" />,
      <SiTypescript className="text-blue-400 text-xl" key="ts" />,
    ],
    github: 'https://github.com/chu-pei-ning/nodejs-chating_web',
    demo: 'tt',

  }
];
