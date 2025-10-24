import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-2xl mx-auto mb-12">
          <div className="text-center">
            <Mail className="mx-auto mb-4 text-primary" size={32} />
            <h3 className="font-semibold mb-2">Email</h3>
            <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors">
              hello@example.com
            </a>
          </div>
          <div className="text-center">
            <Linkedin className="mx-auto mb-4 text-primary" size={32} />
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              linkedin.com/in/yourprofile
            </a>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <a
            href="#"
            className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="#"
            className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="#"
            className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors"
          >
            <Twitter size={24} />
          </a>
          <a
            href="#"
            className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="text-center">
          <Button size="lg">Send Me an Email</Button>
        </div>
      </div>
    </section>
  )
}
