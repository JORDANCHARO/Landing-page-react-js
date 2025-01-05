import Button from './Button'
import React from 'react'
import { logoApp } from "../assets/index"
import Container from './Container'
import ElipseBlueBlur from './theme/Headers'
export default function Header() {
return (
        <div className="border border-b-stroke-1">
        <Container className={   " relative bg-n-9"}>
            <div className='relative z-10 flex items-center justify-between py-4 lg:py-6'>
                <img src={logoApp} width={104} height={32} alt="APP_logo" />
                <Button theme={"primary"}>Login</Button>
            </div>
        < ElipseBlueBlur/>
                </Container>
            </div>
    )
}
