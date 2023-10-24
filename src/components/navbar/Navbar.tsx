import GridCenter from '../layouts/GridCenter';
import theme from '../../theme';
import {Typography} from '@mui/material';

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
    </GridCenter>
  );
};

export default Navbar;
