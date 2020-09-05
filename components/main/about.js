import Link from 'next/link'
import styled from "styled-components";
import theme from '../../styles/theme'
export default function About({ navList, setChoice, choice }) {
    const aboutAttr = [
        {
            title: 'birth',
            value: '92.04.18'
        },{
            title: 'address',
            value: '서울시 금천구 독산동'
        },{
            title: 'mail',
            value: 'sdh077@naver.com'
        }
    ]
    return (
        <AboutFrame className='shadow'>
            <AboutIntro>
                <AboutImg>
                    <img src='/images/profile.jpg'/>
                </AboutImg>
                <AboutContent>
                    <div className='AboutName'>
                        <img src='/images/star.png' width='20px'/> I'm Shin Dae Ho
                    </div>
                    <div className='AboutJob'>WEB PROGRAMMER</div>
                    <hr/>
                    <AboutAttrUl className='AboutAttrUl'>
                    {
                        aboutAttr.map(attr => (
                        <AboutAttrli className='AboutAttrli' key={attr.title}>
                            <strong>{attr.title}</strong>
                            <span>{attr.value}</span>
                        </AboutAttrli>
                        ))
                    }
                    </AboutAttrUl>
                    <style jsx>
                    {`
                        .AboutName {
                            font-size: 36px;
                            font-weight: 700;
                            position: relative;
                            display: inline;
                        }
                        .AboutName > img {
                            position: absolute;
                            right: -14px;
                        }
                        .AboutJob {
                            font-size: 12px;
                        }
                    `}
                    </style>
                </AboutContent>
            </AboutIntro>
            <AboutSns>
                    <AboutSnsItem>
                        <Link href='https://www.facebook.com/profile.php?id=100003287681948'>
                            <a><i className="fa fa-facebook-f"></i> </a>
                        </Link>
                    </AboutSnsItem>
                    <AboutSnsItem>
                        <Link href='https://www.instagram.com/sssssssdaeho/'>
                            <a><i className="fa fa-instagram"></i> </a>
                        </Link>
                    </AboutSnsItem>
                <style jsx>
                {`
                    .white {
                        color: white;
                    }
                `}
                </style>
            </AboutSns>
        </AboutFrame>
    )
}
const AboutFrame = styled.div`
    z-index: 2;
    position: relative;
    transform: translate(0, 0);
    transition: transform 400ms ease-out 100ms, opacity 400ms ease-out 100ms;
`
const AboutIntro = styled.div`
    padding: 40px;
    background-color: white;
    z-index: 2;
    position: relative;
`
const AboutImg = styled.div`
    width: 300px;
    height: 320px;
    overflow: hidden;
    display: inline-block;
    margin-right: 40px;
`
const AboutContent =styled.div`
    width: 400px;
    display: inline-block;
    overflow: hidden;
    margin-left:20px;
`
const AboutAttrUl = styled.ul`
    list-style: none;
    padding: 0;
`
const AboutAttrli = styled.li`
    strong {
        width: 150px;
        display: block;
        float: left;
        font-weight: 500;
    }
`
const AboutSns = styled.div`
    background-color: ${theme.colors.major};
    padding: 20px;
    margin: auto 0;
    text-align: center;
`
// https://fontawesome.com/icons?from=io
const AboutSnsItem = styled.span`
    width: 20px;
    margin-left: 20px;
    a {
        color: white;
    }
`