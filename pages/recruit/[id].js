import fetch from 'node-fetch';
import { useState, useEffect, Fragment } from "react"
import data from '../../lib/list.json';
import styled from "styled-components";
import Layout from '../../components/layout';
function Recruit({ items }) {
    if(items)
    return (
        <Layout>
        {
            <table>
                <thead>
                    <tr>
                        <td className='td2'>제목</td>
                        <td className='td1'>고용형태</td>
                        <td className='td1'>팀</td>
                        <td className='td1'>마감일</td>
                        <td className='td1 text-center'>링크</td>
                    </tr>
                </thead>
                <tbody>
                {items.map(item => (
                    <TR item={item} key={item.title} />
                ))}
                </tbody>
            </table>
        }
        <style jsx>
        {`
            .td1 {
                width: 15%;
            }
            .td2 {
                width: 40%;
            }
            .text-center {
                text-align: center;
            }
        `}
        </style>
        </Layout>
    )
    else 
    return <div></div>
}
function TR({item}) {
    const itemTitle = [
        'title',
        'type',
        'team',        
        'due',        
        'link'
    ]
    return(
        <Fragment>
            <tr>
                {itemTitle.map((key) => (
                    <TD item={item} key={key} k={key} />
                ))}
            </tr>
            {/* {item['description'] && 
            <tr>
                <td colSpan='5'>
                    <button>보기</button>
                    <p dangerouslySetInnerHTML={ {__html: item['description'].length} }></p>
                </td>
            </tr>
            } */}
        </Fragment>
    )
}
function TD({ item, k }) {
    if (k === 'link') return(
        <td className='text-center'>
            <a href={item[k]}><button>Apply</button></a>
            <style jsx>
                {`
                    .text-center {
                        text-align: center;
                    }
                `}
            </style>
        </td>
        ) 
    else if(k === 'due') return(
            <td> 
                {item[k] && item[k].substring(0,10)} 
            </td>
        ) 
    else return(
            <td> {item[k]} </td>
        ) 
    
}
export async function getStaticPaths() {
    const paths = data.map((item) => ({
        params: { id: item.key },
    }))

    return { paths, fallback: false }
}
export async function getStaticProps({params}) {
    const res = await fetch(`http://localhost:3000/api/${params.id}`)
    const items = await res.json()
    return {
        props: {
            items
        },
    }
}
export default Recruit