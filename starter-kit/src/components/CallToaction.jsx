import React from 'react';
import Container from './Container';
import { icoArrowRight } from '../assets';
import Button from './Button';

    const CallToAction = ( {minify=false}) => {
    return (
        <Container>
        <div className="max-w-4xl py-5 mx-auto lg:py-10">
                <div className={`flex flex-col items-center gap-16 p-6 rounded-xl lg:rounded-3xl bg-gradient-to-tl from-blue-500 to-blue-700
                ${
                    !minify ? "flex flex-col items-center"
                    :"flex flex-col items-center justify-between lg:flex lg:flex-row lg:items-center"
                                                                }
                                                                
                                                                
                                                                
                                                                
                `}
                
                
                    >
            <div className= { minify?"space-y-1 text-center" :"space-y-4 text-center lg:text-start"}>
                <div className="caption-1 text-n-1/50">
                Prêt à commencer ?
                </div>
                <h3 className="h3">Essai gratuit</h3>
            </div>
            <Button theme="primary" className="flex items-center justify-center gap-1">
                <span>COMMENCER</span>
                <img src={icoArrowRight} alt="Flèche vers la droite" width={24} height={24} />
            </Button>
            </div>
        </div>
        </Container>
    );
    };

    export default CallToAction;
