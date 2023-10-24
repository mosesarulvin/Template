import GridCenter from '../layouts/GridCenter';
import ProjectCard from './ProjectCard';

interface projectInterface {
  title: string;
  body: string;
  img: string;
}

const Projects: React.FC = () => {
  const projects: projectInterface[] = [
    {
      title: 'Creative Design',
      body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio vel repellendus id alias pariatur, laboriosam asperiores molestias, saepe culpa quod praesentium? Similique pariatur dolor provident eveniet sit hic quos veniam?',
      img: './landing1.jpg'
    },
    {
      title: 'Online Classes',
      body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio vel repellendus id alias pariatur, laboriosam asperiores molestias, saepe culpa quod praesentium? Similique pariatur dolor provident eveniet sit hic quos veniam?',
      img: './landing2.webp'
    },
    {
      title: 'Shopify',
      body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio vel repellendus id alias pariatur, laboriosam asperiores molestias, saepe culpa quod praesentium? Similique pariatur dolor provident eveniet sit hic quos veniam?',
      img: './landing3.png'
    }
  ];
  return (
    <GridCenter
      direction="column"
      sx={{
        justifyContent: 'space-around',
        padding: '0px 2rem',
        height: '100%'
      }}>
      {projects.map((project: projectInterface, index: number) => {
        return (
          <ProjectCard
            key={`Projects_${index}`}
            title={project.title}
            body={project.body}
            img={project.img}
            isOdd={index % 2 !== 0}
          />
        );
      })}
    </GridCenter>
  );
};

export default Projects;
