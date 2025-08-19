'use client'

import { Home, User, Briefcase, FileText, Mail } from 'lucide-react'
import { Navigation } from "../navigation"

const NavBarDemo = () => {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Projects', url: '#projects', icon: Briefcase },
    { name: 'Experience', url: '#experience', icon: FileText },
    { name: 'Contact', url: '#contact', icon: Mail }
  ]

  return <Navigation items={navItems} />
}

export default NavBarDemo
