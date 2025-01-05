import React from 'react'
import Container from './Container'
import Button from './Button'
import { uiInterface } from '../assets'
import Grid from './theme/Hero'

 
const Hero = () => {
    return (
            <div className='relative'>
            <Container className="relative z-10 pt-10 space-y-16 lg:py-16">
                <div className='max-w-2xl px-16 mx-auto text-center lg:px-0 space-y-7'>
                    <h1 className='hero'>
                    Build{" "}   

                        <span className='text-transparent bg-clip-text bg-gradient-to-b from-p-3 to-p-2'>
                           Modern website
                            </span>{" "}

                        With JORDAN TALLA 
                    </h1>
                    <p className='body-1 text-n-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex magnam odio magni debitis consequuntur hic quo, enim laudantium voluptatibus obcaecati.</p>
                    <Button theme="primary" href="/#pricing">
                        Pricing and plans
                    </Button>
                </div>
               <img src={uiInterface} alt="ui INTERFACE" />
                
        
            </Container>  
            <Grid/>
            
            </div>
        )
        }

    export default Hero
