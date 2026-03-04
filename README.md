# Yasuri Goonathilaka — Portfolio

A clean, modern React portfolio website.

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (live preview at http://localhost:5173)
npm run dev

# 3. Build for production
npm run build
```

---

## 📁 Project Structure

```
portfolio/
├── index.html                          ← HTML entry point
├── vite.config.js                      ← Vite config
├── package.json
└── src/
    ├── main.jsx                        ← React entry point
    ├── App.jsx                         ← Root component (section order)
    ├── styles/
    │   └── global.css                  ← CSS variables, base styles, shared classes
    ├── data/
    │   └── portfolioData.js            ← ✏️  ALL CONTENT LIVES HERE
    ├── hooks/
    │   └── useFadeIn.js                ← Scroll animation hook
    ├── assets/
    │   └── images/
    │       ├── internship/             ← Put internship/farewell photos here
    │       └── projects/               ← Put project screenshots here
    │           ├── sritel/
    │           ├── scholarsage/
    │           └── ...
    └── components/
        ├── Navbar.jsx / .css
        ├── Hero.jsx / .css
        ├── About.jsx / .css
        ├── Skills.jsx / .css
        ├── Experience.jsx / .css       ← Has built-in image gallery
        ├── Projects.jsx / .css         ← Has built-in image gallery per project
        ├── Research.jsx / .css
        ├── Certifications.jsx / .css
        ├── Activities.jsx / .css
        ├── Contact.jsx / .css
        └── Footer.jsx / .css
```

---

## ✏️ How to Edit Content

**All your content is in one file: `src/data/portfolioData.js`**

| What to change        | Where                         |
|-----------------------|-------------------------------|
| Name, email, links    | `personal` object             |
| Hero stats            | `stats` array                 |
| Bio paragraphs        | `about.bio` array             |
| Education             | `about.education` array       |
| Skills & tech         | `skills` array                |
| Work experience       | `experience` array            |
| Projects              | `projects` array              |
| Research              | `research` object             |
| Certifications        | `certifications` array        |
| Activities            | `activities` array            |

---

## 🖼️ Adding Images

### Internship images (farewell, company, screenshots)

1. Copy your image files into `src/assets/images/internship/`
2. Open `src/data/portfolioData.js`
3. At the top of the file, add imports:
   ```js
   import farewell   from "../assets/images/internship/farewell.jpg";
   import teamPhoto  from "../assets/images/internship/team.jpg";
   ```
4. In the `experience` array, find the eBeyonds entry and add to `images`:
   ```js
   images: [farewell, teamPhoto],
   ```
   The gallery renders automatically with arrow navigation + thumbnails.

### Project screenshots

1. Copy screenshots into `src/assets/images/projects/`  
   (e.g., `src/assets/images/projects/sritel-1.png`)
2. Import at top of `portfolioData.js`:
   ```js
   import sritel1 from "../assets/images/projects/sritel-1.png";
   import sritel2 from "../assets/images/projects/sritel-2.png";
   ```
3. Find the project in `projects` array and add to `images`:
   ```js
   images: [sritel1, sritel2],
   ```

---

## 🌐 Deploy to GitHub Pages (Free)

```bash
# 1. Build
npm run build

# 2. The output is in /dist — push to GitHub
# Create repo: yasurirashmika.github.io
# Push the /dist contents to main branch
# Go to Settings → Pages → Deploy from main branch

# OR use gh-pages package:
npm install --save-dev gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d dist"
npm run deploy
```

Your portfolio will be live at: `https://yasurirashmika.github.io`

---

## 🎨 Customizing Colors

All colors are CSS variables in `src/styles/global.css`:

```css
:root {
  --accent:   #7c6af7;   /* Purple — primary accent  */
  --accent2:  #4ecdc4;   /* Teal   — secondary accent */
  --accent3:  #f7c56a;   /* Gold   — research accent  */
}
```

Change these to instantly retheme the whole site.
