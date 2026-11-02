import React from 'react'
import { Code } from 'lucide-react'
import { Clapperboard } from 'lucide-react'
import { Brain } from 'lucide-react'
import { Sparkles } from 'lucide-react'
const AboutMe = () => {
  return (
      <section id="About" className="py-2 px-4 relative">
          <div className='container max-auto max-w-5xl'>
              <h2 className="text-3xl m:text-4xl font-bold mb-12 text-center">
                  About <span className='text-primary'>Me</span> 
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
                  <div className="space-y-6">
                  <h3 className="text-2xl font-bold ">
                      Hi, <span className='text-primary'> I'm Itay</span>
                      </h3>
                      
                  <p>
                  Motion designer with nearly a decade of experience in commercials, promos and branded video. Today I focus on AI video and UA ads:
                   building concepts, art directing generative tools like Higgsfield, Veo 3, Kling and Seedance, and finishing in After Effects.
                   On the side I code in HTML, CSS, JavaScript and React, so I can take an idea from storyboard to a working page.
                      </p>
                    
                  <p className='"text-muted-foreground opacity-0 animate-fade-in-delay-4'>
                      I work closely with producers, developers and marketers, and I like testing new tools fast to see where they hold up and where they break.

                      </p>
                      <div className='flex flex-col sm:flex-row gap-4 pt-2 justify-center  '>
                          <a href="#projects" className="cosmic-button ">
                              View Projects
                          </a>
                       
                        
                      </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                      <div className=" gradient-border p-6 card-hover">
                          <div className="flex items-start gap-4">
                              <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary"/>
                              </div>
                              <div className="text-left">
                                  <h4 className="text-bold text-lg">Web development</h4>
                                  <p> Skilled in JavaScript, React, and API integrations, ensuring seamless functionality across platforms.
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="bg-background gradient-border rounded-lg gradient p-6 card-hover">
                         <div className="flex items-start gap-4">
                              <div className="p-3 rounded-full bg-primary/10">
                            <Sparkles className="h-6 w-6 text-primary"/>
                              </div>
                               <div className="text-left">
                                  <h4 className="text-bold text-lg">Generative AI</h4>
                                  <p>AI video and UA ads with Higgsfield, Veo 3, Kling and Seedance. Consistent characters, tight prompts, and honest quality checks before anything ships.
                                  </p>
                              </div>
                          </div>
                        </div>
                      <div className="bg-background gradient-border rounded-lg gradient p-6 card-hover">
                             <div className="flex items-start gap-4">
                              <div className="p-3 rounded-full bg-primary/10">
                            <Clapperboard className="h-6 w-6 text-primary"/>
                              </div>
                               <div className="text-left">
                                  <h4 className="text-bold text-lg">Motion Design</h4>
                                  <p>Skilled in Adobe After Effects, Lottie animations, and CSS keyframes, creating smooth, high-quality animations for web and mobile interfaces.
                                  </p>
                              </div>
                          </div>
                        </div>
                      <div className="bg-background gradient-border rounded-lg gradient p-6 card-hover">
                         <div className="flex items-start gap-4">
                              <div className="p-3 rounded-full bg-primary/10">
                            <Brain className="h-6 w-6 text-primary"/>
                              </div>
                               <div className="text-left">
                                  <h4 className="text-bold text-lg">Creative Thinking</h4>
                                  <p> Innovative problem-solver with a strong ability to approach challenges from new perspectives, generating fresh ideas in frontend development, motion design, and user experience. Skilled at blending design, animation, and coding to create engaging, intuitive digital experiences
                                  </p>
                              </div>
                          </div></div>    
                      

                  </div>
                  
                      
              </div>
          </div>
          

 </section>
  )
}

export default AboutMe