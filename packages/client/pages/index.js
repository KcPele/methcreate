import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

    export default function Home() {
      return (
        <div className='bg-[#060606] '>
        <Navbar/>
        <Footer/>
        </div>
      )
    }