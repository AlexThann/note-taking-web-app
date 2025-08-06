# Flashcard App

This project is a flashcard and markdown note-taking web app created with **react, react-router and tailwindcss**. I have wanted to use a note app in order to keep notes about different subjects or themes, like either my computer engineering classes or for books that im reading. Thus, I came up with this project. Although i could very well use some already existing note-taking app, it's always way more enjoyable and fun to create your own since this is what programming is about.

---

## Features

- **Themes**

  - A user can create a new **theme** to save/create groups of **flashcard/notes**.
  - Each theme consists of a title, a description, a color marker (for styling) and the notes/flashcards.
  - User can delete a theme after being prompted.

- **Flashcards/Notes**

  - Each flashcard supports **Markdown formatting** (headings, lists, code blocks, images), which is implemented through [react-markdown](https://github.com/remarkjs/react-markdown).
  - Each flashcard can be deleted and edited for its corresponding theme.
  - When editing a flashcard the user can edit the title, the note background color and the note content (markdown). The user, while editing can also toggle between edit and preview to either edit the markdown or preview it.

- **Cheat Sheet**

  - Quick reference for supported Markdown syntax.
  - Accessible via a toggle button on the editor page.

- **Responsive UI**
  - Built with **React + Tailwind CSS** for mobile and desktop.
- **Supports Light/Dark theme**

The term **flashcard/note** is used interchangably because the goal of this app is to be used both as a note taking one but also as a flashcard application where a user can be tested on the cards. This is a **missing feature** which may be implemented later.

---

## App Showcase/Screenshots

User starts at the home page where he can create a new theme

### Home page shows the created themes:

![home page of all themes](/public/screenshots/theme_page.png)

### After a theme is choosen the flashcards are shown:

![flashcard page when clicking on a theme](/public/screenshots/flashcard_page.png)

### Note showcase when the user clicks on it:

![example note showcase](/public/screenshots/note_showcase.png)

### Editing a note:

![example of note editing](/public/screenshots/note_editing.png)

---

## Tech Stack

- **Frontend:** React, React Router, Tailwind CSS
- **State Management:** React Context API
- **Markdown Rendering:** React Markdown
- **Animations:** Framer Motion

---

## Installation

1. Clone the repository:

```
git clone https://github.com/AlexThann/note-taking-web-app.git
cd note-taking-web-app
```

2. Install dependencies:

```
npm install
```

3. Start dev:

```
npm run dev
```

---

## Features that could be added:

- Improve accesibility
- Test mode: quiz yourself on flashcards and compare answers.
