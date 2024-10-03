import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section id="intro" className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Your Name</h1>
        <h2 className="text-2xl text-muted-foreground mb-4">
          Full-stack Software Engineer
        </h2>
        <p className="text-xl mb-8">
          Crafting elegant solutions to complex problems
        </p>
        <Button asChild>
          <Link href="/resume.pdf" download>
            Download Resume
          </Link>
        </Button>
      </section>

      <section id="about" className="mb-16">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <div className="flex items-center space-x-8">
          <Image
            src="/placeholder.svg"
            alt="Your Name"
            width={200}
            height={200}
            className="rounded-full"
          />
          <p className="text-lg">
            A passionate software engineer with 5+ years of experience in
            building web applications. I specialize in React, Node.js, and cloud
            technologies. When I'm not coding, you can find me hiking or reading
            about the latest tech trends.
          </p>
        </div>
      </section>

      <section id="featured-projects" className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((project) => (
            <div key={project} className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
              <p className="mb-4">
                A brief description of the project and the technologies used.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" asChild>
                  <Link href="#">Demo</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#">GitHub</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
