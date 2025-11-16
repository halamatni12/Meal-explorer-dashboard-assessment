🌟 Meal Explorer Dashboard
🔗 Live Demo (Firebase Hosting)

👉 https://meal-explorer--dashboard.web.app

📌 Project Overview

Meal Explorer Dashboard is a modern Angular web application that allows users to:

Browse meals fetched from TheMealDB API

Search and filter meals

View detailed information

Create, edit, and delete custom meals (in-memory CRUD)

Navigate using a clean dashboard & responsive sidebar

This project was built as part of a technical assessment, focusing on:

Clean Angular architecture

Communication & clarification

UI/UX quality

API integration

Local CRUD operations

🚀 Main Features
🔸 1) API Meals

✔ Fetch meals from TheMealDB
✔ Search meals by name
✔ Filter by category
✔ View full meal details

🔸 2) Custom Meals (Local CRUD)

✔ Add new custom meals
✔ Edit existing meals
✔ Delete meals
✔ Search / filter custom meals
✔ Stored locally only (in-memory)

🔸 3) Dashboard

✔ Simple introduction screen
✔ Navigation to API Meals & Custom Meals

🔸 4) Responsive Sidebar

Full sidebar on desktop

Icon-only sidebar on mobile for better UX

📖 How to Use the App
🏠 1. Open the Dashboard

You will see two main sections:

API Meals

Custom Meals

🍽️ 2. Browsing API Meals

Open API Meals from sidebar

Use search bar to find meals

Apply filters

Click View Details to see ingredients & instructions

✏️ 3. Managing Custom Meals

Go to Custom Meals

Click Add Meal

Edit or delete meals anytime

Use search & filter to organize your list

📱 4. Mobile Sidebar

Automatically switches to icons only

Allows more space for content

🔙 5. Return to Dashboard

Click Dashboard anytime to return home.

🧰 Tech Stack
Technology	Purpose
Angular 17+ (Standalone)	Main UI framework
TypeScript	Application logic
Bootstrap 5	Styling & layout
Angular Signals	State management
Firebase Hosting	Deployment
TheMealDB API	Public meals API
📦 Installation & Setup
1️⃣ Install dependencies
npm install

2️⃣ Run development server
ng serve


App runs on:
👉 http://localhost:4200/

3️⃣ Production build
ng build --configuration production

4️⃣ Deploy to Firebase (already deployed)
firebase deploy --only hosting

📁 Folder Structure (Simplified)
src/app/
  core/
    models/
    services/
  features/
    dashboard/
    meals/
      meals-list/
      meals-details/
      add-meal/
      edit-meal/
      custom-meals/
  sidebar/
  app.routes.ts
  app.html
  app.ts

📝 Assumptions & Notes

Custom meals are stored in memory only

TheMealDB is a public API requiring no authentication

Angular Signals selected for simplicity & performance

Clean feature-based architecture

Fully responsive UI

🔗 Live Demo

👉 https://meal-explorer--dashboard.web.app

✔️ Final Notes

This project focuses on clarity, structure, clean UI, and smooth navigation—meeting the expectations of a front-end technical assessment
