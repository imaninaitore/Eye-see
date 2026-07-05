import React from 'react'
import background from "@/assets/bg.jpg"

function Header() {

  return (
    <header style={{
        backgroundImage:`url(${background})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        height: "500px",
        }}>

        <h1 className="text-cyan-300 text-3xl sm:text-2xl md:text-5xl lg:text-6xl  py-6 px-6">Welcome to Eye see shop!</h1>
        <p className="text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl  py-6 px-6">where quality meets clarity</p>
    </header>
  )
}

export default Header