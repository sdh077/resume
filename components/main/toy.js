import Link from 'next/link'
import styled from "styled-components";
import theme from '../../styles/theme'
import { useState } from "react"

export default function Toy() {
    const project = [
        {
            title: '취업 정보 모음',
            contents: '',
        },
        {
            title: '클론코딩 - 마이리얼트립',
            contents: '',
        },
        {
            title: '클론코딩 - 마이리얼트립',
            contents: '',
        }
    ]
    return (
        <ToyFrame>
            <ToyTitle>Practice</ToyTitle>
            <ToyItem/>
        </ToyFrame> 
    )
}
const ToyFrame = styled.div`

`
const ToyTitle = styled.h2`
    text-align: center;
`
function ToyItem() {
    const [toggle, setToggle] = useState(false);
    const toyContent = toggle ?
    {
        display: 'block',
    }
    :
    {
        display: 'none',
    }
    return (
        <div className='toyFrame shadow'>
            <div onClick={() => setToggle(!toggle)} className='toyTitle'>
                Click
            </div>
            <div className='toyContent'>
                내용~
            </div>
            <style jsx>
            {`
                .toyFrame {
                    background: white;
                }
                .toyTitle {
                    background-color: ${theme.colors.major};
                    padding: 10px;
                    color: white;
                }
                .toyContent {
                    display: ${toyContent.display};

                }
            `}
            </style>
        </div>
    )
}
