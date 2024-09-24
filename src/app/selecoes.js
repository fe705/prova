// Selecoes.js
"use client"; // Se você estiver usando hooks

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link'; // Use next/link

const Selecoes = () => {
  const [selecoes, setSelecoes] = useState([]);

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/gustavoclay/sport/selecoes')
      .then(response => {
        setSelecoes(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Seleções da Copa do Mundo 2022</h1>
      <ul>
        {selecoes.map(selecao => (
          <li key={selecao.id}>
            <Link href={`/selecoe/${selecao.id}`}>{selecao.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selecoes; // Certifique-se de que está exportando corretamente
