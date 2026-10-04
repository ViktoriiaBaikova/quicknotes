<script setup>
import { ref } from 'vue'
import NoteForm from './components/NoteForm.vue'
import NoteCard from './components/NoteCard.vue'
import SearchBar from './components/SearchBar.vue'
import { useNotes } from './composables/useNotes.js'

const searchTerm = ref('')

const { addNote, deleteNote, filteredNotes } = useNotes()

const visibleNotes = filteredNotes(searchTerm)
</script>

<template>
  <main class="app">
    <h1>QuickNotes</h1>

    <div class="search-area">
      <SearchBar v-model="searchTerm" />
    </div>

    <div class="workspace">

      <section class="notes-panel">
        <h2>Notes</h2>

        <div class="notes">
          <NoteCard
            v-for="note in visibleNotes"
            :key="note.id"
            :note="note"
            @delete="deleteNote"
          />
        </div>
      </section>

      <section class="form-panel">
        <NoteForm @add="addNote" />
      </section>

    </div>
  </main>
</template>