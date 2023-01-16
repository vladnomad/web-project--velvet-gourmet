# Catering web project

A one page catering web project as a part of the practical part of a JavaScript course.
I had made multiple changes to the project's HTML, CSS and file structure before implementing JavaScript.

View the website on [Github Pages](https://vladnomad.github.io/web-project--velvet-gourmet/public/index.html) 
(For server side functionality, download and run with a JSON server)

### Significant changes:

- Complete overhaul of graphic style
- Animations and states
- HTML and CSS structure
- Responsive design
- Addressing accessibility
- Art direction shift on mobile devices

## Before...

![original project style](https://drive.google.com/uc?id=12v0zTEXCeI-BVCOQp7G4QuYmwp_sZYwK)

## After...

![changed project style](https://drive.google.com/uc?id=1kuIzYPdmB637HWxHnlQnI1GbZG3YMhxr)

## JavaScript

#### Added tabpanel functionality

Switching content with animation depending on what tab was selected.

#### Implemented a countdown timer for marketing offers

Takes into calculation User's date and time.

#### Respective buttons open a contact form modal window

Close by clicking an icon, outside of the modal wrapper or pressing Esc.

#### Implementing JS classes to render menu cards

The cards are dynamically rendered with the help of JS classess. Rest operator was used to add HTML classess to rendered cards for greater reusability. The cards are generated on the server side using JSON database.

#### Server-side form functionality

Implementing ability to send data from forms to the server in JSON format. Used XAMMP on Linux to test the POST method. (First - XMLHttpRequest, later reworked with Fetch API using Promises).

#### Dynamically constructed status notification

Notification for the user on loading, success and failure in sending form data to the server.

#### Gallery slider

Returns from last to first, shows what image you are on.

#### Calorie calculator

Utilizes an actual formula for calculating daily calorie rate based on height, weight, age and activity. Refreshes upon each value change and uses localstorage to save data entered by the user. 

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

- JPG was used for photos, showing a better size-quality ratio than WEBP
- Added srcset and sizes attributes to img, specifying the URL to use on different devices

## CSS

### Design

- Custom radio input style fitting the page's theme
- Utilized grid and flex layouts with adaptive changes on mobile devices
- Interactable elements have unique hover, active, focus states and animations
- Used glass design for the calculation form, modal window form and tab panel description

### Optimization

- Organized styles into blocks for better readability and maintenance
- Used [postcss-import](https://github.com/postcss/postcss-import) to split blocks of styles into separate files  
- Used utility classes for reusable styles in HTML (mostly positioning)
- Added custom variables for colors and font-sizes to avoid reusing values and stick to the design pattern
- Added media queries for multiple devices with changes to art direction, positioning and fonts
- Multi-browser compatibilty: providing vendor prefixes to backdrop-filter, clip-path and appearance