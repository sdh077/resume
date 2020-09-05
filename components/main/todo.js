import Link from 'next/link'
import styled from "styled-components";
import theme from '../../styles/theme'
import { Fragment } from 'react';

export default function Todo() {
    const list = [
        {
            no: 0,
            icon: 'coffee',
            title: '파브스 카페 홈페이지 제작',
            description: '친누나가 하는 파브스 카페 홈페이지 제작'
        },
        {
            no: 1,
            icon: 'sitemap',
            title: '클론 코딩 - 원티드 취업 사이트',
            description: '원티드 검색 결과 사이트 클론코딩'
        },
        {
            no: 2,
            icon: 'clone',
            title: '현 사이트 기능 추가',
            description: 'carousel 추가 예정'
        }
    ]
    return (
        <TodoFrame>
            <TodoTitle>앞으로 할일</TodoTitle>
            <TodoItems className='shadow'>
            {list.map(item => (
                <TodoItem key={item.no} data={item}></TodoItem>
            ))}
            </TodoItems>
        </TodoFrame>
    )
}
const TodoFrame = styled.div`

`
const TodoTitle = styled.h2`
    text-align: center;
`
const TodoItems = styled.div`
    padding: 40px;
    background-color: white;
    z-index: 2;
    position: relative;
`
function TodoItem({data}) {
    return(
        <div className='todoItem'>
            <div>
                <ICON className={'fa fa-' + data.icon}/>
                <span className='todoItemTitle'>
                    {data.title}
                </span>
            </div>
            <div className='todoItemDescription'>
                {data.description}
            </div>
            <hr/>
            <style jsx>
            {`
                .todoItem {
                    margin-bottom: 30px;
                }
                hr {
                    height: 3px;
                    background-color: rgb(216, 218, 220);
                    border: none;
                    max-width: 70%;
                    margin: 0px;
                }
                .todoItemTitle {
                    margin-bottom: 5px;
                    margin-left: 10px;
                    font-size: 15px;
                    font-weight: 600;
                }
                .todoItemDescription {
                    font-size: 12px;
                    font-weight: 300;
                }
            `}
            </style>
        </div>
    )
}
const ICON = styled.i`
    color: ${theme.colors.major};
    font-size: 30px;
`