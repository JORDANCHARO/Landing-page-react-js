import React from 'react'
import Container from './Container'

    const Headings = ({title,subtitle}) => {
    return (
        <Container className={"py-5 lg:py-10"}>
            <div className='text-center uppercase caption-1 text-n-5'>
                {title} 
            </div>
            <h2 className='text-center h2'>{subtitle}</h2>
        </Container>
    )
    }

export default Headings
