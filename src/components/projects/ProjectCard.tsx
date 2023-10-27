import {Typography, Grid} from '@mui/material';

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
  const direction = !isOdd ? 'row' : 'row-reverse';
  return (
    <Grid
      width={'100%'}
      m={{xs: '1rem', md: '2rem', lg: '4rem', xl: '4rem'}}
      display={'flex'}
      flexDirection={{
        xs: 'column',
        lg: direction,
        md: direction,
        xl: direction
      }}
      alignItems={'center'}
      justifyContent={'center'}>
      <Grid
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        // p={{xs: '0px', md: '0.2rem', lg: '2rem', xl: '2rem'}}
        p={'2rem'}
        width={{xs: '100%', md: '75%', lg: '40%', xl: '40%'}}
        sx={{height: '100%'}}>
        <img
          src={img}
          height={'65%'}
          width={'100%'}
          style={{objectFit: 'cover', borderRadius: '6px'}}
        />
      </Grid>
      <Grid
        justifyContent={'center'}
        alignItems={'center'}
        p={'2rem'}
        sx={{height: '100%'}}
        width={{xs: '100%', md: '75%', lg: '40%', xl: '40%'}}>
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
      </Grid>
    </Grid>
  );
};

export default ProjectCard;
