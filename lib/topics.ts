// lib/topics.ts

export const courseTopics = {
  html: [
    {
      "title": "The Evolution of HTML",
      "note": "HTML (HyperText Markup Language) is the core language used to create web pages. It has evolved significantly since its creation in the early 1990s, gaining features that made the web more interactive, accessible, and modern.\n\nHTML Evolution Timeline:\n\nVersion    Year    Key Features\n--------   ----    -----------\nHTML 1.0   1993    Simple; only basic tags like headings, paragraphs, and links.\nHTML 2.0   1995    Standardized HTML; included forms and tables.\nHTML 3.2   1997    Introduced styles, scripts, and applets.\nHTML 4.01  1999    Supported CSS and better structure for layout.\nHTML5      2014    Supports audio, video, canvas, local storage, semantic tags, and mobile-friendly design.\n\nWhy the Evolution Was Important:\n- Older versions were limited to static content\n- Newer versions brought structure, multimedia, and interactivity\n- HTML5 made websites more responsive, powerful, and mobile-compatible\n\nSummary of Major Milestones:\n- HTML 1.0 – Birth of HTML with basic tags only\n- HTML 4.01 – Introduced separation of content and style (via CSS)\n- HTML5 – Supports media, canvas, semantic structure, and modern web standards\n\nKey Terms:\n- Semantic Tags: Tags like <article>, <section>, <header> that give meaning to content\n- Canvas: A tag for drawing graphics using JavaScript\n- Responsive Design: Layouts that adjust to screen size using CSS techniques",
      "code": "<!DOCTYPE html>\n<html>\n<head>\n  <title>HTML Evolution</title>\n</head>\n<body>\n  <h1>HTML Through the Years</h1>\n  <p>From simple documents to rich applications</p>\n</body>\n</html>"
    },
    {
      "title": "Importance of HTML",
      "note": "HTML (HyperText Markup Language) is the backbone of the web. Every webpage you visit—from Google to social media platforms—is built on HTML. It defines the structure of content and tells the browser how to display text, images, links, and more.\n\nWhy HTML is Essential:\n- Structures Content: Without HTML, browsers wouldn't know how to organize or present web content\n- Universal Language: HTML is understood by all web browsers\n- Accessibility: Helps screen readers and other assistive technologies interpret content\n- SEO Friendly: Search engines use HTML structure to understand and rank pages\n\nKey Points:\n- HTML provides the basic structure of sites\n- All other web technologies (CSS, JavaScript) build upon HTML\n- Proper HTML structure is crucial for accessibility and SEO",
      "code": "<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Welcome to HTML</h1>\n  <p>This is the foundation of the web.</p>\n</body>\n</html>"
    },
    {
      "title": "Writing HTML Editors",
      "note": "You can write HTML using any text editor, but using a specialized code editor makes development faster and easier. These editors offer features like syntax highlighting, auto-completion, and live preview.\n\nCommon HTML Editors:\n- Notepad: Basic text editor on Windows. Simple and lightweight\n- Visual Studio Code (VS Code): A free and powerful editor with extensions, IntelliSense, and live server preview\n- Sublime Text: A fast, minimalist editor with great performance and customization\n- Atom: Open-source and beginner-friendly, though no longer officially supported\n\nEditor Features to Look For:\n- Syntax highlighting\n- Auto-completion\n- Error detection\n- Live preview\n- Version control integration",
      "code": "<!-- Sample HTML in VS Code -->\n<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hello from VS Code</h1>\n</body>\n</html>"
    },
    {
      "title": "HTML Document Structure",
      "note": "Every HTML document follows a specific structure to help browsers understand and render content correctly. The basic layout includes a document declaration, root element, metadata section, and the content body.\n\nEssential Tags:\n- <!DOCTYPE html> – Declares the document type (HTML5)\n- <html> – Root element of the page\n- <head> – Contains metadata like title, styles, and links\n- <body> – Holds the visible content (text, images, buttons, etc.)\n\nDocument Structure Rules:\n1. Start with DOCTYPE declaration\n2. Wrap entire document in <html> tags\n3. <head> section comes before <body>\n4. Only one <head> and one <body> per document",
      "code": "<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Web Page</title>\n</head>\n<body>\n  <h1>Welcome to My Website</h1>\n  <p>This is a basic HTML structure.</p>\n</body>\n</html>"
    },
    {
      "title": "Understanding HTML Elements & Attributes",
      "note": "HTML elements are the building blocks of web pages. They define the structure and content of a page. Elements usually come in pairs: an opening tag and a closing tag.\n\nWhat is an HTML Element?\nAn element typically consists of:\n- An opening tag <tagname>\n- Content\n- A closing tag </tagname>\n\nWhat are Attributes?\nAttributes provide additional information about HTML elements. They are written in the opening tag and usually come in name/value pairs.\n\nCommon Attributes:\n- href – Specifies the URL for a link\n- src – Specifies the path of an image\n- alt – Provides alternative text for images\n- class and id – Used for styling and scripting",
      "code": "<a href=\"https://example.com\">Visit Example</a>\n<img src=\"image.jpg\" alt=\"Sample Image\">\n<p class=\"intro\">This is a paragraph with a class.</p>"
    },
    {
      "title": "Headings, Paragraphs & Line Breaks",
      "note": "HTML provides a set of tags to structure your text content clearly.\n\nHeadings (<h1> to <h6>):\nHeadings organize content into sections, with <h1> as the most important and <h6> as the least.\n\nParagraphs (<p>):\nUse <p> to group sentences into paragraphs.\n\nLine Breaks (<br>):\nThe <br> tag inserts a line break without starting a new paragraph.\n\nBest Practices:\n- Use headings in order (h1 then h2, etc.)\n- Don't skip heading levels\n- Use paragraphs for blocks of text\n- Use line breaks sparingly - prefer semantic structure",
      "code": "<h1>Main Heading</h1>\n<h2>Subheading</h2>\n<p>This is a paragraph of text.</p>\n<p>This is line one.<br>\nThis is line two after a break.</p>"
    },
    {
      "title": "Inline Style & Formatting Text",
      "note": "You can format parts of your text inline using HTML tags to emphasize or style specific sections without affecting entire blocks.\n\nCommon Formatting Tags:\n- <b> — Makes text bold\n- <i> — Makes text italic\n- <u> — Underlines the text\n- <mark> — Highlights text\n- <small> — Makes text smaller\n- <del> — Shows deleted (strikethrough) text\n\nInline Styles:\nYou can apply custom styles directly using the style attribute.\n\nBest Practices:\n- Prefer semantic tags (<strong>, <em>) over presentational tags (<b>, <i>)\n- Use CSS for complex styling\n- Keep inline styles minimal",
      "code": "<p>This is <b>bold</b> and this is <i>italic</i> text.</p>\n<p>Here is a <span style=\"color:blue;\">blue colored text</span>.</p>\n<p>This is <mark>highlighted</mark> and this is <del>deleted</del> text.</p>"
    },
    {
      "title": "Quoting Text, Comments",
      "note": "In HTML, you can include quotations and comments to clarify your content and your code.\n\nQuoting Text:\n- <blockquote>: Use for longer, block-level quotes. Browsers usually indent blockquotes\n- <q>: Use for short, inline quotations inside a paragraph\n\nAdding Comments:\nComments are notes in your HTML code that do not appear in the browser. They help explain the code for yourself or other developers.\n\nComment Syntax:\n<!-- This is a comment -->\n\nBest Practices:\n- Use comments to explain complex sections\n- Keep comments up-to-date\n- Don't over-comment obvious code\n- Use comments to mark sections",
      "code": "<blockquote>\n  This is a long quote that stands out as a separate block of text.\n</blockquote>\n\n<p>He said, <q>This is a short inline quote.</q></p>\n\n<!-- This is a comment that won't be visible -->"
    },
    {
      "title": "Adding Color and CSS",
      "note": "You can style your HTML content by adding colors and other design properties using CSS (Cascading Style Sheets). CSS can be applied inline, embedded in the page, or linked as an external stylesheet.\n\nAdding Color Inline:\nUse the style attribute directly on an HTML element to change its color.\n\nUsing CSS Classes:\nDefine colors in CSS classes and apply them to multiple elements.\n\nExternal Stylesheets:\nYou can also put all your CSS rules in a separate file (e.g., styles.css) and link it in your HTML.\n\nColor Value Types:\n- Named colors (red, blue)\n- HEX codes (#FF0000)\n- RGB values (rgb(255, 0, 0))\n- HSL values (hsl(0, 100%, 50%))",
      "code": "<p style=\"color: red;\">This text is red.</p>\n<h1 style=\"color: #007BFF;\">This heading is blue.</h1>\n\n<style>\n  .text-red { color: red; }\n  .text-green { color: green; }\n</style>\n\n<p class=\"text-red\">This text is red.</p>\n<p class=\"text-green\">This text is green.</p>"
    },
    {
      "title": "Favicon and Page Title",
      "note": "Every webpage should have a title that appears in the browser tab, and a favicon, the small icon displayed next to the page title.\n\nSetting the Page Title:\nUse the <title> tag inside the <head> section to set the page title.\n\nAdding a Favicon:\nThe favicon is usually a small image file like favicon.ico or PNG. Add it using the <link> tag in the <head>.\n\nFavicon Best Practices:\n- Size should be 16x16 or 32x32 pixels\n- Use .ico format for maximum compatibility\n- Place in root directory for automatic detection\n- Can use PNG for modern browsers\n\nSEO Considerations:\n- Keep title under 60 characters\n- Include important keywords\n- Make it descriptive and unique",
      "code": "<head>\n  <title>My Awesome Website</title>\n  <link rel=\"icon\" href=\"favicon.ico\" type=\"image/x-icon\">\n</head>"
    },
    {
      "title": "Tables, Lists (Ordered/Unordered)",
      "note": "HTML provides special tags to display data in tabular form and organize content using lists.\n\nTables:\nUse the <table> tag to display data in rows and columns.\n\nTable Elements:\n- <tr> – Table row\n- <th> – Table header cell\n- <td> – Table data cell\n\nLists:\nOrganize items using lists:\n- <ul> — Unordered list (bulleted)\n- <ol> — Ordered list (numbered)\n- <li> — List item\n\nList Best Practices:\n- Use unordered lists for items without sequence\n- Use ordered lists for steps or rankings\n- Nest lists for hierarchical data\n- Keep table usage for tabular data only",
      "code": "<table border=\"1\">\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n  </tr>\n  <tr>\n    <td>Alice</td>\n    <td>30</td>\n  </tr>\n</table>\n\n<ul>\n  <li>Apple</li>\n  <li>Banana</li>\n</ul>\n\n<ol>\n  <li>First Item</li>\n  <li>Second Item</li>\n</ol>"
    },
    {
      "title": "Class and ID Attributes",
      "note": "The class and id attributes are used to uniquely identify or group HTML elements. These attributes are essential for applying styles with CSS and manipulating elements with JavaScript.\n\nThe class Attribute:\n- Assigns one or more classes to an element\n- Multiple elements can share the same class\n- Used to apply styles to groups of elements\n\nThe id Attribute:\n- Assigns a unique identifier to an element\n- An id must be unique on the entire page\n- Useful for styling single elements or accessing them via JavaScript\n\nBest Practices:\n- Use meaningful names\n- Follow naming conventions (kebab-case)\n- Don't overuse IDs\n- Use classes for reusable styles",
      "code": "<div class=\"card highlight\">\n  This is a card with two classes.\n</div>\n\n<h1 id=\"main-title\">Welcome to My Site</h1>\n\n<script>\n  const title = document.getElementById('main-title');\n  title.style.color = 'blue';\n</script>"
    },
    {
      "title": "Using iframe",
      "note": "The <iframe> tag allows you to embed another HTML page within your current page. It is commonly used for embedding videos, maps, or other external content.\n\niframe Attributes:\n- src: URL of the page to embed\n- width: Width in pixels or percentage\n- height: Height in pixels or percentage\n- frameborder: Show/hide border (0 or 1)\n- allowfullscreen: Allow fullscreen mode\n\nSecurity Considerations:\n- Only embed content from trusted sources\n- Use sandbox attribute to restrict capabilities\n- Be aware of clickjacking risks\n- Consider performance impact\n\nCommon Uses:\n- Embedding YouTube videos\n- Google Maps integration\n- Third-party widgets\n- Documentation examples",
      "code": "<iframe \n  src=\"https://www.example.com\" \n  width=\"600\" \n  height=\"400\"\n  frameborder=\"0\"\n  allowfullscreen>\n</iframe>"
    },
    {
      "title": "JavaScript in HTML",
      "note": "Add interactivity to your web pages by including JavaScript using the <script> tag.\n\nWays to Include JavaScript:\n1. Inline scripts (directly in HTML)\n2. Internal scripts (in <script> tags)\n3. External scripts (linked .js files)\n\nScript Placement:\n- In <head> for early execution\n- Before </body> for better page load performance\n\nBest Practices:\n- Prefer external scripts\n- Use async/defer attributes when needed\n- Keep JavaScript separate from HTML\n- Follow progressive enhancement principles",
      "code": "<script>\n  alert('Hello, world!');\n</script>\n\n<!-- External script -->\n<script src=\"script.js\"></script>"
    },
    {
      "title": "Understanding File Paths",
      "note": "File paths tell the browser where to find resources like images, CSS files, or other pages.\n\nTypes of Paths:\n- Relative Path: Location relative to the current file\n  Example: images/photo.jpg\n- Absolute Path: Full URL starting with a protocol\n  Example: https://example.com/images/photo.jpg\n- Root-relative Path: Starts from website root\n  Example: /images/photo.jpg\n\nPath Navigation:\n- ./ Current directory\n- ../ Parent directory\n- / Root directory\n\nBest Practices:\n- Use relative paths for portability\n- Be consistent with path styles\n- Test paths after moving files\n- Consider URL structure for SEO",
      "code": "<!-- Relative path -->\n<img src=\"images/logo.png\" alt=\"Logo\">\n\n<!-- Absolute path -->\n<img src=\"https://example.com/images/logo.png\" alt=\"Logo\">\n\n<!-- Root-relative path -->\n<link href=\"/css/styles.css\" rel=\"stylesheet\">"
    },
    {
      "title": "Layout Techniques & Responsive Design",
      "note": "Use CSS techniques like Flexbox, Grid, and media queries to build layouts that adapt smoothly to different screen sizes and devices.\n\nKey Techniques:\n- Flexbox: One-dimensional layout for rows or columns\n- Grid: Two-dimensional layout system with rows and columns\n- Media Queries: Apply styles conditionally based on screen size or device\n\nResponsive Principles:\n- Mobile-first approach\n- Fluid grids\n- Flexible images\n- Media queries\n\nViewport Meta Tag:\nEssential for responsive design:\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
      "code": "<!DOCTYPE html>\n<html>\n<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <style>\n    .container {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n    }\n    @media (max-width: 600px) {\n      .container { grid-template-columns: 1fr; }\n    }\n  </style>\n</head>\n<body>\n  <div class=\"container\">\n    <div>Column 1</div>\n    <div>Column 2</div>\n  </div>\n</body>\n</html>"
    },
    {
      "title": "Semantic HTML",
      "note": "Semantic HTML uses meaningful tags that describe the purpose of the content, improving accessibility and SEO.\n\nCommon Semantic Tags:\n- <header> - Defines introductory content or navigation\n- <nav> - Contains navigation links\n- <main> - Represents the main content\n- <article> - Self-contained composition\n- <section> - Thematic grouping of content\n- <footer> - Footer section with info about the page\n\nBenefits:\n- Better accessibility\n- Improved SEO\n- Easier code maintenance\n- Clearer document structure\n\nNon-semantic Elements:\n- <div> - Generic block container\n- <span> - Generic inline container\n\nWhen to Use:\n- Always prefer semantic elements when appropriate\n- Use div/span only when no semantic element fits",
      "code": "<header>\n  <h1>Website Title</h1>\n  <nav>\n    <a href=\"/\">Home</a>\n    <a href=\"/about\">About</a>\n  </nav>\n</header>\n\n<main>\n  <article>\n    <h2>Article Title</h2>\n    <p>Article content...</p>\n  </article>\n</main>\n\n<footer>\n  <p>Copyright 2023</p>\n</footer>"
    },
    {
      "title": "Writing Clean Code",
      "note": "Writing clean, well-structured HTML makes your code easier to read, maintain, and debug.\n\nTips for Clean Code:\n- Use proper indentation for nested elements\n- Add comments to explain sections\n- Use meaningful tag and attribute names\n- Avoid inline styles when possible; prefer CSS classes\n- Keep your code DRY (Don't Repeat Yourself)\n- Validate your HTML\n\nHTML Validation:\n- Check for missing closing tags\n- Ensure proper nesting\n- Verify attribute values\n- Use W3C validator\n\nOrganization Tips:\n- Logical section grouping\n- Consistent naming conventions\n- Separate structure (HTML), presentation (CSS), and behavior (JS)",
      "code": "<!-- Main navigation -->\n<nav class=\"primary-nav\">\n  <ul>\n    <li><a href=\"/\">Home</a></li>\n    <li><a href=\"/about\">About</a></li>\n  </ul>\n</nav>\n\n<!-- Main content section -->\n<main>\n  <article class=\"blog-post\">\n    <h1>Post Title</h1>\n    <p>Well-structured content...</p>\n  </article>\n</main>"
    },
    {
      "title": "HTML Entities, Symbols, Images",
      "note": "HTML entities are special codes used to display reserved characters like &, <, >, and copyright symbols.\n\nCommon Entities:\n- &amp; - &\n- &lt; - <\n- &gt; - >\n- &copy; - ©\n- &reg; - ®\n\nEmbedding Images:\nUse <img> tag with src and alt attributes\n\nImage Formats:\n- JPEG: For photographs\n- PNG: For transparency\n- GIF: For animations\n- SVG: For vector graphics\n\nBest Practices:\n- Always include alt text\n- Optimize image sizes\n- Use responsive images\n- Consider lazy loading",
      "code": "<p>Use &amp; for ampersand, &lt; for less than</p>\n<p>Copyright &copy; 2023</p>\n\n<img src=\"logo.png\" alt=\"Company Logo\" width=\"200\" height=\"100\">"
    },
    {
      "title": "Charset & URL Encoding",
      "note": "Set the character encoding to UTF-8 to support most characters worldwide using the meta tag.\n\nCharset Declaration:\n<meta charset=\"UTF-8\">\n\nURL Encoding:\nUsed to encode special characters in URLs, replacing spaces and reserved characters with codes like %20.\n\nCommon Encodings:\n- Space: %20\n- <: %3C\n- >: %3E\n- &: %26\n- =: %3D\n\nBest Practices:\n- Always include charset meta tag early in <head>\n- Encode URLs properly\n- Use encodeURIComponent() in JavaScript\n- Test with special characters",
      "code": "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Page with UTF-8</title>\n</head>\n<body>\n  <p>Supports special characters: ñ, ü, 汉字</p>\n</body>\n</html>"
    },
    {
      "title": "HTML Forms & Input Types",
      "note": "Forms collect user input and are built using the <form> tag with various input types.\n\nCommon Input Types:\n- text – Single line text input\n- password – Password input\n- email – Email input with validation\n- number – Numeric input\n- checkbox – Multiple choices\n- radio – Single choice\n- submit – Button to submit form\n\nForm Attributes:\n- action: Where to send form data\n- method: HTTP method (GET/POST)\n- name: Identifies form\n- autocomplete: Enable/disable autofill\n\nBest Practices:\n- Always include labels\n- Use proper input types\n- Add validation\n- Make forms accessible",
      "code": "<form action=\"/submit\" method=\"post\">\n  <label for=\"username\">Username:</label>\n  <input type=\"text\" id=\"username\" name=\"username\" required>\n  \n  <label for=\"email\">Email:</label>\n  <input type=\"email\" id=\"email\" name=\"email\">\n  \n  <input type=\"submit\" value=\"Submit\">\n</form>"
    },
    {
      "title": "Form Attributes & Validation",
      "note": "Use HTML attributes to validate user input before submitting a form.\n\nCommon Validation Attributes:\n- required – Makes a field mandatory\n- minlength / maxlength – Set minimum/maximum length of input\n- pattern – Regular expression to enforce input format\n- type=\"email\" – Validates email format\n- type=\"number\" – Validates numeric input within a range\n\nAdditional Attributes:\n- placeholder: Hint text\n- readonly: Can't be modified\n- disabled: Can't be interacted with\n- autofocus: Automatically focused\n\nClient-side vs Server-side:\n- HTML validation is client-side only\n- Always validate on server too\n- Provide clear error messages",
      "code": "<form>\n  <label for=\"username\">Username (3+ letters):</label>\n  <input type=\"text\" id=\"username\" name=\"username\" \n         required minlength=\"3\" pattern=\"[A-Za-z]+\">\n  \n  <label for=\"age\">Age (1-120):</label>\n  <input type=\"number\" id=\"age\" name=\"age\" min=\"1\" max=\"120\">\n  \n  <input type=\"submit\" value=\"Submit\">\n</form>"
    },
    {
      "title": "Canvas and SVG Basics",
      "note": "Use the <canvas> element with JavaScript to draw graphics dynamically, or <svg> for scalable vector graphics defined in markup.\n\nCanvas:\n- Pixel-based drawing\n- Requires JavaScript\n- Good for games, data visualization\n\nSVG:\n- Vector-based\n- XML format\n- Good for icons, logos\n\nKey Differences:\n- Canvas is raster, SVG is vector\n- Canvas is scripted, SVG is declarative\n- Canvas better for complex animations\n- SVG better for resolution independence\n\nWhen to Use:\n- Canvas: Dynamic, pixel-based graphics\n- SVG: Resolution-independent graphics",
      "code": "<!-- Canvas example -->\n<canvas id=\"myCanvas\" width=\"200\" height=\"100\"></canvas>\n<script>\n  const canvas = document.getElementById('myCanvas');\n  const ctx = canvas.getContext('2d');\n  ctx.fillStyle = 'green';\n  ctx.fillRect(10, 10, 150, 75);\n</script>\n\n<!-- SVG example -->\n<svg width=\"100\" height=\"100\">\n  <circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"blue\" />\n</svg>"
    },
    {
      "title": "Embedding Audio, Video, Plugins",
      "note": "HTML5 introduced native support for audio and video with the <audio> and <video> tags, making plugins mostly obsolete.\n\nMedia Elements:\n- <audio>: For sound content\n- <video>: For video content\n\nCommon Attributes:\n- controls: Shows playback controls\n- autoplay: Starts automatically\n- loop: Loops the media\n- muted: Starts muted\n- preload: Hints how to load\n\nFormats:\n- Audio: MP3, WAV, OGG\n- Video: MP4, WebM, OGG\n\nBest Practices:\n- Include multiple sources\n- Provide fallback content\n- Consider accessibility\n- Optimize file sizes\n- Use poster images for video",
      "code": "<video width=\"320\" height=\"240\" controls>\n  <source src=\"movie.mp4\" type=\"video/mp4\">\n  Your browser does not support the video tag.\n</video>\n\n<audio controls>\n  <source src=\"audio.mp3\" type=\"audio/mpeg\">\n  Your browser does not support the audio element.\n</audio>"
    }
  ],
  css: [
    // Add CSS topics here when needed
  ],
  javascript: [
    // Add JavaScript topics here when needed
  ]
};