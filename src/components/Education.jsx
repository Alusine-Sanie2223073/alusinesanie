export function Education() {
  const educationData = [
    {
      degree: "Master of Computer Science",
      institution: "AI Professionals College",
      location: "31 Bolling Street, Kingtom, Freetown, Sierra Leone",
      year: "2022 - 2026",
      description: "Specialized in Software Development and Artificial Intelligence. Creating all types of business and portfolio websites. Graduated with honors.",
      achievements: ["GPA:4.0", "Code Man", "Researcher"]
    },
    {
      degree: "Javascript Algorithm and Data Structures",
      institution: "FreecodeCamp",
      location: "Online",
      year: "2023( 3 months)",
      description: "Focused on full-stack development and data structures. Active member of coding club.",
      achievements: ["Self-taught", "Hackathon"]
      },
     {
      degree: "Microsoft Office Package",
      institution: "Ai Professionals College",
      location: "31 Bolling Street, Kingtom, Freetown, Sierra Leone",
      year: "2022( 3 months)",
      description: "Live practicals on Microsoft Word, Excel, and PowerPoint. Completed various projects and presentations.",
      achievements: ["Certificate of Completion", "Excel Expert", "Word Specialist", "PowerPoint Pro"]
    }
    
  ];

  return (
    <section id="profile" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Educational <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Background</span>
          </h2>
          <p className="text-gray-600 text-lg">My academic journey and achievements</p>
        </div>

        <div id="education" className="space-y-8">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="border-l-4 border-blue-600 pl-8 py-6 hover:bg-gray-50 transition-colors rounded-r-lg"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h3 className="text-2xl mb-2">{edu.degree}</h3>
                  <p className="text-gray-700">{edu.institution}</p>
                  <p className="text-gray-500 text-sm">{edu.location}</p>
                </div>
                <span className="inline-block mt-2 md:mt-0 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">
                  {edu.year}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">{edu.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {edu.achievements.map((achievement, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-purple-50 text-purple-700 rounded text-sm"
                  >
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
