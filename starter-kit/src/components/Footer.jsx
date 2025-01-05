import React from 'react';
import Container from './Container';
import { social } from '../constants';

const Footer = () => {
  return (
    <div className="mt-5 bg-n-7 lg:py-12 lg:mt-16">
      <Container className="flex flex-col items-center justify-between gap-3 lg:flex-row lg:gap-1 body-3 text-n-3">
        <div className="flex items-center">
          {social.map((link) => (
            <a key={link.id} title={link.alt} href={link.link} target="_blank" rel="noreferrer">
              <img src={link.ico} alt={link.alt} width={20} height={20} />
            </a>
          ))}
        </div>
        <div className="space-x-4">
          <a href="#/" target="_blank" rel="noreferrer">Terms & Conditions</a>
          <a href="#/" target="_blank" rel="noreferrer">Privacy Policy</a>
        </div>
        <div>
          2024 All rights reserved{' '}
          <a href="#/" target="_blank" rel="noreferrer">Jordan Dev</a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
