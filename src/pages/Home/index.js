import React from 'react'
import NavbarApp from '../../components/NavbarApp'
import Jumbotron from '../../components/Jumbotron'
import About from '../../components/About'

function Home() {
  return (
    <div className='bg-lightMode dark:bg-darkMode'>
        <NavbarApp/>
        <Jumbotron />
        <div className='p-10'>
            <About />
        </div>
        <footer className="bg-primaryBlue text-white text-base w-full max-w-[1600px] text-center px-10 py-4" >
          The page is still under development <br/>
          © 2024 Veza Adiloviana
        </footer>
    </div>
  )
}

export default Home