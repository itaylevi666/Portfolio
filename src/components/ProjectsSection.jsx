import React from 'react'

const ProjectsSection = () => {

    const projects = [
        {
            id: 1,
            title: "Rock Paper Scissors",
            description: "Simple Rock Paper Scissors Game",
            demoUrl: "https://rock-paper-scissors-fk7pzsesx-itays-projects-8ccbd600.vercel.app",
            image: "/rps.jpg",
            tags :["react,javascript,css"]
        },
        {
               id: 2,
            title: "Personal Portfolio",
            description: "An animation portfolio website",
            demoUrl: "https://www.behance.net/etayle",
            image: "/showcase.jpg",
            tags: [" AfterEffects,Unity,Photoshop"]
        },
        {
               id: 3,
            title: "Quiz App",
            description: "4 Questions Quiz App",
            demoUrl: "https://quiz-app-nine-lemon.vercel.app/",
            image: "/quiz.jpg",
             tags :["react,javascript,css"] 
        },
        {
            id: 4,
         title: "Movie Search App",
         description: "A movie search App ,fetching from Api including Conntext",
         demoUrl: "https://movie-app-y1dx.vercel.app/",
         image: "/movie.jpg",
          tags :["react,javascript,css,api"] 
     },
    ]


    

  return (
   <section id="projects" className="py-15 px-4 relative bg-secondary">
          <div className='container max-auto max-w-5xl'> 
              <h2 className="text-3xl m:text-4xl font-bold mb-12 text-center">
                  <span>My Projects</span> 
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">  
                    Here are some of my projects that I have worked on. I am always looking for new challenges and opportunities to grow my skills.
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center lg:grid-cols-3'>
                  {projects.map((project, key) => (
                      <div key={key} className='card-hover gradient-border p-6 card shadow-2xs'>
                          <div className='text-left mb-4'> 
                              <h3 className='font-semibold text-lg'>
                                  {project.title}
                              </h3>
                              <p className='text-muted-foreground'>
                                  {project.description}
                              </p>
                          </div>
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors duration-300 ease-in-out" >
                              <img src={project.image} alt={project.title} className="w-full h-38 object-cover rounded-md mb-4 border flashing-border  border-amber-300" />
                              </a>
                          <div className='flex justify-between items-center'>
                          
                              <span className="text-sm text-muted-foreground">{project.tags.join(", ")}</span>
                          </div>
                      </div>
                  ))}
                  </div>
              
              </div>
              </section>
      
  )
}

export default ProjectsSection