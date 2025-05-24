import React from 'react'   
import { ArrowUp } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card  border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
    {" "}
    <p className="text-sm text-muted-foreground">
      {" "}
              &copy; {new Date().getFullYear()}  All rights reserved.
              <br />
              
              <a
      href="https://github.com/itaylevi666?tab=repositories"  target="_blank"
      className="p-2 text-primary transition-colors"
    >
     My Github
    </a>
          </p>
          


          
    <a
      href="#main"
      className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
    >
      <ArrowUp size={20} />
          </a>

   
          


  </footer>
  )
}

export default Footer