import Link from 'next/link'
import styled from "styled-components";
import theme from '../../styles/theme'
import { useState } from "react"

export default function Toy() {
    const project = [
        {
            no: 1,
            title: '취업 정보 모음',
            contents: '자체 채용 사이트가 있는 회사들의 취업 정보를 Scrapping해서 보여줍니다.',
            goal: 'nextjs의 BE 연습과 기본적인 구성',
            link: '/recruit/myreal'
        },
        {
            no: 3,
            title: '자소서 사이트',
            contents: 'nextjs를 이용하여 자기소개 사이트 제작',
            goal: 'nextjs를 이용하여 취업에 성공하기',
            link:''
        },
        {
            no: 2,
            title: '클론코딩 - 마이리얼트립',
            contents: '마이리얼트립 사이트의 클론 코딩으로 사이트의 정보를 cheerio와 Scrapping을 이용하여 실제와 똑같은 페이지 제작',
            goal: 'styled-component와 jsx를 이용한 css와 redux와 js-cookie를 이용한 로그인 정보 관리',
            link: 'http://ec2-54-180-109-168.ap-northeast-2.compute.amazonaws.com:3001/'
        }
    ]
    return (
        <ToyFrame>
            <ToyTitle>NextJS Toy Project</ToyTitle>
            {project.map(p =>(
                <ToyItem key={p.no} item={p}/>
            ))}
        </ToyFrame> 
    )
}
const ToyFrame = styled.div`

`
const ToyTitle = styled.h2`
    text-align: center;
`
function ToyItem(props) {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='toyFrame shadow'>
            <div onClick={() => setToggle(!toggle)} className='toyTitle'>
                {toggle &&<i className="fa fa-arrow-down"></i>}
                {!toggle &&<i className="fa fa-arrow-right"></i>}
                {' ' + props.item.title}
            </div>
            <ToyContent toggle={toggle} contents={props.item.contents} link={props.item.link} goal={props.item.goal}/>
            <style jsx>
            {`
                .toyFrame {
                    background: white;
                }
                .toyTitle {
                    background-color: ${theme.colors.major};
                    padding: 20px;
                    color: white;
                }
            `}
            </style>
        </div>
    )
}
function ToyContent({toggle, contents, link, goal}) {
    return(<div>
        <div className='toyContent'>
            <div>설명 : {contents}</div>
            <div>목적 : {goal}</div>
            <div>
                {link && <Link href={link}><a>구경가기</a></Link>}
            </div>
        </div>
        <style jsx>
        {`
            .toyContent {
                display: ${toggle ? 'block': 'none'};
                padding: 20px;
            }
        `}
        </style>
    </div>
    )
}