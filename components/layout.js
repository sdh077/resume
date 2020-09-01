import Head from 'next/head'
import styles from './layout.module.css'
import data from '../lib/list.json';
import { useState } from "react"
import Nav from "./Recruit/nav"

export default function Layout({ children, home }) {
  const navList = data;
  const [choice, setChoice] = useState(navList[0]);
  return (
    <div className={styles.container}>
      <Head>
      </Head>
      <Nav navList={navList} setChoice={setChoice} choice={choice}></Nav>
      <main>{children}</main>
      <style jsx>
      {`
        main {
          width: calc(100% - 250px);
          position: absolute;
          left: 250px;
        }
      `}
      </style>
    </div>
  )
}
