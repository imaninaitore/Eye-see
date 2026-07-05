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

        <h1 className="text-black text-3xl sm:text-2xl md:text-5xl lg:text-6xl  py-6 px-6">Welcome to Eye see shop!</h1>
    </header>
  )
}

export default Header