# Motor Insurance Quote Flow

A modern, user-friendly React + TypeScript web app for generating personalized motor insurance quotes in Zambia. Built with Vite, Tailwind CSS, and a step-by-step guided flow, users can quickly get a quote, download a PDF, or receive it by email.

---

## 🚗 Overview

**MotorGuard** is a demo insurance quote system designed for Zambian drivers. It provides a seamless, multi-step experience for users to:
- Enter vehicle, driver, and personal details
- Select coverage options
- Instantly view a premium quote
- Download a PDF or email the quote

The app is fully client-side, with data persistence via localStorage and export via PDF or email (EmailJS integration).

---

## ✨ Features

- **Step-by-step quote flow** with progress indicator
- **Instant premium calculation** based on user input
- **PDF export** of the quote summary
- **Email delivery** of the quote (via EmailJS)
- **Data persistence** (auto-saves progress in localStorage)
- **Responsive, modern UI** (Tailwind CSS)
- **Validation and user feedback** (SweetAlert2 popups)
- **404 and Contact pages** (Contact is a placeholder)

---

## 🖥️ Demo Flow

1. **Landing Page**: Introduction, features, testimonials, and CTA to get a quote.
2. **Quote Steps**:
   - **Vehicle Info**: Type, make, model, year, value, usage
   - **Personal Info**: Name, phone, email, NRC
   - **Driver Info**: Age, experience, location
   - **Coverage Selection**: Basic, Standard, or Comprehensive
   - **Summary**: Premium breakdown, export/email options
3. **Export**: Download a styled PDF or send the quote to your email.
4. **Persistence**: Progress is saved automatically; users can reset at any time.
5. **404/Contact**: Friendly error and placeholder contact page.

---

## 🛠️ Tech Stack

- **React 19** + **TypeScript**
- **Vite** (dev/build tool)
- **Tailwind CSS** (utility-first styling)
- **SweetAlert2** (popups/alerts)
- **EmailJS** (email delivery)
- **jsPDF** + **html2canvas** (PDF export)
- **React Router v7** (routing)
- **Lucide React** (icons)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
```bash
npm install
# or
yarn install
```

### Development
```bash
npm run dev
# or
yarn dev
```

### Build for Production
```bash
npm run build
```

### Linting
```bash
npm run lint
```

---

## 📁 Folder Structure

```
├── src/
│   ├── components/      # Reusable UI components (forms, summary, stepper)
│   ├── pages/           # Main pages (Home, Quote, Contact, NotFound)
│   ├── utils/           # Utility functions (calculations, export, storage, types)
│   ├── assets/          # Static assets (SVGs)
│   ├── App.tsx          # App routes
│   └── main.tsx         # App entry point
├── public/              # Static public assets
├── index.html           # Main HTML file
├── tailwind.config.cjs  # Tailwind config
├── vite.config.ts       # Vite config
└── ...
```

---

## ⚙️ Environment Variables

To enable email delivery, set the following in your environment (e.g., `.env`):
```
VITE_Service_id=your_emailjs_service_id
VITE_Template_id=your_emailjs_template_id
VITE_Public_key=your_emailjs_public_key
```

---

## 📝 Credits

- UI/UX: Tailwind CSS, Lucide Icons
- Alerts: SweetAlert2
- PDF: jsPDF, html2canvas
- Email: EmailJS
- Built by Patrick Lungu

---

## 📢 Notes
- The Contact page is a placeholder.
- This is a demo; no backend or real policy purchase.
- For questions, see the code or open an issue.
