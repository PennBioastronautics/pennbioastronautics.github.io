# Penn Bioastronautics Website

A modern, space-themed React website for Penn Bioastronautics - a student organization at the University of Pennsylvania dedicated to advancing space biology and bioastronautics research.

## 🚀 Features

- **Modern Space-Themed Design**: Beautiful gradient backgrounds, glass morphism effects, and cosmic color schemes
- **Rich Animations**: Framer Motion powered animations with floating elements, smooth transitions, and interactive components
- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Interactive Navigation**: Smooth scrolling navigation with animated mobile menu
- **Dynamic Content Sections**:
  - Hero section with animated background elements
  - About section with mission and vision
  - Executive team showcase with social links
  - Research projects with tabbed interface
  - Blog posts with featured content
  - Resources section with career opportunities, funding, and learning paths
  - Contact forms and partnership opportunities
- **Animated Star Field**: Dynamic background with twinkling stars
- **Glass Morphism UI**: Modern frosted glass effects throughout the interface
- **Custom Animations**: Floating elements, rotating borders, and smooth hover effects

## 🛠 Tech Stack

- **React 18** - Modern React with hooks and functional components
- **Framer Motion** - Advanced animations and transitions
- **Tailwind CSS** - Utility-first CSS framework with custom space theme
- **Lucide React** - Beautiful, customizable icons
- **React Intersection Observer** - Scroll-triggered animations

## 🎨 Design System

### Color Palette
- **Space**: Deep blues and purples (#1e1b4b to #6366f1)
- **Cosmic**: Vibrant purples and magentas (#4a044e to #d946ef)
- **Nebula**: Teals and cyans (#042f2e to #14b8a6)

### Typography
- **Headings**: Space Grotesk - Modern, geometric font
- **Body**: Inter - Clean, readable sans-serif

### Animations
- Floating elements with 6s ease-in-out cycles
- Rotating orbital elements
- Twinkling star effects
- Smooth hover and click interactions

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd penn-bioastronautics
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website

## 🏗 Project Structure

```
src/
├── components/
│   ├── StarField.js          # Animated background stars
│   ├── Navigation.js         # Header navigation with mobile menu
│   ├── Hero.js              # Landing section with main CTA
│   ├── About.js             # Mission and vision section
│   ├── Team.js              # Executive team showcase
│   ├── Research.js          # Research projects and initiatives
│   ├── Blog.js              # Blog posts and insights
│   ├── Resources.js         # Career resources and opportunities
│   ├── Contact.js           # Contact forms and information
│   └── Footer.js            # Footer with links and newsletter
├── App.js                   # Main application component
├── index.js                 # React entry point
└── index.css               # Global styles and Tailwind imports
```

## 🎯 Key Sections

### 1. Hero Section
- Animated title with gradient text effects
- Floating background elements
- Call-to-action buttons
- Scroll indicator

### 2. About Section
- Mission statement and vision
- Feature cards with hover effects
- Animated statistics and achievements

### 3. Team Section
- Executive board member profiles
- Social media links
- Animated profile cards

### 4. Research Section
- Tabbed interface for different project types
- Ongoing projects, student initiatives, and collaborations
- Project status indicators and participant counts

### 5. Blog Section
- Featured post with large format
- Grid layout for regular posts
- Newsletter signup integration

### 6. Resources Section
- Career opportunities and internships
- Funding and grant information
- Learning paths and course recommendations
- GitHub resources and tools

### 7. Contact Section
- Contact form with validation
- Multiple contact methods
- Social media integration
- Partnership opportunities

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on push to main branch

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

## 🎨 Customization

### Colors
Modify the color palette in `tailwind.config.js`:
```javascript
colors: {
  space: { /* your space theme colors */ },
  cosmic: { /* your cosmic theme colors */ },
  nebula: { /* your nebula theme colors */ }
}
```

### Animations
Customize animations in `tailwind.config.js`:
```javascript
animation: {
  'custom-float': 'float 6s ease-in-out infinite',
  // Add your custom animations
}
```

### Content
Update content in each component file:
- Team member information in `Team.js`
- Research projects in `Research.js`
- Blog posts in `Blog.js`
- Resource links in `Resources.js`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast color ratios
- Screen reader friendly

## 🔧 Development

### Available Scripts
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Code Style
- ESLint configuration for code quality
- Prettier for code formatting
- Consistent component structure

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📞 Support

For questions or support, please contact:
- Email: info@pennbioastro.org
- GitHub Issues: [Create an issue](https://github.com/pennbioastro/website/issues)

## 🌟 Acknowledgments

- University of Pennsylvania School of Engineering
- NASA for inspiration and partnership opportunities
- The space biology research community
- All contributors and team members

---

**Penn Bioastronautics** - Advancing biology for space exploration 🚀 