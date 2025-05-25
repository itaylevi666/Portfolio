import React from 'react'

const SkillsSection = () => {


const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "React", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: " CSS", level: 80, category: "Frontend" },
  { name: "Next.js", level: 80, category: "Frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "Express", level: 75, category: "Backend" },
    { name: "MongoDB", level: 75, category: "backend" },
   
    { name: "REST APIs", level: 80, category: "Backend" },



  { name: "After Effects", level: 90, category: "MotionGraphics" },
  { name: "Photoshop", level: 90, category: "MotionGraphics" },
    { name: "Unity", level: 80, category: "MotionGraphics" },
    { name: "Blender", level: 80, category: "MotionGraphics" },


    
  { name: "Illustrator", level: 90, category: "Design" },
  { name: "Figma", level: 90, category: "Design" },
 
    ];
    
    const categories = ["All", "Frontend", "Backend", "MotionGraphics", "Design"];

    const [activeCategory, setActiveCategory] = React.useState("Frontend");
    
    const filteredSkills = skills.filter(
        (skill)  => activeCategory === "All" || skill.category === activeCategory);

  return (
     <section id="skills" className="py-24 px-4 relative bg-secondary">
          <div className='container max-auto max-w-5xl'> 
              <h2 className="text-3xl m:text-4xl font-bold mb-12 text-center">
                  <span>My Skills</span> 
              </h2>
              <div className='flex flex-warp justify-center gap-4 mb-6'>
                  {categories.map((category, key ) => (
                      <button key={key}
                          key={category}
                          className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ease-in-out ${
                              activeCategory === category
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-secondary text-muted-foreground"
                          }`}
                          onClick={() => setActiveCategory(category)}
                      >
                          {category}
                      </button>
                  ))}
                  </div>
                  
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center lg:grid-cols-3'>
                  {filteredSkills.map((skill, key) => (
                      <div key={key} className='card-hover gradient-border p-6 card shadow-2xs'>
                          <div className='text-left mb-4'> 
                              <h3 className='font-semibold text-lg'>
                                  {skill.name}
                              </h3>
                            
                          </div>
                          <div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden'>
                              <div className='bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]'
                                  style={{ width: skill.level + "%" }}
                              />
               
                              <div>
                                 
                                  </div>
                              
                              
                          </div>
                                          <div className='text-right mt1'>
                                  <span className=' text-sm text-muted-foreground'>
                                      {skill.level}%
                                  </span>
                                  </div>
                      </div>
                        ))}
              </div>
             </div>
              </section>
  )
}

export default SkillsSection