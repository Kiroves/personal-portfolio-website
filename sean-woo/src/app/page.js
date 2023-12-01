import Image from 'next/image'
import styles from './page.module.css'
import Name from './components/sections/name/name'
import Navbar from './components/navbar/Navbar'
import Projects from './components/sections/projects/projects'
import About from './components/sections/about/about'
import Experience from './components/sections/experience/experience'
export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <Name/>
      <About/>
      <Experience/>
      <Projects/>
    </main>
  )
}
