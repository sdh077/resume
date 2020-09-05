import Link from 'next/link'
import styled from "styled-components";
import theme from '../../styles/theme'
import { Fragment } from 'react';
function BarFill (props) {
    return (<span>
        <style jsx>
        {`
            background-color: black;
            width: ${props.percent}%;
            height: 100%;
            position: absolute;
            opacity: 1;
        `}
        </style>
    </span>)
}

export default function MySkill() {
    const mySkills = [
        {
            title: 'Node.js',
            percent: 85
        },{
            title: 'Angular',
            percent: 70
        },{
            title: 'React',
            percent: 60
        },{
            title: 'Html & Css',
            percent: 75
        }
    ]
    return (
        <SkillFrame>
            <SkillTitle>My Skills</SkillTitle>
            <SkillBox className='shadow'>
                {mySkills.map(sk => (
                <SkillItem key={sk.title}>
                    {sk.title}
                    <Bar>
                        <BarFill percent={sk.percent}></BarFill>
                    </Bar>
                </SkillItem>
                ))}
                <SkillList/>
            </SkillBox>
        </SkillFrame>   
    )
}
const SkillFrame = styled.div`
`
const SkillTitle = styled.h2`
    text-align: center;
`
const SkillBox = styled.div`
    background-color: white;
    padding: 20px;
`
const SkillItem = styled.div`
    width: 40%;
    display: inline-block;
    margin-right: 7%;
    margin-bottom: 30px;
`

const SkillItemSmall = styled.div`
    width: 20%;
    display: inline-block;
    margin-right: 2%;
    margin-bottom: 10px;
`
const Bar = styled.div`
    height: 5px;
    background-color: ${theme.colors.major};
    opacity: 0.2;
    position: relative;
`
const SkillList = () => {
    const list =['mysql','AWS', 'C#','AngularJs','php','Next.js']
    return (
        <div>
            {list.map(i => (
                <SkillItemSmall key={i}>{i}</SkillItemSmall>
            ))}
        </div>
    )
}