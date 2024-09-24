'use client'; 

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Copa = () => {
  const [copaInfo, setCopaInfo] = useState(null);
  const [estadioImages, setEstadioImages] = useState([]);

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/gustavoclay/sport/copa_mundo')
      .then(response => {
        setCopaInfo(response.data);
        setEstadioImages(response.data.estadios);
      })
      .catch(error => console.error(error));
  }, []);

  if (!copaInfo) return <div>Loading...</div>;

  return (
    <div>
      <h1>{copaInfo.titulo}</h1>
      <p>{copaInfo.descricao}</p>
      <h2>Estádios</h2>
      <div className="carousel">
        {estadioImages.map((img, index) => (
          <img key={index} src={img} alt={`Estádio ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Copa;
