# 👓 Visionary Spectacles E-commerce Website

## 🌟 Project Overview

Visionary Spectacles is a modern, responsive e-commerce platform specializing in eyewear, offering a seamless shopping experience for users to explore, select, and purchase glasses and eye-related accessories. This project was developed during HackOasis v2 hackathon, with the collaborative effort and creativity of our team under a 6 hour time-constraint.

---

## 🚀 Features

### 🛒 E-commerce Capabilities
- Interactive Product Catalog
- Advanced Frame Selection System
- Dynamic Cart Management
- Responsive Product Filtering
- Real-time Price Calculations

### 👓 Unique Eyewear Experience
- AR Virtual Try-On Technology
- Comprehensive Frame Compatibility Matching
- Face Shape Analysis for Frame Selection
- Detailed Frame Style Recommendations

### 💻 Frontend Innovation
- Responsive and Adaptive Design
- Smooth GSAP Animations
- Interactive User Interfaces
- Cross-device Compatibility

### 📝 Comprehensive Blog System
- Markdown-powered Blog Posts
- Dynamic Content Rendering
- Category-based Filtering
- Search Functionality
- Responsive Blog Layout

### 🔍 Advanced Selection Tools
- Eye Health Condition Matching
- Add-on Customization
- Lens Technology Insights
- Style Guidance

### 🌐 User Experience Enhancements
- Intuitive Navigation
- Accessibility-focused Design
- Performance-optimized Interactions
- Modern, Clean Aesthetic

### 🔒 Privacy and Consent
- Camera Access Permissions
- Transparent User Consent Mechanisms
- Local Storage Management


## 📦 Prerequisites

### System Requirements

- Node.js (v16.0.0 or later)
- npm (v8.0.0 or later)
- Git

### Recommended Development Environment

- Visual Studio Code
- Modern web browser (Chrome, Firefox, Safari, Edge)

## 🔧 Tech Stack

### Frontend

- Vue.js
- Vite
- GSAP (Animations)
- HTML5
- CSS3
- JavaScript (ES6+)

### Development Tools

- Vite
- Markdown Processing
- GSAP ScrollTrigger



## 📋 Installation Steps

1. Clone the Repository

```bash
git clone https://github.com/flurry101/visionary-spectacles.git
cd visionary-spectacles
```

2. Install Dependencies

```bash
npm install
```

3. Run the Development Server

```bash
npm run dev
```

---

### 📦 Key Dependencies

- Production Dependencies
- vue: Vue.js framework
- gsap: Animation library
- vite: Build tool
- vite-plugin-markdown: Markdown processing

### 📝 Development Dependencies

- @vue/compiler-sfc: Vue Single File Component compiler
- vite-plugin-markdown: Markdown plugin
- punycode: Unicode encoding utility

### 🚀 Deployment

#### Recommended Platforms

- Netlify
- Vercel
- GitHub Pages

### Deployment Steps

1. Build the application:

   ```bash
   npm run build
   ```

2. Deploy to your preferred hosting platform

---

### 📜 Limitations / Issues

#### 1. When a user submits their email for subscription, it checks for validity.
  
- **Limitations:**
  - Stores subscriptions only in the browser's local storage
  - No real backend integration
  - Shows success/error toasts
  - Prevents duplicate subscriptions
  - Limited to single device/browser
  - Provides a simple, client-side subscription mechanism

- **Original Idea**
  - Implement actual backend API integration
  - Add more comprehensive error handling
  - Implement GDPR compliance features
  - Add analytics tracking

#### 2. AR Virtual Try-On Feature
- Likely an incomplete or planned feature

#### 3. Frontend Constraints:

- Time-constrained development might limit feature completeness
- Primarily client-side rendering

#### 4. Technical Limitations:

- Relies on client-side JavaScript for most interactions
- Limited backend integration
- No persistent user accounts
- Basic cart functionality without advanced features

#### 5. Deployment and Scaling:

- Recommended for static hosting platforms
- May have performance limitations with large product catalogs
- No mentioned server-side rendering or advanced caching strategies


#### 6. Add-ons and Customization:

- Basic add-ons selection
- No complex lens customization workflow
- Limited prescription handling


#### 7. 📦 Backend and Content Management

#### Current Approach
- **Blog Content**: Managed through Markdown files
  - Blog posts are stored as `.md` files in the project directory
  - Content is processed client-side using Markdown processing
  - No traditional backend database for blog content

- #### Content Processing
  - Utilizes `vite-plugin-markdown` for processing Markdown files
  - Dynamic blog post rendering through client-side JavaScript
  - Lightweight, file-based content management approach

- #### Limitations
  - No server-side content management
  - Static file-based blog system
  - Limited scalability for large number of blog posts

#### Future Roadmap
- Implement backend API for blog content management
- Add database integration for blog posts
- Create admin interface for content creation and management
---
### 📞 Contact

- Project Maintainer: [Melody]((https://github.com/flurry101))
- Email: [GMail](mailto:m3l0dy.144@gmail.com)
- Project Link: [Live Demo](https://flurry101.github.io/spectra_visionary)

### 🙏 Acknowledgements

- Vue.js Community
- GSAP Animation Library
- My Teammates 👓✨
- Hackathon Organizers for the opportunity to create this project
