import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <img src='underConst.jpg' width={'500px'}/>
      <h1 style={{color:'#E63946', fontFamily:'fangsong'}}>Thanks for visiting, IraSoft will be live soon...</h1>
      <h2 style={{fontFamily:'fangsong'}}>Stay tuned!!</h2>
    </div>
  )
}
