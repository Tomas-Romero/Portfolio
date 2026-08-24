import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/Tomas-Romero', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/tomas-agustin-romero/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:tomasromero200310@gmail.com', label: 'Email' },
]

export const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'tomasromero200310@gmail.com',
    href: 'mailto:tomasromero200310@gmail.com',
    copyable: true,
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/Tomas-Romero',
    href: 'https://github.com/Tomas-Romero',
    copyable: true,
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/tomas-agustin-romero',
    href: 'https://www.linkedin.com/in/tomas-agustin-romero/',
    copyable: true,
  },
]