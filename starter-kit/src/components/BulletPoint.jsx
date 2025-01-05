import React from 'react'
import Container from './Container'
import Headings from './Headings'
import { bulletPoints } from '../constants'

const BulletPoint = () => {
    return (
        <>
        <Headings title="JORDAN DEV" subtitle="comment ca marche?"/>
            <Container>
                    <div className='w-full max-w-6xl py-5 mx-auto space-y-10 lg:py-10 lg:space-y-24'>
                        {bulletPoints.map((bulletPoints) => (
                            <div key={bulletPoints.id} className={`flex flex-col justify-between gap-10 lg:flex-row items center lg:gap-28
                                
                                ${bulletPoints.id % 2 == 0 ? "flex-row" : "lg:flex-row-reverse"}
                                `
                                
                            }
                                    
                                    
                                    
                                    
                                    >
                                
                            <div className="flex justify-center w-full lg:w-7/12" >
                                <img src={bulletPoints.image} alt={bulletPoints.alt} width={bulletPoints.width} height={bulletPoints.height}  className='px-20 lg:px-0'/>
                            </div>
                            <div className='w-full space-y-5 text-center lg:w-5/12 lg:text-left'>
                                <h3>  {bulletPoints.title} </h3>
                                <p className='body-1 text-n-5'>{bulletPoints.text}</p>
                            </div>
                            </div>

                    ) )} 
        </div>
        </Container>
        </>
  )
}

export default BulletPoint
