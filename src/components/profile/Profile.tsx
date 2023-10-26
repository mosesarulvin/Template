import {Avatar, Typography} from '@mui/material';
import GridColumnCenter from '../layouts/GridCenter';

const Profile: React.FC = () => {
  return (
    <GridColumnCenter sx={{height: '100%', padding: '1.5rem'}}>
      <GridColumnCenter sx={{height: '30%', margin: '0px 2rem'}}>
        <Avatar
          src={'./dhanrajpai/profile.jpg'}
          sx={{width: '200px', height: '200px', border: '4px solid white'}}
        />
      </GridColumnCenter>
      <GridColumnCenter m={'1rem'}>
        <Typography variant="h1" color={'white'} textAlign={'center'}>
          Dhanraj Pai Raiturkar
        </Typography>
      </GridColumnCenter>
      <GridColumnCenter m={'1rem'}>
        <Typography variant="body1" color={'white'}>
          I Build and Deploy
        </Typography>
        <Typography variant="body1" color={'white'}>
          Web APIs
        </Typography>
        <Typography variant="body1" color={'white'}>
          and User Interfaces
        </Typography>
      </GridColumnCenter>
    </GridColumnCenter>
  );
};

export default Profile;
