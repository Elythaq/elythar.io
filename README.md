# 🧠 Elythar.io – AI-Powered Digital Marketplace

**Elythar.io** is a modern, scalable, full-stack e-commerce platform built for selling digital products and services, including:

- ⚙️ Software & CLI tools
- 🧩 Plugins & Add-ons
- 🧠 AI/ML & Robotics Solutions
- 🎮 Game Development Assets (Unreal, Unity, Godot)
- 🧪 Custom Testing & Development Services

---

## 🚀 Tech Stack

| Tech                | Description                                    |
|---------------------|------------------------------------------------|
| **Next.js 14+**     | App Router, hybrid rendering, SEO optimized    |
| **Tailwind CSS**    | Utility-first, highly customizable styling     |
| **TypeScript**      | Type-safe codebase, both frontend & backend    |
| **MongoDB (Mongoose)** | NoSQL database, scalable                    |
| **Stripe**          | Secure, modern payment processing              |
| **NextAuth.js**     | Authentication (OAuth, custom, email, etc.)    |
| **Custom Sidebar**  | Proprietary modern, animated, collapsible sidebar (not open source) |

---

## ✅ Features

### 🔐 Authentication
- [x] User registration & login
- [x] Secure sessions (NextAuth.js)
- [x] Social login (GitHub, Google)
- [x] Password reset/forgot

### 🛍️ E-Commerce
- [x] Product pages with rich media previews
- [x] Stripe checkout (one-time payments)
- [ ] Stripe subscriptions (coming soon)
- [ ] Cart & quantity management
- [ ] Coupons & discounts

### 🧾 Orders & Dashboard
- [x] Purchase history
- [x] Digital downloads
- [ ] Invoice (PDF) generation *(in progress)*
- [ ] Optional license key system

### 📊 Admin Panel
- [x] Product management (upload/edit/delete)
- [ ] Order analytics dashboard
- [ ] User management

### 🔍 Marketplace UI
- [x] Category/tag filtering
- [x] Responsive/mobile-first layout
- [x] Proprietary collapsible sidebar navigation
- [ ] Full-text search *(in progress)*
- [ ] Ratings & reviews *(planned)*

### 🌐 SEO & Hosting
- [x] Rich meta tags, OG images, favicons
- [ ] Migration to Vercel (recommended for SSR/APIs)

---

## 📁 Folder Structure (Summary)

```
src/
  app/               # Next.js App Router (routing/layout)
  components/        # React components (sidebar, UI elements, etc.)
  styles/            # Tailwind CSS, custom CSS
  lib/               # Utilities, Stripe, MongoDB helpers
  models/            # Mongoose schemas (User, Product, Order)
  types/             # TypeScript types/interfaces
  hooks/             # Custom React hooks (sidebar state, etc.)
  pages/             # API routes or legacy pages
public/              # Static files (images, favicons)
.env                 # Environment variables
next.config.js       # Next.js config
tailwind.config.js   # Tailwind config
```
---

## 📦 Quick Start

```bash
# Install dependencies
npm install

# Set up your .env file with all required keys (MongoDB, Stripe, Auth)
cp .env.example .env.local

# Run the dev server
npm run dev

# Visit http://localhost:3000
```

---

## 📜 License

This repository and all original code, including the sidebar navigation UI and supporting logic, are **proprietary and not open source**.  
All rights reserved © 2024–present, Elythar.io / [Your Name or Company].

You **may not copy, modify, redistribute, or use this codebase or its components for commercial or non-commercial purposes without explicit written permission** from the author.

*If you are interested in collaboration or licensing, please contact: [your.email@domain.com]*

---

**Enjoy Elythar.io!**
