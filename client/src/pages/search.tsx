import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Input from '../components/ui/input';
import Trends from '../components/trends';

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
    <div className="flex">
      <div className="w-2/3">
        <Input
          isBig
          isRounded
          onKeyDown={handleKeyDown}
          onChange={(e) => handleSearch(e)}
          placeholder="Search"
          value={search}
        />
      </div>
      <div className="w-1/3">
        <Trends />
      </div>
    </div>
  );
};

export default Search;
