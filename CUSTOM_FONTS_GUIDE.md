# Custom Fonts Setup Guide

This guide will help you add and use custom local fonts for titles in your Penn Bioastronautics website.

## 📁 Font File Placement

1. **Add your font files** to the `public/fonts/` directory
2. **Supported formats** (in order of preference):
   - `.woff2` (best compression, modern browsers)
   - `.woff` (good compression, wider support)
   - `.ttf` (fallback for older browsers)

## 🔧 Font Configuration Steps

### Step 1: Add Your Font Files
Place your font files in `public/fonts/` with descriptive names:
```
public/fonts/
├── your-title-font.woff2
├── your-title-font.woff
├── your-title-font.ttf
├── your-title-font-bold.woff2
├── your-title-font-bold.woff
├── your-title-font-bold.ttf
├── your-title-font-light.woff2
├── your-title-font-light.woff
└── your-title-font-light.ttf
```

### Step 2: Update Font Paths in CSS
Edit `src/index.css` and replace the placeholder paths:

```css
@font-face {
  font-family: 'CustomTitle';
  src: url('/fonts/YOUR_ACTUAL_FONT_NAME.woff2') format('woff2'),
       url('/fonts/YOUR_ACTUAL_FONT_NAME.woff') format('woff'),
       url('/fonts/YOUR_ACTUAL_FONT_NAME.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

### Step 3: Configure Font Weights
If you have multiple font weights, add them:

```css
/* Bold variant */
@font-face {
  font-family: 'CustomTitle';
  src: url('/fonts/YOUR_FONT_BOLD.woff2') format('woff2');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

/* Light variant */
@font-face {
  font-family: 'CustomTitle';
  src: url('/fonts/YOUR_FONT_LIGHT.woff2') format('woff2');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
```

## 🎨 Using Custom Fonts

### Automatic Application
Your custom font is automatically applied to:
- All headings (`h1`, `h2`, `h3`, `h4`, `h5`, `h6`)
- Elements with `.cosmic-text` class
- Elements with `.custom-title` class

### Manual Application with Tailwind Classes
```jsx
<h1 className="font-custom-title text-4xl">Custom Title</h1>
<p className="font-custom-title font-bold">Bold Custom Text</p>
<span className="font-custom-title font-light">Light Custom Text</span>
```

### Manual Application with CSS Classes
```jsx
<h1 className="custom-title">This uses your custom font</h1>
<div className="cosmic-text">Gradient text with custom font</div>
```

## 🔍 Font Recommendations

### For Space/Tech Themes:
- **Orbitron** - Futuristic, geometric
- **Exo 2** - Modern, clean
- **Rajdhani** - Technical, precise
- **Space Mono** - Monospace, retro-futuristic
- **Audiowide** - Bold, tech-inspired

### For Academic/Professional:
- **Inter** - Clean, readable
- **Source Sans Pro** - Professional
- **Lato** - Friendly, approachable
- **Montserrat** - Modern, versatile

## 🚀 Quick Setup Example

If you have a font called "SpaceFont":

1. **Add files:**
   ```
   public/fonts/SpaceFont-Regular.woff2
   public/fonts/SpaceFont-Bold.woff2
   ```

2. **Update CSS:**
   ```css
   @font-face {
     font-family: 'CustomTitle';
     src: url('/fonts/SpaceFont-Regular.woff2') format('woff2');
     font-weight: normal;
   }
   
   @font-face {
     font-family: 'CustomTitle';
     src: url('/fonts/SpaceFont-Bold.woff2') format('woff2');
     font-weight: bold;
   }
   ```

3. **Rebuild the site:**
   ```bash
   npm run build
   ```

## 🔧 Troubleshooting

### Font Not Loading?
1. Check file paths are correct
2. Ensure files are in `public/fonts/` not `src/fonts/`
3. Clear browser cache
4. Check browser developer tools for 404 errors

### Font Looks Different?
1. Verify font-weight values match your font files
2. Check if you need font-style: italic for italic variants
3. Ensure font-display: swap is set for better loading

### Performance Tips
1. Use `.woff2` format for best compression
2. Only load font weights you actually use
3. Consider using `font-display: swap` for better loading experience

## 📝 Current Configuration

Your site is currently configured with:
- **Font Family:** `CustomTitle` (with fallbacks to Space Grotesk and sans-serif)
- **Applied to:** All headings, cosmic-text, and custom-title classes
- **Tailwind Class:** `font-custom-title`
- **Weights:** Normal (400), Light (300), Bold (700)

After adding your fonts, rebuild with `npm run build` to see the changes! 