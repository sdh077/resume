import Link from 'next/link'
import styled from "styled-components";
import theme from '../../styles/theme'
import { Fragment } from 'react';

export default function Experience() {
    const items = [
    {
        title: '플레이오토',
        date: '2019~2020',
        link: 'https://app.playauto.io/',
        stack: 'node.js, C#, php, angular',
        descript:'쇼핑몰 통합 솔루션으로 판매자의 주문, 상품, 고객, 출고, 재고관리까지 편리하게 관리하는 서비스',
        contents: `Playauto 2.0 서비스에서 쇼핑몰 유지 보수 및 연동 개발을 하였으며 연동 개발한 쇼핑몰 리스트로는 오늘의집, 신세계TV쇼핑, W쇼핑, emart mall, 카페24, 티몬 등이 있습니다. 
        `
    }, 
    {
        title: '한동대 디자인과 졸업전시 사이트',
        date: '2018',
        stack: 'mysql, Angular, node, express.js',
        link: 'http://hgudegree.cafe24app.com/',
        descript: '한동대 디자인학과 졸업생들의 졸업 과제를 요약해서 보여주는 웹 사이트',
        contents: '혼자 개발을 진행하였으며 FE는 Angular로 BE은 Express를 이용하여 개발하였습니다.'
    },
    {
        title: '장덕한방병원 자가진단',
        date: '2016',
        link:  'https://s.jangdeuk.com/include/footTest.php?landing=homepc',
        stack: 'php, mysql',
        descript: '장덕 한방병원의 자가진단 상담 예약 시스템',
        contents: '입력을 받는 Form과 병원에서 제작한 로직에 따른 알고리즘을 만들어 문답을 기반으로 고객의 상태를 알려주며 예약자 관리 페이지를 제작'
    },{
        title: '이츠엠',
        date: '2016~2017',
        stack: 'mysql, Angular, node, express.js',
        link: 'http://point.pohang.go.kr/',
        descript: `포항포인트 - 포항포인트는 포항시가 제공하는 '포항시 포인트' 브랜드를 사용하는 멤버십서비스`,
        contents: 'Node.js(express.js)기반으로 백엔드를 혼자 담당하여 제작하였으며 DB는 Oracle을 이용하였고 EC2와 RDS 환경 구축, 웹과 앱 모두 참여하였으며 Auth2.0 로그인 구현 등을 맡아 진행하였습니다.'
    },
        {
        title: '한동대 총학생회 홈페이지',
        date: '2015',
        stack: 'php, mysql',
        descript: '총학생회 홈페이지 제작'
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
    height: 570px;
`
function TimelineDirection ({item, direction}) {
    return(
        <>
            <div className='timeline'>
                <div className='timePoint'/>
                <div className='tlItem'>
                    <div className='tlTitle'>
                        {item.title}
                        {item.link&&<Link href={item.link}><a>
                            <i className="fa fa-link"></i>           
                        </a></Link>}
                    </div>
                    
                    <div className='tlContents'>{item.date}</div>
                    <div className='tlContents'>환경 : {item.stack}</div>
                    <div className='tlContents'>설명 : {item.descript}</div>
                    {item.contents &&<div className='tlContents'>내가 한일 : {item.contents}</div>}
                    
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
                .tlTitle > a {
                    color: black;
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
                    background-color: transparent;
                    height: 20px;
                    border-top: 20px solid transparent;
                    border-bottom: 20px solid transparent;
                    border-${direction}: 20px solid #fff;
                }
            `}
            </style>
        </>
    )
}
