import { computed } from 'vue'
import { useLocalStorage } from './useLocalStorage.js'

export function useNotes() {
  const notes = useLocalStorage('quicknotes', [])

  function addNote(note) {
  notes.value.push({
    ...note,
    id: Date.now()
  })
}

 function deleteNote(id) {
  notes.value = notes.value.filter(note => note.id !== id)
}

function filteredNotes(term) {
  return computed(() => {
    const search = term.value.toLowerCase().trim()

    if (!search) {
      return notes.value
    }

    return notes.value.filter(note =>
      note.title.toLowerCase().includes(search) ||
      note.content.toLowerCase().includes(search) ||
      note.tags.some(tag => tag.toLowerCase().includes(search))
    )
  })
}

  return { notes, addNote, deleteNote, filteredNotes }
}