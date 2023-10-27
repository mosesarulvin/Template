import {Grid} from '@mui/material';
import Section from '../layouts/Section';
import Profile from '../profile/Profile';
import Navbar from '../navbar/Navbar';
import Projects from '../projects/Projects';

const LandingPage: React.FC = () => {
  const arr: any[] = [Profile, Projects];
  return (
    <Grid>
      <Navbar />
      {arr.map((Component: any, index: number) => (
        <Section key={`section_${index}`} isOdd={index % 2 !== 0}>
          {<Component />}
        </Section>
      ))}
    </Grid>
  );
};

export default LandingPage;
