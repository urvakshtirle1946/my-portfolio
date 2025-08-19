# Your Name - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, black and white theme, and SEO optimization.

## 🚀 Features

- **Hero Section** - Animated text with rotating roles
- **About Section** - Professional bio with profile photo
- **Projects Section** - Featured projects with technology tags
- **Experience Section** - Work history and technical skills
- **Contact Section** - Contact form and social links
- **Fully Responsive** - Works perfectly on all devices
- **Black & White Theme** - Clean, minimalist design
- **SEO Optimized** - Meta tags and structured data
- **Smooth Animations** - Custom CSS animations and transitions
- **Performance Optimized** - Fast loading and optimized assets

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Animations**: Custom CSS keyframes
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### 1. Personal Information

Update your personal information in the following files:

#### Hero Section (`src/app/components/hero.tsx`)
```typescript
// Update your name
<span className="bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent">
  Your Name
</span>

// Update roles
const roles = [
  'Full Stack Developer',
  'UI/UX Designer', 
  'Problem Solver',
  'Tech Enthusiast'
]
```

#### About Section (`src/app/components/about.tsx`)
- Update bio text
- Replace profile photo placeholder
- Update experience highlights

#### Contact Section (`src/app/components/contact.tsx`)
```typescript
const contactInfo = [
  {
    icon: "📧",
    title: "Email",
    value: "your.email@example.com",
    link: "mailto:your.email@example.com"
  },
  // ... update other contact info
]
```

### 2. Adding Your Profile Picture

To add your profile picture to the About section:

1. **Add your image to the public folder**:
   ```bash
   # Place your image in the public folder
   public/profile-photo.jpg
   ```

2. **Update the About component** (`src/app/components/about.tsx`):
   ```typescript
   // Replace the placeholder div with an actual image
   <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-full overflow-hidden shadow-2xl border-4 border-white">
     <img
       src="/profile-photo.jpg"
       alt="Your Name"
       className="w-full h-full object-cover"
     />
   </div>
   ```

3. **Recommended image specifications**:
   - **Size**: 400x400 pixels (square)
   - **Format**: JPG, PNG, or WebP
   - **Quality**: High resolution
   - **Style**: Professional headshot with good lighting

### 3. Projects

Update your projects in `src/app/components/projects.tsx`:

```typescript
const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Project description...",
    image: "/path/to/image.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/yourusername/project",
    featured: true
  },
  // ... add more projects
]
```

### 4. Experience & Skills

Update your work experience and skills in `src/app/components/experience.tsx`:

```typescript
const skills = {
  frontend: ["React", "Next.js", "TypeScript"],
  backend: ["Node.js", "Python", "PostgreSQL"],
  tools: ["Git", "Docker", "AWS"],
  other: ["REST APIs", "GraphQL", "Testing"]
}

const experience = [
  {
    id: 1,
    company: "Your Company",
    position: "Your Position",
    duration: "2022 - Present",
    description: "Your role description...",
    achievements: [
      "Achievement 1",
      "Achievement 2"
    ]
  }
]
```

### 5. SEO & Metadata

Update metadata in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Name - Full Stack Developer Portfolio',
  description: 'Your portfolio description...',
  keywords: 'your, keywords, here',
}
```

### 6. Colors & Styling

The portfolio uses a black and white theme. To customize colors:

1. Update color classes throughout components
2. Modify the color scheme in `src/app/globals.css`
3. Update Tailwind config if needed

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px  
- Desktop: > 1024px

## 🎯 Performance Optimization

- Images are optimized with Next.js Image component
- CSS is purged with Tailwind
- JavaScript is bundled and minified
- Lazy loading for better performance

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── projects.tsx
│   │   ├── experience.tsx
│   │   ├── contact.tsx
│   │   └── navigation.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── ...
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with Next.js and Tailwind CSS
- Icons from various sources
- Inspiration from modern portfolio designs

---

**Happy coding! 🚀**
