import Link from 'next/link'
import styled from "styled-components";
import theme from '../../styles/theme'
import { Fragment } from 'react';

export default function Portfolio() {
    return (
        <PortfolioFrame>
            <PofoTitle>My Skills</PofoTitle>
            <PofoFilter></PofoFilter>
        </PortfolioFrame>  
    )
}
const PortfolioFrame = styled.div`

`
const PofoTitle = styled.h2`
    text-align: center;
`
const PofoFilter = styled.div``