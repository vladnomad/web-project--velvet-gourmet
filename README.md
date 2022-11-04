# Catering web page

Project, originally provided by a Udemy JavaScript course. 
I had made multiple changes to the project, before continuing with JavaScript.

- color theme
- individual styles
- animations and states
- html and css structure
- responsive design
- accessibility concerns
- art direction shift on mobile devices

### Before

![original project style](https://drive.google.com/uc?id=12v0zTEXCeI-BVCOQp7G4QuYmwp_sZYwK)

### After

![changed project style](https://drive.google.com/uc?id=1NCsHU3nF4PtX2a8gmB5PMaHP2FC-F3CC)

## HTML

### Improving accessibility  

- Used semantic html tags like: main, article, section, aside
- Added descriptive alt attributes to all images
- All articles and sections have an aria-label or an aria-labelledby associated with it
- Calorie calculation form has an aria-description to provide additional instructions
- Tested focus states of all active elements
- Added a hidden button to skip navigation for screen readers
- Accessibility tree structure examined with [ARIA DevTools](https://addons.mozilla.org/en-US/firefox/addon/aria-devtools/) extension for Firefox.

![accessibility tree](https://drive.google.com/uc?id=1v3a5M5-JXdztVoC-H1-esCSQm4VF1rLA)

### Optimization
  
- Images use srcset and sizes attributes to provide the appropriate image with regards to the page's width
- Intentionally used jpg because of the smaller file size than the compressed Webp I was getting
- Used [postcss-import](https://github.com/postcss/postcss-import) to split blocks of styles into separate files

## CSS

### Design

- Utilized grid and flex layouts with adaptive changes on mobile devices
- Interactable elements have unique hover, active, focus states and animations
- Used glass design for the calculation form, modal window form and tab panel description
- Custom radio input style fitting the page's theme

### Optimization

- Organized styles into blocks by usage or page section for better readability
- Used utility classes for reusable styles in HTML (mostly positioning) 
- Added custom variables for colors and font-sizes to avoid reusing values and stick to the design pattern
- Added media queries for multiple devices with changes to art direction, positioning and fonts
-  Multi-browser compatibilty by providing vendor prefixes to backdrop-filter, clip-path and appearance