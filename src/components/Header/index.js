import React from 'react';

// import ButtonLink from '../ButtonLink';

import logoChina from '../../assets/images/logo.png';

import './Nav.css';
import Button from '../Button';


export default function Header() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={logoChina} alt="ChinaFlix"/>
      </a>

      <Button as="a" className="Button" href="/">
        Novo vídeo
      </Button>

      
    </nav>
  )
}