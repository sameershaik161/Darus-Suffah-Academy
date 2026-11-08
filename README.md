# Iqra Bismi Academy (IBA) - Official Website

**"Learn Quran Online with Authentic Islamic Education"**  
A complete, production-quality, responsive multi-page website for **Iqra Bismi Academy (IBA)** based in Rethibowli, Mehdipatnam, Hyderabad, India.

Built strictly with clean, semantic **HTML5**, modern **CSS3** (custom design system with variables, flexbox, grid, and SVG patterns), and minimal vanilla **JavaScript**. No external frameworks or build steps required.

---

## 📁 Folder Structure

```
/
├── index.html              # Home landing page (12 sections with user hero background)
├── about.html              # About IBA, Mission, Vision, Story, Methodology & Faculty
├── noorani-qaida.html      # Course 1: Noorani Qaida with Tajweed
├── nazra-quran.html        # Course 2: Al-Qur'an Nazra with Tajweed
├── hifz.html               # Course 3: Hifz (Quran Memorization)
├── 40-ahadith-duas.html    # Course 4: 40 Ahadith & Masnoon Duas
├── scheduling.html         # Interactive Free Trial Appointment Scheduler
├── intake-form.html        # Comprehensive Student Intake Application
├── contact.html            # Contact Page with Form & Google Maps embed
├── README.md               # Documentation & Deployment Instructions
├── css/
│   └── style.css           # Master stylesheet (theme tokens, mobile-first responsive breakpoints)
├── js/
│   └── main.js             # Mobile menu, sticky nav, FAQ accordion, form validation, scheduler
└── images/
    └── hero-bg.jpg         # Custom landing page artwork (Three students reading Quran with mosque background)
```

---

## 🌟 Key Features

1. **Custom Landing Hero Background**: Uses the exact illustration requested by the user (`images/hero-bg.jpg`), showing students reading Quran with mosque architecture, framed with an elegant gold-emerald gradient overlay.
2. **Spiritual & Modern Aesthetics**:
   - Palette: Deep Emerald Green (`#073826`), Antique Gold (`#c59b27`), and Warm Off-White (`#fdfcf9`).
   - Islamic arabesque geometric star watermark patterns in CSS.
   - Google Fonts: **Poppins** for crisp body text and **Amiri** / **Scheherazade New** for traditional Arabic calligraphy.
3. **Interactive JavaScript Components (Vanilla)**:
   - Sticky navbar with drop shadow on scroll.
   - Mobile slide-out drawer navigation with hamburger animation.
   - FAQ Accordion with smooth transitions and keyboard accessibility (`aria-expanded`).
   - Interactive Free Trial appointment scheduler:
     - Disallows past dates (minimum date is tomorrow).
     - Interactive time-slot chips in Indian Standard Time (IST).
     - Instant booking confirmation ticket.
   - Student Intake Form with comprehensive validation and success message.
   - Contact Form with mandatory GDPR consent checkbox and live feedback.
   - Smooth scrolling with header offset calculation.
   - Floating WhatsApp button (`https://wa.me/917671865973`) with pulsing animation.
   - Smooth "Back to Top" button (appears when scrolled > 350px).
   - Scroll-reveal animations using `IntersectionObserver`.
4. **Authentic Business Information**:
   - **Phone**: `+91 7671865973`
   - **Email**: `iqra.bismi.academy@gmail.com`
   - **Address**: `Rethibowli, Mehdipatnam, Hyderabad, TS 500028, India`
   - **Hours**: Monday to Friday, 9:00 AM to 10:00 PM IST
   - **Facebook**: `https://www.facebook.com/profile.php?id=61564295095199`
   - **Instagram**: `https://www.instagram.com/iqra_bismi_academy`
   - **Interactive Google Map Embed**: Embedded via standard iframe (no API key required).
5. **Dummy Data Flagged**: All dummy statistics, teacher qualifications, prices, reviews, and syllabus timelines are marked with clear `<!-- DUMMY DATA -->` comments for quick editing.

---

## 🚀 Running Locally

Because this project uses vanilla HTML, CSS, and JavaScript with standard file paths, you can run it immediately without any installation:

### Option 1: Direct File Opening
- Simply double-click `index.html` in Windows Explorer to open it in Chrome, Edge, Firefox, or Safari.

### Option 2: Using Python (Recommended)
Open PowerShell or Command Prompt in the project folder and run:
```powershell
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

### Option 3: VS Code Live Server
- Open the project folder in VS Code.
- Right-click `index.html` and click **"Open with Live Server"**.

---

## 🌐 Deployment Instructions

### Method 1: Deploy to Netlify (Fastest - Free)
1. Go to [Netlify.com](https://www.netlify.com/) and sign in.
2. Drag and drop the entire project folder into the Netlify Dashboard (under **"Sites" > "Deploy manually"**).
3. Your website will be live in seconds with a custom HTTPS URL.
4. (Optional) Connect your custom domain `iqrabismiacademy.com` in Netlify Site Settings.

### Method 2: Deploy to GitHub Pages (Free)
1. Initialize a git repository and commit your files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for Iqra Bismi Academy website"
   ```
2. Create a new repository on [GitHub](https://github.com/) named `iqra-bismi-academy`.
3. Push your repository:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/iqra-bismi-academy.git
   git push -u origin main
   ```
4. On GitHub, navigate to **Settings > Pages**.
5. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
6. Your website will be available at `https://<your-username>.github.io/iqra-bismi-academy/`.

---

## ✏️ How to Replace Dummy Data

Search for `<!-- DUMMY DATA -->` in any HTML file using VS Code or any text editor (`Ctrl + Shift + F`).
- **Teacher Cards**: Update teacher photos, names, and certifications in `index.html` and `about.html`.
- **Pricing Plans**: Adjust monthly INR amounts in `index.html#pricing`.
- **Testimonials**: Update student names, countries, and review quotes in `index.html`.
- **Course Syllabi**: Customize modules and timeline durations in `noorani-qaida.html`, `nazra-quran.html`, `hifz.html`, and `40-ahadith-duas.html`.

---
*Developed with dedication for Iqra Bismi Academy (IBA), Hyderabad, India.*
