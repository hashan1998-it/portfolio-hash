import { 
  Code, 
  Palette, 
  Database, 
  Server, 
  Smartphone, 
  Wrench,
  Container,
  FileCode2,
  GitBranch,
  Box
} from 'lucide-react'

export const skills = [
  {
    category: "Languages",
    icon: Code,
    items: ["JavaScript", "Python", "Java", "PHP", "Dart", "HTML", "CSS"]
  },
  {
    category: "Frontend",
    icon: Palette,
    items: ["React.js", "Next.js", "Vue.js", "Flutter", "Tailwind CSS", "Bootstrap", "GSAP"]
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Laravel", "Express.js", "PHP", "RESTful APIs", "Firebase", "MVC Architecture"]
  },
  {
    category: "Databases",
    icon: Database,
    items: ["MySQL", "MongoDB", "Firestore", "PostgreSQL"]
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    items: ["Flutter", "React Native", "iOS Development", "Android Development"]
  },
  {
    category: "DevOps & Tools",
    icon: Wrench,
    items: ["Git", "Docker", "Postman", "Figma", "VS Code", "GraphQL", "Jest"]
  }
]