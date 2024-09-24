"use client"; // Se você estiver usando hooks

import React from 'react';
import Copa from './Copa';
import Selecoes from './Selecoes';
import Link from 'next/link';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link href="/">Copa do Mundo</Link></li>
          <li><Link href="/selecoes">Seleções</Link></li>
        </ul>
      </nav>
      <Copa />
      <Selecoes />
      {/* Para Selecao, use a navegação dinâmica através de Links */}
    </div>
  );
};

export default App;
