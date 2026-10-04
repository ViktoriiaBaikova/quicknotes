# QuickNotes

QuickNotes is a simple note-taking application built with Vue 3.

The application allows users to:

- create new notes with a title, text content and multiple tags
- view all created notes in a structured list
- delete notes that are no longer needed
- search and filter notes in real time by title, text content or tags
- keep notes saved after reloading the page using `localStorage`

The interface is divided into reusable Vue components, while the note logic and data persistence are handled separately through composables.

## Setup

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal, for example:

```text
http://localhost:5173
```

## Project Structure

The application is divided into components and composables.

The components are responsible for the user interface:

- `NoteForm.vue` allows the user to enter a new note
- `NoteCard.vue` displays an individual note and allows it to be deleted
- `SearchBar.vue` provides the live search functionality
- `BaseCard.vue` provides a reusable card structure using slots

The application logic for adding, deleting and filtering notes is located in `useNotes.js`.

The logic for reading and saving notes in `localStorage` is located in `useLocalStorage.js`.

This separation keeps the user interface and the application logic independent from each other and makes the project easier to understand and maintain.

## Reflection Questions

### 1. Why should NoteCard not modify the note prop itself, and how is this solved instead?

`NoteCard` receives a note from its parent component through a prop.

Its responsibility is to display the note, not to directly change the application state. If child components modified their props directly, it would become more difficult to understand where changes in the application happen.

Instead, when the user clicks the Delete button, `NoteCard` emits a `delete` event together with the ID of the note.

`App.vue` receives this event and calls `deleteNote()`. The actual deletion logic is handled in `useNotes.js`.

This keeps the data flow clear: data is passed from parent to child through props, while actions are sent back to the parent through events.

### 2. What happens if two components call the same useNotes() composable? Do they share the notes?

No, they do not directly share the same reactive `notes` state.

Each call to `useNotes()` creates a new `notes` ref. Because both instances use the same `localStorage` key (`quicknotes`), they may initially load the same saved data.

However, if one component changes its `notes`, only its own reactive ref is updated. The new value is also written to `localStorage`, but the other component's `notes` ref is not automatically updated.

Therefore, the two components use the same persistent storage, but they do not share the same reactive state in memory.

In this application, `useNotes()` is called only once in `App.vue`, which keeps the note state and logic in one central place.

### 3. What is the purpose of the Note interface if the code could also run without it?

The `Note` interface defines the expected structure of a note.

Each note should contain:

```ts
id: number
title: string
content: string
tags: string[]
```

The interface does not create or store notes. It describes which properties a note should contain and which data types they should have.

TypeScript can use this definition to detect mistakes during development, for example if an `id` is accidentally provided as a string instead of a number.

The application could also run without the interface, but using it makes the code clearer and helps prevent type-related errors.