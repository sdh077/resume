import Link from 'next/link'
import styled from "styled-components";
import theme from '../../styles/theme'
import { Fragment } from 'react';

export default function Experience() {
    const items = [
    {
        title: '플레이오토',
        date: '2019~2020',
        link: ['https://app.playauto.io/'],
        stack: 'node.js, C#, php, angular',
        contents: `Playauto 2.0 서비스 쇼핑몰 유지 보수 및 연동 개발
        `
    }, 
    {
        title: '한동대 디자인과 졸업전시 사이트',
        date: '2018',
        stack: 'mysql, Angular, node, express.js',
        link: ['http://hgudegree.cafe24app.com/'],
        contents: 'Worked as part of a multi-disciplinary team, carrying out ad-hoc tasks as requested by the IT Manager. Had a specific brief to ensure the websites build for customer’s precisely matched their requirements.developers and marketers.'
    },
    {
        title: '장덕한방병원 자가진단',
        date: '2016',
        link: ['https://s.jangdeuk.com/include/self_test01.html','https://s.jangdeuk.com/include/footTest.php?landing=homepc'],
        stack: 'php, mysql',
        contents: '장덕 한방병원의 자가진단을 통해 고객의 상태를 분석하고 상담 예약 시스템'
    },{
        title: '이츠엠',
        date: '2016~2017',
        stack: 'mysql, Angular, node, express.js',
        link: ['http://point.pohang.go.kr/'],
        contents: `포항포인트 - 포항포인트는 포항시가 제공하는 '포항시 포인트' 브랜드를 사용하는 멤버십서비스`
    },
        {
        title: '한동대 총학생회 홈페이지',
        date: '2015',
        stack: 'php, mysql',
        contents: '총학생회 홈페이지 제작'
    }]
    return (
        <ExperienceFrame>
            <ExperienceTitle>Experience
            </ExperienceTitle>
            <Timeline>
                <TimelineBar/>
                <ZoneLeft>
                {items.map((item,index) => !(index%2) ? (
                    <TimelineDirection direction='left' item={item} key={item.title}/>
                ):'')}
                </ZoneLeft>
                <ZoneRight>
                {items.map((item,index) => index%2 ? (
                    <TimelineDirection direction='right' item={item} key={item.title}/>
                ):'')}
                </ZoneRight>
                    
            </Timeline>
        </ExperienceFrame>
    )
}
const ExperienceFrame = styled.div`

`
const ExperienceTitle = styled.h2`
    text-align: center;
`
const ZoneLeft = styled.div`
    position: absolute;
    top: 0;
    width:50%;
`
const ZoneRight = styled.div`
    position: absolute;
    top: 0;
    left:50%;
    width:50%;
`
const Timeline = styled.div`
    position: relative;
    height: 650px;
`
const TimelineBar = styled.div`
    position: absolute;
    width: 2px;
    background-color: black;
    left: 50%;
    top: 45px;
    height: 445px
`
function TimelineDirection ({item, direction}) {
    return(
        <>
            <div className='timeline'>
                <div className='timePoint'/>
                <div className='tlItem'>
                    <div className='tlTitle'>{item.title}</div>
                    <div className='tlContents'>{item.date}</div>
                    <div className='tlContents'>{item.stack}</div>
                    <div className='tlContents'>{item.contents}</div>
                </div>
                <div className='tlArrow'/>
            </div>
            <style jsx>
            {`
                .timeline {
                    margin-${direction ==='left'? 'bottom' : 'top'}: 100px;
                    float: ${direction};
                    clear: ${direction};
                    position: relative;
                    width:100%;
                }
                .timePoint {
                    border-radius: 50%;
                    width: 10px;
                    height: 10px;
                    position: absolute;
                    top: 45px;
                    ${direction==='left'?
                    'right: -6px;'
                    :
                    'left: -4px;'
                    }
                    background-color: ${theme.colors.major}
                }
                .tlItem {
                    width: 90%;
                    background-color: white;
                    padding: 20px;
                    position: relative;
                    border-top: 2px solid ${theme.colors.major};
                    margin-${direction === 'left' ? 'right' : 'left'}: 10%;

                }
                .tlTitle{
                    text-align: center;
                }
                .tlContents {
                    font-weight:200;
                    font-size: 12px;
                }
                .tlArrow {
                    position: absolute;
                    ${direction}: 90%;
                    width:3%;
                    top: 30px;
                    background-color: white;
                    height: 20px;
                    border-top: 20px solid transparent;
                    border-bottom: 20px solid transparent;
                    border-${direction}:: 10px solid #fff;
                }
            `}
            </style>
        </>
    )
}
