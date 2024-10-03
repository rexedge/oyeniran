import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description:
      'A full-stack e-commerce solution built with Next.js, Stripe, and a headless CMS.',
    technologies: ['Next.js', 'React', 'Stripe', 'Tailwind CSS', 'Prisma'],
    demoLink: 'https://ecommerce-demo.yourdomain.com',
    githubLink: 'https://github.com/yourusername/ecommerce-platform',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A collaborative task management tool with real-time updates using WebSockets.',
    technologies: ['React', 'Node.js', 'Express', 'Socket.io', 'MongoDB'],
    demoLink: 'https://taskmanager.yourdomain.com',
    githubLink: 'https://github.com/yourusername/task-manager',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description:
      'A responsive weather dashboard that provides real-time weather data and forecasts.',
    technologies: ['React', 'Redux', 'OpenWeatherMap API', 'Chart.js'],
    demoLink: 'https://weather.yourdomain.com',
    githubLink: 'https://github.com/yourusername/weather-dashboard',
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <CardContent className="flex-grow p-6">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary/10 text-primary text-sm px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between p-6">
              <Button asChild variant="outline">
                <Link href={project.demoLink}>Live Demo</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={project.githubLink}>GitHub</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
