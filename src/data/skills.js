import { Code, Layout, Database, Server, Smartphone, Wrench } from 'lucide-react'

export const skills = [
  {
    category: "Languages",
    icon: Code,
    items: ["JavaScript", "Python", "Java", "PHP", "Dart", "HTML", "CSS"]
  },
  {
    category: "Frontend",
    icon: Layout,
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
    category: "Tools & Others",
    icon: Wrench,
    items: ["Git", "Docker", "Postman", "Figma", "VS Code", "GraphQL", "Jest"]
  }
]