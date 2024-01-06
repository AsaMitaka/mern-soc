import Button from '../components/ui/button';
import Input from '../components/ui/input';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Button>Primary</Button>
      <Button isLarge>isLarge Primary</Button>
      <Button isLarge variant="secondary">
        isLarge Primary
      </Button>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Input placeholder="text" />
        <Input placeholder="text" isLarge />
        <Input placeholder="text" />
        <Input variant="secondary" placeholder="text" isLarge />
      </div>
    </div>
  );
};

export default Home;
