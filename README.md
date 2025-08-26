# My Portfolio

A portfolio highlighting my experience and skills as a software engineer, with a strong foundation in frontend development and UI design. Built with **Next.js**, **React**, **Tailwind CSS**, and **TypeScript**.

## 🔹 Demo

[Live Demo](https://melvin-lin.vercel.app)

## 🛠 Tech Stack

-   **Frontend:** React, Next.js, TypeScript
-   **Styling:** Tailwind CSS
-   **UI Components & Animation:** Framer Motion, Radix UI, React Vertical Timeline
-   **Charts & Data Visualization:** Plotly.js
-   **Deployment:** Vercel

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/melvin-lin-dev/melvin-lin-portfolio.git
```

### Run Locally

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### Build for Production

```bash
# Build the production version
npm run build
# or
yarn build
# or
pnpm build
# or
bun build

# Start the production server
npm start
# or
yarn start
# or
pnpm start
# or
bun start
```

## 💡 Future Improvements

-   Add more highlighted projects
-   Optimize code redundancy
-   Add dedicated page
    -   About
    -   Skill
    -   Project Highlights
    -   Collections
    -   etc.

## 📫 Contacts

Email: melvin.lin.work@gmail.com
GitHub: https://github.com/melvin-lin-dev
LinkedIn: https://www.linkedin.com/in/melvin-lin-dev

## 📁 Folder Structures

Outlines the main project folder organization for easier navigation and maintainability.

```bash
/src
    /app
        /<page-name>
            /components         # Page-specific UI elements (Input, Output, etc.)
            /containers         # Page-specific logic / state management
            page.tsx            # Page entry point

    /common
        /components             # Shared UI components used across pages
        /containers             # Shared containers / logic

    /components                 # Third-party or external UI components

    /config                     # Config files (e.g., email, API keys)

    /lib
        /modules
            /<domain-name>
                /data           # Domain-specific data
                /enums          # Domain-specific enums
                /models         # Domain-specific models
                /services       # Domain-specific services
        /shared                 # Shared logic across domains

    /utils                      # Third-party utilities

    /types                      # Third-party or global types
```
