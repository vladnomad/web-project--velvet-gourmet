# Catering web project

Velvet Gourmet, a catering website with an upgraded graphic design, custom animations and improved HTML/CSS structures. The site ensures a user-friendly experience with the help of responsive design across devices, while features like tabpanels for menus, a live offer countdown timer, and a calorie calculator enhance user interaction. Dynamic menu card rendering and server-side form handling boost backend functionality. Semantic HTML and ARIA landmarks, guarantee enhanced readability and maintainability, as well as snsuring adherence to best practices in accessibility standards.

View the website on [Github Pages](https://vladnomad.github.io/web-project--velvet-gourmet/public)

### Significant changes:

- Complete overhaul of graphic style
- Custom animations and hover/focus states
- Improved HTML and CSS structure
- Implementing responsive design solutions
- Addressing accessibility
- Art direction shift on mobile devices

## Before...

![original project style](https://drive.google.com/uc?id=12v0zTEXCeI-BVCOQp7G4QuYmwp_sZYwK)

## After...

![changed project style](https://drive.google.com/uc?id=1kuIzYPdmB637HWxHnlQnI1GbZG3YMhxr)

## JavaScript

#### Added tabpanel functionality

The tab selector buttons are focusable elememts. Enter or Space activates a tab, and displays an associated tabpanel containing menu description and image.

#### Implemented a countdown timer for marketing offers

Timer is programmed to determine User's current date and set a deadline to the first day of the following month. Offer description is updated accordingly. 

#### Respective buttons open a contact form modal window

When the modal window is open, page scrolling is prevented. You can close the modal in 3 ways: by clicking a close icon, by clicking outside of the modal wrapper or by pressing Esc.

#### Implementing JS classes to render menu cards

The cards are dynamically rendered with the help of JS classess. Rest operator was used to add HTML classess to rendered cards for greater reusability. The cards are generated on the server side using JSON database.

#### Server-side form functionality

Implementing an ability to send form data to the server in JSON format. Used XAMMP on Linux to test the POST method. (First - XMLHttpRequest, later reworked with Fetch API using Promises).

#### Dynamic status notifications

Notification for the user on loading, success and failure in sending form data to the server.

#### Gallery slider

Use arrows to list through images. On last image in the list, pressing forward (right) returns to the first item. Indicator in the top corner shows what image you are on.

#### Calorie calculator

Utilizes the revised Harris-Benedict Equation for calculating daily calorie rate based on height, weight, age and activity. Refreshes upon each value change and uses localstorage to save data entered by the user. 

## HTML

### Improving accessibility

- Added srcset and sizes attributes to img, specifying the URL to use on different devices
- Used semantic html tags like: main, article, section, aside
- Added descriptive alt attributes to all images
- All articles and sections have an aria-label or an aria-labelledby associated with it
- Calorie calculation form has an aria-description to provide additional instructions
- Tested focus states of all active elements
- Added a hidden button to skip navigation for screen readers
- Accessibility tree structure examined with [ARIA DevTools](https://addons.mozilla.org/en-US/firefox/addon/aria-devtools/) extension for Firefox.

![accessibility tree](https://drive.google.com/uc?id=1v3a5M5-JXdztVoC-H1-esCSQm4VF1rLA)

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
- Added media queries for multiple devices with changes to art direction and positioning
- Multi-browser compatibilty: providing vendor prefixes to backdrop-filter, clip-path and appearance