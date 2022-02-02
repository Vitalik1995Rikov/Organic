import React from 'react';
import { useEffect, useState } from 'react';

const Person = () => {
  const api = 'https://rickandmortyapi.com/api/character/5';

  const [allData, setAllData] = useState([]);
  const { id, name, image, status, species, gender, location } = allData;
  console.log(allData);

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setAllData(data);
    })();
  }, [api]);

  return (
    <div>
      <ul>{name}</ul>
      <ul>{status}</ul>
      <ul>{species}</ul>
      <ul>{gender}</ul>
    </div>
  );
};

export default Person;
