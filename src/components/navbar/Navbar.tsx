import GridCenter from '../layouts/GridCenter';
import theme from '../../theme';
import {Grid, Typography, Modal} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from 'react';

const Navbar: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const navOptions: string[] = [
    'Home',
    'Projects',
    'Tech-Stack',
    'Testimonials',
    'About'
  ];
  const getMenuItemsJsx = (
    direction: React.CSSProperties['flexDirection']
  ): React.ReactElement => {
    return (
      <GridCenter direction={direction}>
        <ul
          style={{
            listStyleType: 'none',
            display: 'flex',
            flexDirection: direction
          }}>
          {navOptions.map((navItem: string, index: number) => {
            return (
              <Typography
                height={'100%'}
                my={{xs: '1rem'}}
                key={`Navbar_${index}`}
                variant="body2"
                color={'white'}
                fontSize={{xs: '1.6rem'}}>
                {navItem}
              </Typography>
            );
          })}
        </ul>
      </GridCenter>
    );
  };
  return (
    <GridCenter
      direction="row"
      sx={{backgroundColor: theme?.custom?.background?.primary?.main}}>
      <Grid display={{xs: 'none', md: 'flex', lg: 'flex', xl: 'flex'}}>
        {getMenuItemsJsx('row')}
      </Grid>
      <Grid
        display={{xs: 'flex', md: 'none', lg: 'none', xl: 'none'}}
        width={'100%'}
        padding={'0.2rem 0.5rem'}>
        <MenuIcon
          onClick={() => setOpenModal(true)}
          fontSize="large"
          sx={{color: 'white'}}
        />
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <Grid
            onClick={() => setOpenModal(false)}
            minHeight={'100vh'}
            sx={{
              backgroundColor: theme?.custom?.background?.primary?.dark,
              opacity: '0.92'
            }}
            p={'4rem 0px'}>
            {getMenuItemsJsx('column')}
          </Grid>
        </Modal>
      </Grid>
    </GridCenter>
  );
};

export default Navbar;
