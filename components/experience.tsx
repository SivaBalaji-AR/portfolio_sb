import { Card } from "@/components/ui/card"

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "IAMNEO",
    period: "2025 - Present",
    description:
      "Developed and scaled features for 'NeoHire,' a multi-tenant SaaS hiring tool.",
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground">My professional journey and career highlights.</p>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 border-l-4 border-l-primary">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
              </div>
              <p className="text-muted-foreground">{exp.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
