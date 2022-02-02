import React from 'react';
import { useEffect, useState } from 'react';

const Person = () => {
  const api = 'https://rickandmortyapi.com/api/character/5';

  const [allData, setAllData] = useState([]);
  const { name } = allData;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setAllData(data);
    })();
  }, [api]);

  return (
    <div>
      <ul>{name}</ul>
    </div>
  );
};

export default Person;
