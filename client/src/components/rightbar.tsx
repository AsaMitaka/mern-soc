import { useNavigate, useSearchParams } from 'react-router-dom';
import { Input, Trends } from '.';
import { useCallback, useEffect, useState } from 'react';

const RightBar = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
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
    <div className="flex flex-col">
      <div className="px-4">
        <Input
          isBig
          onKeyDown={handleKeyDown}
          onChange={(e) => handleSearch(e)}
          placeholder="Search"
          value={search}
        />
      </div>
      <Trends />
    </div>
  );
};

export default RightBar;
