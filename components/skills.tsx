import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML/CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Firebase", "REST APIs"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Docker", "AWS", "Vercel", "GitHub", "VS Code"],
  },
  {
    category: "Design",
    skills: ["Figma", "UI/UX Design", "Responsive Design", "Accessibility", "Design Systems"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground">Technologies and tools I work with regularly.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <Card key={category.category} className="p-6">
              <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
