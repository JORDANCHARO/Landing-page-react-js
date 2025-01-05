import React from 'react';
import { features, pricing } from '../constants';
import Header from './Header';
import Container from './Container';
import Headings from './Headings'; // Assurez-vous que ce composant existe et est bien écrit
import { icoCheck } from '../assets';
import Button from './Button'; // Ajout de l'importation du composant Button

const Pricing = () => {
  return (
    <div id="pricing">
      <Headings title="Jordan dev" subtitle="Pricing" />
      <Container>
        <div className="grid gap-5 lg:grid-cols-3 lg:gap-10 lg:mb-16">
          {pricing.map((price) => (
            <div key={price.id} className={price.featured ? '' : 'lg:mt-14'}>
              <div
                className={`${
                  price.featured ? 'bg-n-7' : 'bg-n-8'
                } rounded-xl lg:rounded-2xl p-6 lg:p-12 text-center lg:text-start`}
              >
                <div className="uppercase text-caption-1 text-n-5">
                  {price.plan}
                </div>
                <div className="space-y-3">
                  <span className="h1 text-n-5">CFA</span>
                  <span className="h1">{price.amount}</span>
                </div>
                <hr
                  className={`mb-4 border-t mt-7 lg:mt-16 ${
                    price.featured ? 'border-n-6' : 'border-stroke-1'
                  }`}
                />
                <div className="pb-8 space-y-4">
                  {price.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center gap-3 lg:justify-start"
                    >
                      <img
                        src={icoCheck}
                        alt="Icone check"
                        width={24}
                        height={24}
                      />
                      <div className="body-2 text-n-3">{feature}</div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center lg:justify-start">
                  <Button theme={price.featured ? 'primary' : 'secondary'}>
                    {price.amount > 0
                      ? 'Achetez ce forfait'
                      : 'Allons-y pour du gratuit'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Pricing;
