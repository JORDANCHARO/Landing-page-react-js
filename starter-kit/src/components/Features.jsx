import React from 'react'
import Container from './Container'
import { features } from '../constants'

const Features = () => {
    return (
        <Container>
            <div className="max-w-4xl py-5 mx-auto lg:py-10">
                <div className="mb-8 space-y-4 text center lg:text-start">
                    <h2 className="h2">Features</h2>
                        <p className="body-1 text-n-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere dignissimos esse.</p>
                    </div>
                    <div className= "grid gap-5 sm:grid-cols-2 lg:gap-10">
                        {features.map((features, index) => (

                            <div key={features.id}
                            className="p-8 space-y-8 border rounded cursor-pointer border-stroke-1 hover:bg-n-8 lg:rounded-2xl animate">
                                <img src={features.image} alt={features.alt} width={48} height={48}/>
                           
                            <div className="space-y-4">
                                    <h3 className="h4"> {features.title} </h3>   
                                    <p className="body-2 text-n-3">  {features.text }</p>      
                            </div>
                                </div>
                    ))}
                    </div>
                </div>
            </Container>
        )
    }

    export default Features
 