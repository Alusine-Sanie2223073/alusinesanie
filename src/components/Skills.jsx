export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "💻",
      skills: [
        { name: "React", level: 85 },
        { name: "Javascript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Next.js", level: 80 },
        { name: "HTML5", level: 90 },
        { name: "CSS", level: 80 },
        { name: "Cursor", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Prisma", level: 80 },
        { name: "REST APIs", level: 90 },
        { name: "Javascript", level: 75 },
        { name: "Auth0", level: 85 }
      ]
    },
    {
      title: "Design & Tools",
      icon: "🎨",
      skills: [
        { name: "Figma", level: 85 },
        { name: "UI/UX Design", level: 80 },
        { name: "Git", level: 80 },
        { name: "Docker", level: 50 },
        { name: "Canvas", level: 80 },
        { name: "Photoshop", level: 75 },
        { name: "Whimsical", level: 80 }
      ]
    }
  ];

  return (
    <section id="resume" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Skills & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-gray-600 text-lg">Technologies and tools I work with</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{category.icon}</div>
              <h3 className="text-2xl mb-6">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 text-center">
          <h3 className="text-xl mb-6 text-gray-700">Other Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Jira & Asana", "Problem Solving", "Team Leadership", "Communication skills", "Project Management", "Testing", "Computer Hardware", "Cloud Services","System Administration","Networking"].map((skill, index) => (
              <span 
                key={index}
                className="px-5 py-2 bg-white text-black rounded-full shadow-md hover:shadow-lg hover:cursor-pointer transition-shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
}
