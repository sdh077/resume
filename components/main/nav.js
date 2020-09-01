import * as React from "react";
import styled from "styled-components";
export default function Nav() {
    const [scrollY, setScrollY] = React.useState(0);
    const listener = e => {
        setScrollY(e.path[1].scrollY);
    };

    React.useEffect(() => {
        window.addEventListener("scroll", listener);
        return () => {
        window.removeEventListener("scroll", listener);
        };
    });
    return (
        <HEADER>
            <MainNav>
                <NavTitle background={scrollY > 120 ? 'white':'transparent'}>
                    <NavCon>
                        <NavItem>RESUME</NavItem>
                    </NavCon>
                </NavTitle>
                <ImgBg/>
            </MainNav>
        </HEADER>
    )
}
const HEADER = styled.div`
    position: relative;
    height: 150px;
`
const MainNav = styled.nav`
    height: 100px;
    width: 100%;
    position: absolute;
`
const NavTitle = styled.div`
    margin:0 auto;
    vertical-align: middle;
    display: table;
    line-height: 100px;
    width: 100%;
    z-index: 999;
    background: ${(props) => props.background || "white"};
    position: fixed;
`
const NavCon =styled.div`
`
const NavItem = styled.div`
    color: rgba(0, 0, 0, 0.7);
    display: table-cell;
    padding-left: 50px;
`
const ImgBg = styled.div`
    background-image: url('/images/main.jpeg');
    background-size: cover;
    background-color: #242832;
    background-repeat: no-repeat;
    background-position: bottom;
    width: 100%;
    height: 500px;
    position: absolute;
    left: 0;
    top: 0;
    background-color: transparent;
    &:before {
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: rgba(44, 51, 64, 0.5);
    }
`