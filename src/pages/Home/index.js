import React from 'react'
import NavbarApp from '../../components/NavbarApp'
import Jumbotron from '../../components/Jumbotron'
import About from '../../components/About'
import Skills from '../../components/Skills'

function Home() {
  return (
    <div className='bg-lightMode dark:bg-darkMode'>
        <NavbarApp/>
        <Jumbotron />
        <div className='px-10 pt-10'>
            <About />
            <Skills />
        </div>
        <footer className="bg-primaryBlue text-white text-base w-full max-w-[1600px] text-center px-10 py-4" >
          The page is still under development <br/>
          © 2023 Veza Adiloviana
        </footer>
    </div>
  )
}

export default Home