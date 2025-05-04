import { Code, Palette, Database, Server, Smartphone, Wrench } from 'lucide-react'
import { 
  SiJavascript, 
  SiPython, 
  SiPhp, 
  SiFlutter,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiTailwindcss,
  SiBootstrap,
  SiFramer,
  SiLaravel,
  SiExpress,
  SiFirebase,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiPostman,
  SiFigma,
  SiGraphql,
  SiJest
} from 'react-icons/si'
import { FaJava, FaCode } from 'react-icons/fa'

export const skills = [
  {
    category: "Languages",
    icon: Code,
    items: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "Flutter/Dart", icon: SiFlutter, color: "#02569B" },
      { name: "HTML", icon: SiHtml5, color: "#E34C26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" }
    ]
  },
  {
    category: "Frontend",
    icon: Palette,
    items: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" }
    ]
  },
  {
    category: "Backend",
    icon: Server,
    items: [
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" }
    ]
  },
  {
    category: "Databases",
    icon: Database,
    items: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" }
    ]
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    items: [
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "React Native", icon: SiReact, color: "#61DAFB" }
    ]
  },
  {
    category: "DevOps & Tools",
    icon: Wrench,
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "VS Code", icon: FaCode, color: "#007ACC" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
      { name: "Jest", icon: SiJest, color: "#C21325" }
    ]
  }
]