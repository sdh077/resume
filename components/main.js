import Nav from './main/nav'
import About from './main/about'
import MySkill from './main/myskill'
import styled from "styled-components";
import Head from 'next/head'
import theme from "../styles/theme";
import Portfolio from './main/portfolio';
import Experience from './main/Experience';
import Toy from './main/toy';
import Todo from './main/todo';
export default function Main() {
    
    return (
        <MainBody>
            <Head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </Head>
            <Nav/>
            <MainSection className='container'>
                <About/>
                <br />
                <MySkill/>
                <br/>
                <br/>
                <Experience/>
                <br/>
                <br/>
                <Toy />
                <br/>
                <Todo/>
                <br/>
                <br/>
                <br/>
            </MainSection>
        </MainBody>
    )
}
const MainBody = styled.div`
  background-color: #efefef;
`
const MainSection = styled.div`
    position: relative;
    br {
        margin-top: 25px;
        margin-bottom: 25px;
    }
`
