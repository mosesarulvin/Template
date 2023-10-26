import GridCenter from '../layouts/GridCenter';
import theme from '../../theme';
import {Grid, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar: React.FC = () => {
  const navOptions: string[] = [
    'Home',
    'Projects',
    'Tech-Stack',
    'Testimonials',
    'About'
  ];
  return (
    <GridCenter
      direction="row"
      sx={{backgroundColor: theme?.custom?.background?.primary?.main}}>
      <Grid display={{xs: 'none', md: 'flex', lg: 'flex', xl: 'flex'}}>
        <GridCenter direction="row">
          <ul
            style={{
              listStyleType: 'none',
              display: 'flex'
            }}>
            {navOptions.map((navItem: string, index: number) => {
              return (
                <Typography
                  key={`Navbar_${index}`}
                  variant="body2"
                  color={'white'}>
                  {navItem}
                </Typography>
              );
            })}
          </ul>
        </GridCenter>
      </Grid>
      <Grid
        display={{xs: 'flex', md: 'none', lg: 'none', xl: 'none'}}
        width={'100%'}
        padding={'0.2rem 0.5rem'}>
        <MenuIcon fontSize="large" sx={{color: 'white'}} />
      </Grid>
    </GridCenter>
  );
};

export default Navbar;
