import React from 'react'
import styled from 'styled-components'

const Blur = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 10%;
    padding-left: 5px;

    filter: blur(5px)
    
`
const ActualFooter = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 10%;
    padding-left: 5px;
    
`

const Footer = () => {
    return (
        <>
            <Blur></Blur>

            <ActualFooter>Footer sample teeeeeeeeeeeeeeeeeeeeeext</ActualFooter>
        </>
    )
}

export default Footer