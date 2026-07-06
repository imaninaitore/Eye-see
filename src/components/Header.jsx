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

        <h1 className="flex text-center text-slate-200 text-3xl sm:text-2xl md:text-5xl lg:text-6xl  py-6 px-6">Eye see shop!</h1>
        <h1 className="flex text-center text-blue-200 text-3xl sm:text-2xl md:text-5xl lg:text-3xl  py-6 px-6">where quality meets clarity.</h1>
    </header>
  )
}

export default Header