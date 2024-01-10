import { useEffect, useState } from 'react';
import { NewPost } from '../components';
import Post from '../components/post';
import axios from '../libs/axios';

const Home = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        const postData = await axios.get('/post/all');
        console.log(postData);

        setData(postData);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
    console.log(data);
  }, []);

  return (
    <>
      <NewPost />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </>
  );
};

export default Home;
