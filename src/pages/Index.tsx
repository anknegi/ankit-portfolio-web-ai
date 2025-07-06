import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Gamepad2, Video, MapPin, Phone, Globe, Flag, Hexagon, PhilippinePeso, PiggyBank, FileCode2, PersonStanding, CircleCheck } from "lucide-react";
import ankitAvatar from "@/assets/ankit-avatar.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Avatar */}
          <div className="flex justify-center md:justify-start">
            <div className="portfolio-avatar">
              <img 
                src={ankitAvatar} 
                alt="Ankit Negi Avatar" 
                className="w-60 h-68 md:w-64 md:h-65 rounded-2xl object-cover"
              />
            </div>
          </div>
          
          {/* Bio */}
          <div className="portfolio-card space-y-4 text-center md:text-left">
            <p className="text-lg leading-relaxed text-foreground">
              My name is Ankit Negi, a full stack developer with 8+ years of experience building high-performance, scalable, and modern web applications. I specialize in crafting seamless frontends with Vue.js & React, and robust backends with Node.js & Express. My work spans across e-commerce, healthcare, and enterprise platforms with a focus on performance, maintainability, and clean architecture.
            </p>
            
            {/* Interests */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-foreground">Interests</h3>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Badge variant="secondary" className="flex items-center gap-2 px-3 py-1">
                  <Gamepad2 className="w-4 h-4" />
                  Gaming
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-2 px-3 py-1">
                  <Video className="w-4 h-4" />
                  Tech Youtube
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-2 px-3 py-1">
                  <MapPin className="w-4 h-4" />
                  Traveling
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Experience & Education Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Cognizant Experience */}
          <Card className="portfolio-card space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold text-foreground">CTS – Senior Associate</h2>
              <Badge variant="outline" className="text-sm">Feb 2024 – Present</Badge>
            </div>
            <p className="text-muted-foreground">Full stack Developer</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                Optimized high-traffic UI application for  an ecommerce giant reducing load times by 25%.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                Creation of reusable UI components, plugins improving development speed by 30%.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                Worked on deployment lifecycle using Docker, Kubernetes, and AWS Infrastructure.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                Adapted to unique challenges and requirements.
              </li>
            </ul>
             <div className="space-y-2">
              <h4 className="text-sm font-medium text-foreground">Tech stack:</h4>
              <p className="text-sm text-muted-foreground">Javascript, Vue 2, Node JS, Mongo DB, AWS - EC2, SQS, Docker, Kubernetes, Github Actions,</p>
            </div>
          </Card>

          {/* TCS Experience */}
          <Card className="portfolio-card space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold text-foreground">TCS – Assistant Consultant</h2>
              <Badge variant="outline" className="text-sm">Dec 2021 – Feb 2024</Badge>
            </div>
            <p className="text-muted-foreground">Frontend UI Developer</p>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                Migrated AppleCare Portal from Vue 2 to Vue 3.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                Integrated Playwright and Vitest achieving 90% test coverage
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                Worked on performance improvements for high-traffic react application.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                Lead the team of 5 developers to deliver high-quality code and features.
              </li>
            </ul>
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-foreground">Tech stack:</h4>
              <p className="text-sm text-muted-foreground">Vue 2, Vue3, React, Apple Design System, Vitest, Playwright</p>
            </div>
          </Card>

           {/* LTI Mindtree Experience */}
          <Card className="portfolio-card space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold text-foreground">LTI Mindtree – Module Lead</h2>
              <Badge variant="outline" className="text-sm">Aug 2020 – Nov 2021</Badge>
            </div>
            <p className="text-muted-foreground">MERN Developer</p>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                Built React dashboards for Cisco’s network monitoring platform.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                Developed REST APIs for real-time fault analysis using Node.js & MongoDB.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                Ensured authentication and compliance.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                Lead the team of 5 developers to deliver high-quality code and features.
              </li>
            </ul>
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-foreground">Tech stack:</h4>
              <p className="text-sm text-muted-foreground">React, Node JS, Express, Mongo DB</p>
            </div>
          </Card>

          {/* Infostride Experience */}
          <Card className="portfolio-card space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold text-foreground">Infostride Technologies – Software Engineer</h2>
              <Badge variant="outline" className="text-sm">Jun 2019 – Aug 2020</Badge>
            </div>
            <p className="text-muted-foreground">Full Stack Developer</p>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                Built Vue.js & React apps for healthcare and e-commerce domain projects
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                Integrated eBay & Walmart APIs for marketplace automation.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                Worked on nuxt for server-side rendering and performance optimization.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                Worked with database technologies like MongoDB and MySQL.
              </li>
            </ul>
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-foreground">Tech stack:</h4>
              <p className="text-sm text-muted-foreground">PHP - Laravel, Vue JS (Nuxt), React JS, Node JS, Express JS, MySQL, Mongo DB</p>
            </div>
          </Card>

          {/* Rubico Experience */}
          <Card className="portfolio-card space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold text-foreground">Rubico – Associate Software Developer</h2>
              <Badge variant="outline" className="text-sm">Oct 2017 – May 2019</Badge>
            </div>
            <p className="text-muted-foreground">Full stack Developer</p>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                Developed responsive SaaS and healthcare dashboards using Vue.js and Laravel.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
               Created reusable UI components and improved app performance by optimizing Vue.js code.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                Integrated Stripe payment gateway and Passport authentication for secure online transactions.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                Migrated legacy PHP based frontend to a modern Vue.js single-page application, improving speed and user engagement by 30%
              </li>
            </ul>
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-foreground">Tech stack:</h4>
              <p className="text-sm text-muted-foreground">PHP Laravel, Vue 2, MySQL, Jenkins</p>
            </div>
          </Card>

          {/* Education */}
          <Card className="portfolio-card space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Education</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-foreground">B.tech in Computer Science</h3>
                  <p className="text-sm text-muted-foreground">Uttarkhand Technical University</p>
                  <p className="text-sm text-muted-foreground">Dehradun, Uttarakhand, India</p>
                </div>
                <Badge variant="outline" className="text-sm">2013</Badge>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-foreground">Intermediate - 12th</h3>
                  <p className="text-sm text-muted-foreground">CBSE, Dehradun Region</p>
                  <p className="text-sm text-muted-foreground">Dehradun, Uttarakhand, India</p>
                </div>
                <Badge variant="outline" className="text-sm">2009</Badge>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-foreground">High School - 10th</h3>
                  <p className="text-sm text-muted-foreground">CBSE, Dehradun Region</p>
                  <p className="text-sm text-muted-foreground">Dehradun, Uttarakhand, India</p>
                </div>
                <Badge variant="outline" className="text-sm">2007</Badge>
              </div>
            </div>
          </Card>
        </div>

        {/* Tools & Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Design Tools */}
          <Card className="portfolio-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">Frontend Skills</h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Badge variant="secondary" className="flex items-center gap-2 px-3 py-1">
                  <FileCode2 className="w-4 h-4"/>
                  HTML/CSS/Javascript
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-2 px-3 py-1">
                  <PhilippinePeso className="w-4 h-4"/>
                  Vue JS (Nuxt, Vue 2, Vue 3)
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-2 px-3 py-1">
                  <PersonStanding className="w-4 h-4" />
                  React JS (Core & Next JS)
                </Badge>
            </div>
          </Card>

          {/* Backend Skill */}
          <Card className="portfolio-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">Backend Skills</h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Badge variant="secondary" className="flex items-center gap-2 px-3 py-1">
                  <Hexagon className="w-4 h-4"/>
                  Node JS (Express JS)
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-2 px-3 py-1">
                  <PiggyBank className="w-4 h-4"/>
                  PHP (Laravel)
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-2 px-3 py-1">
                  <MapPin className="w-4 h-4" />
                  Drupal/Wordpress
                </Badge>
            </div>
          </Card>

          {/* Languages */}
          <Card className="portfolio-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">Full Stack Skills</h3>
           <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Badge variant="secondary" className="flex items-center gap-2 px-3 py-1">
                  <CircleCheck className="w-4 h-4"/>
                  Github, Github Actions, Jenkins
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-2 px-3 py-1">
                  <CircleCheck className="w-4 h-4"/>
                  Docker & Kubernetes
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-2 px-3 py-1">
                  <CircleCheck className="w-4 h-4" />
                  AWS (EC2, SQS, Lambda)
                </Badge>
                  <Badge variant="secondary" className="flex items-center gap-2 px-3 py-1">
                  <CircleCheck className="w-4 h-4" />
                  Playwright, Vitest, Postman
                </Badge>
            </div>
          </Card>

          {/* Portfolio Links */}
          <Card className="portfolio-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">Portfolio</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs">Williams Sonoma</Badge>
              <Badge variant="secondary" className="text-xs">Apple Enterprise</Badge>
              <Badge variant="secondary" className="text-xs">Cisco Bits Automation</Badge>
              <Badge variant="secondary" className="text-xs"></Badge>
              <Badge variant="secondary" className="text-xs">Dribbble</Badge>
            </div>
          </Card>
        </div>

        {/* Details Footer */}
        <Card className="portfolio-card">
          <div className="flex flex-wrap gap-6 justify-center md:justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎂</span>
              <span className="text-muted-foreground">21 April</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <a href="https://anknegi.netlify.app/" className="text-muted-foreground">https://anknegi.netlify.app/</a>
            </div>
            
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">Login to view</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Flag className="w-4 h-4 text-orange-500" />
              <span className="text-muted-foreground">New Delhi- India</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;