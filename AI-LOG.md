# AI-LOG

- Prompt: "How can I structure the QuickNotes app with Vue components and composables?"
  Übernommen: Aufteilung in `NoteForm.vue`, `NoteCard.vue`, `SearchBar.vue`, `BaseCard.vue`, `useNotes.js` und `useLocalStorage.js`.
  Geändert/verstanden: Ich habe verstanden, dass die Komponenten für die Benutzeroberfläche zuständig sind und die Logik in den Composables liegt.

- Prompt: "How can I create a note form with title, content and tags?"
  Übernommen: `v-model` für `title`, `content` und `tags` sowie die `submitNote()`-Funktion.
  Geändert/verstanden: Ich habe verstanden, dass `v-model` die Eingabefelder mit den `ref`-Variablen verbindet und dass `submitNote()` die eingegebenen Werte verarbeitet.

- Prompt: "How can I send a new note from NoteForm to App.vue?"
  Übernommen: `emit('add', ...)` in `NoteForm.vue` und `@add="addNote"` in `App.vue`.
  Geändert/verstanden: Ich habe verstanden, dass ein Child-Component ein Event an den Parent sendet und `App.vue` danach `addNote()` aufruft.

- Prompt: "How can I use BaseCard with a named slot in NoteCard?"
  Übernommen: `#header` für `note.title` und den Default-Slot für den restlichen Inhalt.
  Geändert/verstanden: Ich habe verstanden, dass `BaseCard` nur die allgemeine Kartenstruktur bereitstellt und `NoteCard` den konkreten Inhalt einsetzt.

- Prompt: "How can I delete a note from NoteCard?"
  Übernommen: `emit('delete', note.id)` in `NoteCard.vue` und `@delete="deleteNote"` in `App.vue`.
  Geändert/verstanden: Ich habe verstanden, dass `NoteCard` die Notiz nicht direkt löscht, sondern die ID an `App.vue` sendet und die Löschlogik in `useNotes.js` ausgeführt wird.

- Prompt: "How can I search notes by title, content and tags?"
  Übernommen: `searchTerm`, `filteredNotes(searchTerm)` und die Filterlogik in `useNotes.js`.
  Geändert/verstanden: Ich habe verstanden, dass `SearchBar` über `v-model` mit `searchTerm` verbunden ist und nur passende Notizen in `visibleNotes` angezeigt werden.

- Prompt: "How can I save notes after reloading the page?"
  Übernommen: `useLocalStorage.js` mit `localStorage` und `watch`.
  Geändert/verstanden: Ich habe verstanden, dass die Notizen beim Start aus `localStorage` geladen und bei Änderungen automatisch wieder gespeichert werden.

- Prompt: "How can I improve the visual design of QuickNotes without adding new features?"
  Übernommen: Vorschläge für das Layout, das Suchfeld, die Tags, die Delete-Schaltfläche und das Styling.
  Geändert/verstanden: Ich habe nur das Design angepasst und den Funktionsumfang der Aufgabenstellung nicht erweitert.