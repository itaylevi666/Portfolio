import { ArrowDown } from 'lucide-react';
import React from 'react'

const MainSection = () => {
  return (
      <section id="main" className=" h-[70vh] flex items-center justify-center ">
          <div className="container max-w-4xl mx-auto text-center z-10">
              <div className="space-y-6">
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground animate-fade-in-up">
                      <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                      <span className='text-primary opacity-0 animate-fade-in-delay-2'> Itay</span>
                      <span className='text-primary opacity-0 animate-fade-in-delay-3'> Levi</span>
                  </h1>
                  <p className='text-lg md:text-2xl text-foreground opacity-0 animate-fade-in-delay-4'>
                      Motion designer making AI video, UA ads and branded motion.<br></br> I also build the web side - React and JavaScript.
                      
                  </p>
              </div>
              <div className='pt-5 opacity-0 animate-fade-in-delay-5'>
                  <a href="#projects" className="cosmic-button ">
                      View Projects
                  </a>
          
              </div>
              
          </div>
          {/* <div className="absolute bottom-40

           left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce  mb-20
           ">
              <span className="text-2xl font-bold  mb-2">Scroll</span>
              <ArrowDown className='h-6 w-6 text-primary' />
              </div> */}
        
    </section>
  )
}

export default MainSection