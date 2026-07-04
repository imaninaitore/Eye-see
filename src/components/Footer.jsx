import React from 'react'

function Footer() {
  return (
    <footer className="bg-slate-400 border-t border-cyan-500/10 text-slate-300 dark:bg-gray-900 dark:text-white">

    <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        <div>
            <h2 className="text-2xl font-bold text-black mb-4">
              Eye<span className="text-blue-400">see</span>
            </h2>

            <p className="text-black leading-relaxed">
                Purchase spectacles of your choice and style.
            </p>
        </div>

       
        <div>
            <h3 className="text-white font-semibold mb-4">
                Quick Links
            </h3>

            <ul className="space-y-3 text-black">

                <li>
                    <a href="#navbar" className="hover:text-cyan-400 transition duration-300">
                        Home
                    </a>
                    
                </li>

             <li>
              <a href="#login" className="hover:text-cyan-400 transition duration-300">Sign In</a>
             </li>
             
             <li>
                <a href="#register" className="hover:text-cyan-400 transition duration-300">
                 sign up
                </a>
             </li>
                
                    
                  <li>
                    <a href="#contact" className="hover:text-cyan-400 transition duration-300">
                        contacts
                    </a>
                </li>

            </ul>
        </div>

        <div>
        
            <ul className="space-y-3 text-black">
               
                <li>
                     <a href="#privacy" className="hover:text-cyan-400 transition duration-300">
                        Privacy Policy
                    </a>
                   
                </li>

                <li>
                    <a href="#terms" className=" text hover:text-cyan-400 transition duration-300">
                        Terms of Service
                    </a>
                    
                </li>

            </ul>
        </div>

        <div>
            <h3 className="text-black font-semibold mb-4">
                Stay Updated
            </h3>

            <p className="text-white mb-4">
                Get the latest updates  from Eye see.
            </p>

            <form className="flex flex-col gap-3">
                <input
                type="email" 
                    placeholder="Enter your email"
                    className="bg-blue-800 border border-cyan-500/20 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-cyan-400">
 
                </input>
                    
                <button 
                    className="bg-blue-500 hover:bg-yellow-300 text-slate-900 font-semibold py-3 rounded-lg transition duration-300">
                    Subscribe
                </button>
            </form>
        </div>

    </div>


    <div className="border-t border-cyan-500/10 py-6 text-center text-black text-sm">
        © 2026 Eye See . All rights reserved.
    </div>

</footer>
)
}

export default Footer