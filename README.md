# 🌍 Traveller

A modern travel-focused web application built with **Next.js**. Traveller is designed to provide users with an intuitive platform for exploring travel destinations and managing travel-related information through a clean and responsive interface.

> 🚧 **Project Status:** In Development

## ✨ Features

* 🌍 Explore travel destinations
* 🗺️ Travel-focused user interface
* 📍 Destination and location-based information
* 🧩 Reusable React components
* 📱 Responsive design
* ⚡ Fast performance with Next.js
* 🗄️ Database migration support
* 🎨 Modern and clean UI

## 🛠️ Tech Stack

* **Framework:** Next.js
* **Frontend:** React
* **Language:** JavaScript
* **Styling:** CSS / Tailwind CSS
* **Database:** Database integration with migrations
* **Build Tool:** Next.js
* **Package Manager:** npm

## 📁 Project Structure

```text
traveller/
├── app/                # Next.js application routes and pages
├── components/         # Reusable React components
├── lib/                # Utility functions and application logic
├── migrations/         # Database migration files
├── public/             # Static assets and images
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── package-lock.json
└── postcss.config.mjs
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/vinithdc-jpg/traveller.git
```

### 2. Navigate to the Project

```bash
cd traveller
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the project root.

```env
# Add your required environment variables here

# Example:
# DATABASE_URL=
# NEXT_PUBLIC_API_URL=
```

> Keep sensitive credentials inside `.env.local` and never commit them to GitHub.

### 5. Start the Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 📜 Available Scripts

### Development

```bash
npm run dev
```

Starts the Next.js development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Production Server

```bash
npm start
```

Runs the production build.

### Lint

```bash
npm run lint
```

Checks the project for ESLint issues.

## 🧭 Application Architecture

The project follows the Next.js App Router structure.

```text
User
 │
 ▼
Next.js Application
 │
 ├── Pages / Routes
 │
 ├── React Components
 │
 ├── Application Logic
 │
 └── Database / Migrations
```

### `app/`

Contains application routes, pages, layouts, and server-side functionality.

### `components/`

Contains reusable UI components used throughout the application.

### `lib/`

Contains shared utilities, database logic, and other application-level functionality.

### `migrations/`

Contains database migration files used to manage database structure changes.

### `public/`

Contains static assets such as images, icons, and other public resources.

## 🔮 Future Improvements

* [ ] Add user authentication
* [ ] Add destination search
* [ ] Add destination filtering
* [ ] Add travel itinerary management
* [ ] Add hotel and accommodation information
* [ ] Add travel booking functionality
* [ ] Add user profiles
* [ ] Add saved destinations
* [ ] Add reviews and ratings
* [ ] Add map integration
* [ ] Improve mobile experience
* [ ] Add production deployment
* [ ] Add automated testing

## 🔐 Security

Do not commit sensitive information to the repository.

Never expose:

* API keys
* Database credentials
* Authentication secrets
* Private tokens
* Production environment variables

Use `.env.local` for local development and configure environment variables securely in your deployment platform.

## 🚧 Project Status

Traveller is currently under active development. Features, UI, database structure, and application functionality may change as the project evolves.

## 👨‍💻 Author

**Vinith**

GitHub:
https://github.com/vinithdc-jpg

## 📄 License

This project currently does not specify a license.

If you intend to make the project open source, consider adding an appropriate license such as the MIT License.

---

⭐ If you like this project, consider giving it a star!
