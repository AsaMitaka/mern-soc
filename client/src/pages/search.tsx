import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Input from '../components/ui/input';
import { PostComp } from '../components';

const Search = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    console.log(searchParams.get('q'));
    const searchData = searchParams.get('q');

    setSearch(searchData);
  }, []);

  const handleSearch = useCallback(
    (e) => {
      e.preventDefault();

      setSearch(e.target.value);
    },
    [setSearch],
  );

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (search.length === 0) return;

      navigate(`/search?q=${search}`);
    }
  };

  return (
    <>
      <Input
        isBig
        isRounded
        onKeyDown={handleKeyDown}
        onChange={(e) => handleSearch(e)}
        placeholder="Search"
        value={search}
      />
      {/* <PostComp /> */}
    </>
  );
};

export default Search;
