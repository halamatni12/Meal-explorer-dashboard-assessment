 Meal Explorer Dashboard
Live Demo (Firebase Hosting)

🔗  https://meal-explorer--dashboard.web.app

📌 Project Overview

Meal Explorer Dashboard is an Angular application that allows users to:

Browse meals fetched from TheMealDB API

Search and filter meals

View detailed meal information

Create, edit, and delete custom meals (in-memory CRUD)

Navigate the app using a clean and responsive layout

Manage both API meals and custom meals through a modern dashboard UI

This project was created as part of a technical assessment focusing on clean code, architecture, and communication.

🚀 Main Features

1️⃣ API Meals

Fetch meals from TheMealDB

Search meals by name

Filter meals by category

View detailed meal information

2️⃣ Custom Meals (Local CRUD)

Add custom meals

Edit meals

Delete meals

Search, filter, and sort them

Stored in memory (no backend)

3️⃣ Dashboard

Intro page with clear navigation to API Meals & Custom Meals sections

4️⃣ Responsive Sidebar

Full sidebar on desktop

Auto-optimized layout on mobile devices

📖 How to Use the App

Open the Dashboard
You will see two main sections:

API Meals

Custom Meals

Browse API Meals

Click API Meals from the sidebar

Use the search bar to find meals by name

Use filters to refine your results

Click View Details to see full meal information

Manage Custom Meals

Click Custom Meals from the sidebar

Add a new meal using the Add Meal button

Edit existing meals

Delete meals

Use the search and filter tools to manage your list

Responsive Sidebar (Mobile)

On mobile screens, the sidebar becomes icon-only to maximize space

Navigation remains clear and accessible

Returning to Dashboard

Click Dashboard any time to return to the home overview

🧰 Tech Stack
Technology	Usage
Angular 17+ (Standalone Components)	UI framework
TypeScript	Application logic
Bootstrap 5	Styling & layouts
Angular Signals	Lightweight state management
Firebase Hosting	Deployment
TheMealDB API	External API
📦 Installation
1. Install dependencies
npm install

2. Run the development server
ng serve


Runs on:
👉 http://localhost:4200/

3. Build for production
ng build --configuration production

4. Deploy to Firebase (already deployed)
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

Custom meals stored locally in memory (no database)

Angular Signals chosen for reactive state handling

TheMealDB API is public and requires no authentication

Project follows a clean feature-based architecture

UI is fully responsive and user-friendly

🔗 Live Demo

Hosted on Firebase:
👉  https://meal-explorer--dashboard.web.app
