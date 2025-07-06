import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Gamepad2, Video, MapPin, Phone, Globe, Flag } from "lucide-react";
import sunilAvatar from "@/assets/sunil-avatar.png";

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
                src={sunilAvatar} 
                alt="Sunil Kumar Avatar" 
                className="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover"
              />
            </div>
          </div>
          
          {/* Bio */}
          <div className="portfolio-card space-y-4 text-center md:text-left">
            <p className="text-lg leading-relaxed text-foreground">
              My name is Sunil Kumar, self-taught logo/brand designer with 4+ years of experience creating modern, clean, and minimal brands that make a lasting impression.
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
                  Film Making
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
          
          {/* Freelancer Experience */}
          <Card className="portfolio-card space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold text-foreground">Freelancer</h2>
              <Badge variant="outline" className="text-sm">2021 - now</Badge>
            </div>
            <p className="text-muted-foreground">Logo/Brand Designer</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                Worked on diverse logo and brand identity projects.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                Collaborated with clients from multiple countries.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                Developed a versatile design skill set.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                Adapted to unique challenges and requirements.
              </li>
            </ul>
          </Card>

          {/* Meetzed Experience */}
          <Card className="portfolio-card space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold text-foreground">Meetzed</h2>
              <Badge variant="outline" className="text-sm">2020 - 2021</Badge>
            </div>
            <p className="text-muted-foreground">Graphic Designer</p>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                Collaboration: Supported Lead Designer on projects.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                Branding: Crafted unique brand identities.
              </li>
            </ul>
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-foreground">Tools:</h4>
              <p className="text-sm text-muted-foreground">Used Illustrator, Photoshop & InDesign.</p>
            </div>
          </Card>

          {/* Education */}
          <Card className="portfolio-card space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Education</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-foreground">High School</h3>
                  <p className="text-sm text-muted-foreground">Humanities</p>
                  <p className="text-sm text-muted-foreground">Delhi Cantonment, India</p>
                </div>
                <Badge variant="outline" className="text-sm">2017</Badge>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-foreground">Diploma</h3>
                  <p className="text-sm text-muted-foreground">Animation and Graphic Design</p>
                  <p className="text-sm text-muted-foreground">Delhi, India</p>
                </div>
                <Badge variant="outline" className="text-sm">2017-18</Badge>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-foreground">Graduation</h3>
                  <p className="text-sm text-muted-foreground">Bachelor of Fine Arts</p>
                  <p className="text-sm text-muted-foreground">IGNOU Delhi, India</p>
                </div>
                <Badge variant="outline" className="text-sm">2017-21</Badge>
              </div>
            </div>
          </Card>
        </div>

        {/* Tools & Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Design Tools */}
          <Card className="portfolio-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">Design Tools</h3>
            <div className="flex gap-3">
              <div className="tool-icon bg-orange-600/10 text-orange-600">
                <span className="text-sm font-bold">Ai</span>
              </div>
              <div className="tool-icon bg-blue-600/10 text-blue-600">
                <span className="text-sm font-bold">Ps</span>
              </div>
              <div className="tool-icon bg-pink-600/10 text-pink-600">
                <span className="text-sm font-bold">Id</span>
              </div>
              <div className="tool-icon bg-purple-600/10 text-purple-600">
                <span className="text-sm font-bold">Xd</span>
              </div>
            </div>
          </Card>

          {/* Editing Tools */}
          <Card className="portfolio-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">Editing Tools</h3>
            <div className="flex gap-3">
              <div className="tool-icon bg-purple-600/10 text-purple-600">
                <span className="text-sm font-bold">Ae</span>
              </div>
              <div className="tool-icon bg-blue-600/10 text-blue-600">
                <span className="text-sm font-bold">Pr</span>
              </div>
              <div className="tool-icon bg-gray-600/10 text-gray-300">
                <span className="text-xs font-bold">DV</span>
              </div>
            </div>
          </Card>

          {/* Languages */}
          <Card className="portfolio-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">Languages</h3>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded overflow-hidden">
                <Flag className="w-full h-full text-orange-500" />
              </div>
              <div className="w-8 h-8 rounded overflow-hidden">
                <Flag className="w-full h-full text-blue-600" />
              </div>
              <div className="w-8 h-8 rounded overflow-hidden">
                <Flag className="w-full h-full text-red-600" />
              </div>
            </div>
          </Card>

          {/* Portfolio Links */}
          <Card className="portfolio-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">Portfolio</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs">Bento</Badge>
              <Badge variant="secondary" className="text-xs">Behance</Badge>
              <Badge variant="secondary" className="text-xs">Instagram</Badge>
              <Badge variant="secondary" className="text-xs">YouTube</Badge>
              <Badge variant="secondary" className="text-xs">Dribbble</Badge>
            </div>
          </Card>
        </div>

        {/* Details Footer */}
        <Card className="portfolio-card">
          <div className="flex flex-wrap gap-6 justify-center md:justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎂</span>
              <span className="text-muted-foreground">26 years</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">iamsunilfreelancer.com</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">+91 9899052055</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Flag className="w-4 h-4 text-orange-500" />
              <span className="text-muted-foreground">India</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;