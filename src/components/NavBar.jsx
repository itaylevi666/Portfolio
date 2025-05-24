
import { useState ,useEffect} from 'react'
const NavBar = () => {

    const navItems = [
        { name: 'Home', href: '#main' },
        { name: 'About', href: '#About' },
         { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '# contact' },
    ]
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setIsopen(window.scrollY > 10);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
      <nav className={"  transition-all duration-300 py-20 "}   >
          
      <div className="container flex items-center justify-between w-full px-10">
              <a className="text-l font-bold text-primary flex items-center">
                <span className="relative">
                      <span className='text-glow text-foreground' >Itay</span> portfolio
                </span>
              </a>
              <div className="hidden md:flex  space-x-6">
                  {navItems.map((item,key) => (
                      <a key={key} href={item.href} className="text-foreground hover:text-primary transition-colors duration-300 ease-in-out">
                        {item.name} </a>
                  ))}
              </div>
          </div>
          </nav>
  )
}

export default NavBar