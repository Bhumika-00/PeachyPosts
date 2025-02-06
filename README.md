# 📝 CRUD Portal

## 📖 Description
This is a simple blog application built using Express.js. It allows users to create, read, update, and delete (CRUD) posts. The application uses EJS for templating and provides a basic user interface for managing posts.

## ✨ Features
- 📃 View all posts
- 📝 Create a new post
- 🔍 View a specific post
- ✏️ Edit a post
- ❌ Delete a post

## ⚙️ Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repository.git
   ```
2. Navigate to the project directory:
   ```sh
   cd your-project-directory
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## 🚀 Usage

1. Start the server:
   ```sh
   node app.js
   ```
   or if using nodemon:
   ```sh
   nodemon app.js
   ```
2. Open a browser and navigate to:
   ```
   http://localhost:8080/posts
   ```

## 🔗 Routes

| Method | Route            | Description                   |
|--------|-----------------|-------------------------------|
| GET    | /posts          | 📃 View all posts               |
| GET    | /posts/new      | 📝 Form to create a new post    |
| POST   | /posts         | ➕ Create a new post           |
| GET    | /posts/:id      | 🔍 View a specific post         |
| GET    | /posts/:id/edit | ✏️ Form to edit a post         |
| PATCH  | /posts/:id      | 🔄 Update an existing post      |
| DELETE | /posts/:id      | ❌ Delete a post               |

## 📦 Dependencies
- Express.js 🚀
- EJS 🎨
- Method-override 🔄
- UUID 🔑

## 📜 License
This project is open-source and available for personal and educational use.

