# 🎨 Canvas – A Creative Artwork Showcase Platform

## 🎯 Project Purpose
Canvas is a single-page web application where artists can upload, showcase, and explore creative artworks.  
Users can browse public artworks, like and favorite them, and manage their personal gallery.  
It emphasizes creativity, modern UI, and smooth interactions for art lovers.

---

## 🌐 Live URL
🔗 [Live Site Link Here](https://canvas-client-assignment-10.netlify.app/)

---

## 🗝 Key Features
✅ **User Authentication**
- Login, Signup, and Google Sign-in with Firebase
- Password validation (min 6 chars, uppercase & lowercase letters)
- Private routes redirect unauthorized users to Login

✅ **Add Artwork Page (Private Route)**
- Upload artwork with fields: Image URL, Title, Category, Medium/Tools, Description, Dimensions, Price, Visibility
- Automatically saves user info (Name & Email)
- Success toast on submission

✅ **Explore Artworks Page**
- Browse all public artworks
- Card layout with image, title, artist name, category, likes count
- Search by title or artist
- Optional filter by category

✅ **Artwork Details Page (Private Route)**
- Full artwork details with artist info
- Like and Add to Favorites functionalities

✅ **My Gallery Page (Private Route)**
- Displays logged-in user’s artworks
- Update and Delete options with confirmation and pre-filled forms

✅ **My Favorites Page (Private Route)**
- Displays user’s favorite artworks
- Unfavorite option

✅ **Responsive Design & UI**
- Works on mobile, tablet, and desktop
- Navbar & Footer consistent across all pages
- Creative 404 page without Navbar/Footer
- Dark/Light theme toggle with localStorage persistence
- Animations using Framer Motion and optional libraries

---

## 📦 NPM Packages Used
| Package | Purpose |
|---------|---------|
| react | Core React library |
| react-dom | DOM rendering |
| react-router-dom | Routing & Protected Routes |
| firebase | Authentication |
| axios | API calls |
| tailwindcss | Styling |
| daisyui | Prebuilt Tailwind UI components |
| framer-motion | Animations |
| react-toastify / sweetalert2 | Toast notifications & Alerts |
| react-icons / lucide-react | Icons for UI |

---

## 🧩 Tools & Technologies
- React + Vite
- TailwindCSS + DaisyUI
- Firebase Authentication
- MongoDB + Express + Node.js (Backend)
- Responsive Web Design (RWD)
- React Context for Auth Management

---

## ⚙️ Run Locally
```bash
# Clone the project
git clone https://github.com/fardin-sojon/canvas.git

# Navigate to project folder
cd canvas

# Install dependencies
npm install

# Run development server
npm run dev
