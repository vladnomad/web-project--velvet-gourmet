# Catering web page

Project, originally provided by a Udemy JavaScript course. 
I have made multiple changes to the project, before continuing with JavaScript.

- color theme, 
- individual styles, 
- animations and states, 
- html and css structure, 
- responsive design,
- accessibility concerns,  
- art direction on mobile devices.

### Before

![original project style](https://drive.google.com/uc?id=12v0zTEXCeI-BVCOQp7G4QuYmwp_sZYwK)

### After

![changed project style](https://drive.google.com/uc?id=1NCsHU3nF4PtX2a8gmB5PMaHP2FC-F3CC)

## HTML

### Improving accessibility  

- Used semantic html tags like: main, article, section, aside
- Added descriptive alt attributes to all images
- All articles and sections have an aria-label or an aria-labelledby associated with
- Calorie calculation form has an aria-description to provide additional instructions
- Tested focus states of all active elements
- Added a hidden button to skip navigation for screen readers
- Accessibility tree structure examined with [ARIA DevTools](https://addons.mozilla.org/en-US/firefox/addon/aria-devtools/) extension for Firefox.

![enter image description here](https://drive.google.com/uc?id=1v3a5M5-JXdztVoC-H1-esCSQm4VF1rLA)

### Optimization
  
- Images use srcset and sizes attributes to provide the appropriate image with regards to the page's width
- Intentionally used jpg because of the smaller file size than the compressed Webp
- Used PostCSS import to split blocks of styles into separate files

## CSS
