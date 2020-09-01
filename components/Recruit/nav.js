import Link from 'next/link'
import styled from "styled-components";

export default function Nav({ navList, setChoice, choice }) {
    return (
        <NAV>
            <UL>
                {
                navList.map(nav => (
                    <LI key={nav.key}>
                        <Link href="/recruit/[pid]" as={`/recruit/${nav.key}`}>
                        <a>{nav.title}</a>
                        </Link>
                    </LI>
                ))
                }
            </UL>
        </NAV>
    )
}
const NAV = styled.div`
    width:250px;
    height: 100%;
    position: absolute;
`
const UL = styled.ul`
`
const LI = styled.li`
    text-decoration: none;
    list-style: none; 
`
