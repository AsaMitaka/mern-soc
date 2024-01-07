import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <h1>About</h1>
      <h3>Pet project</h3>
      <Link target="_blank" to="github.com/asamitaka">
        Github
      </Link>
    </>
  );
};

export default About;
