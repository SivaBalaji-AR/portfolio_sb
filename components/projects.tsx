import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management and payment processing.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team collaboration features.",
    tags: ["React", "Firebase", "Tailwind CSS", "WebSocket"],
    link: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "Interactive analytics dashboard with data visualization and custom reporting capabilities.",
    tags: ["Next.js", "Recharts", "Supabase", "TypeScript"],
    link: "#",
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application powered by AI with natural language processing capabilities.",
    tags: ["React", "OpenAI API", "Socket.io", "Node.js"],
    link: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">A selection of projects I've built and shipped to production.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <a key={project.title} href={project.link} className="group">
              <Card className="h-full p-6 hover:border-primary/50 transition-colors cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                  <ArrowUpRight
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                    size={20}
                  />
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
