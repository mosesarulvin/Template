import {Typography} from '@mui/material';
import GridCenter from '../layouts/GridCenter';

interface ProjectCardInterface {
  title: string;
  body: string;
  img: string;
  isOdd?: boolean;
}

const ProjectCard: React.FC<ProjectCardInterface> = ({
  title,
  body,
  img,
  isOdd
}) => {
  return (
    <GridCenter
      direction={!isOdd ? 'row' : 'row-reverse'}
      sx={{margin: '4rem 0px', justifyContent: 'space-around'}}>
      <GridCenter sx={{height: '100%', width: '40%'}}>
        <img
          src={img}
          height={'65%'}
          width={'100%'}
          style={{objectFit: 'cover', borderRadius: '6px'}}
        />
      </GridCenter>
      <GridCenter sx={{height: '100%', width: '40%'}}>
        <Typography
          width={'100%'}
          my={'1.5rem'}
          textAlign={'left'}
          variant="h2"
          color={'white'}>
          {title}
        </Typography>
        <Typography variant="subtitle1" color={'white'}>
          {body}
        </Typography>
      </GridCenter>
    </GridCenter>
  );
};

export default ProjectCard;
