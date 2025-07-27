import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import ankitAvatar from "@/assets/ankit-avatar.png";
import { Link } from "react-router-dom";
import {
  bioText,
  connectOptions,
  experiences,
  education,
  skills,
  portfolio,
} from "@/content/portfolioContent";
// Popup component
const WelcomePopup = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
    <div className="relative max-w-xl w-full">
      <button
        className="absolute top-2 right-2 z-10 text-white bg-black/60 rounded-full px-2 py-0.5 text-2xl hover:bg-black/80"
        onClick={onClose}
        aria-label="Close"
        style={{ lineHeight: 1 }}
      >
        ×
      </button>
      <div className="aspect-video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/VhyaKEJiVtw?si=egH169fti7vaNE-3&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  </div>
);

const Index = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      {showPopup && <WelcomePopup onClose={() => setShowPopup(false)} />}
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Avatar */}
          <div className="flex justify-center md:justify-start">
            <div
              className="portfolio-avatar cursor-pointer"
              onClick={() => setShowPopup(true)}
              title="Click to watch welcome video"
            >
              <img
                src={ankitAvatar}
                alt="Ankit Negi Avatar"
                className="w-60 h-68 md:w-64 md:h-65 rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="portfolio-card space-y-8 text-center md:text-left">
            <p className="text-lg leading-relaxed text-foreground">
              {bioText}
            </p>

            {/* connect */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-foreground">Connect with me</h3>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {connectOptions.map((connect, idx) => (
                   <a href={connect.url} target="_new" key={idx} rel="noopener noreferrer">
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-2 px-3 py-1"
                  >
                   
                    {connect.icon}
                    {connect.label}
                  </Badge>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience & Education Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Experience Cards */}
          {experiences.map((exp, idx) => (
            <Card className="portfolio-card space-y-4" key={idx}>
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold text-foreground">
                  {exp.company}
                </h2>
                <Badge variant="outline" className="text-sm">
                  {exp.period}
                </Badge>
              </div>
              <p className="text-muted-foreground">{exp.role}</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                {exp.details.map((d, i) => (
                  <li className="flex items-start gap-2" key={i}>
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    {d}
                  </li>
                ))}
              </ul>
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-foreground">
                  Tech stack:
                </h4>
                <p className="text-sm text-muted-foreground">{exp.tech}</p>
              </div>
            </Card>
          ))}

          {/* Education */}
          <Card className="portfolio-card space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Education</h2>
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div className="flex justify-between items-start" key={idx}>
                  <div>
                    <h3 className="font-medium text-foreground">{edu.degree}</h3>
                    <p className="text-sm text-muted-foreground">{edu.school}</p>
                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                  </div>
                  <Badge variant="outline" className="text-sm">
                    {edu.year}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Tools & Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <Card className="portfolio-card" key={idx}>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {skill.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {skill.items.map((item, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="flex items-center gap-2 px-3 py-1"
                  >
                    {item.icon}
                    {item.label}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}

          {/* Portfolio Links */}
          <Card className="portfolio-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Portfolio
            </h3>
            <div className="flex flex-wrap gap-2">
              {portfolio.map((item, idx) => (
                <Badge variant="secondary" className="text-xs" key={idx}>
                  {item}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
