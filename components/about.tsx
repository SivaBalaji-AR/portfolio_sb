export function About() {
  return (
    <section id="about" className="py-20 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate full-stack developer with 1 year of experience building web applications. I love
                creating intuitive user interfaces combined with robust backend systems.
              </p>
              <p>
                My journey in tech started with a curiosity about how things work. Today, I'm focused on writing clean,
                maintainable code and delivering exceptional user experiences.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold mb-2">Focus Areas</h3>
              <p className="text-sm text-muted-foreground">
                Full Stack Applications, AI/ML Developer, Performance Optimization
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold mb-2">Currently Learning</h3>
              <p className="text-sm text-muted-foreground">
                Advanced TypeScript patterns, Web Performance, Cloud Architecture
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold mb-2">Based In</h3>
              <p className="text-sm text-muted-foreground">Tamil Nadu, India • Available for remote work worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
