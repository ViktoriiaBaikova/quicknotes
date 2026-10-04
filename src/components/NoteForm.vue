<script setup lang="ts">
import { ref } from 'vue'

const title = ref('')
const content = ref('')
const tags = ref('')

const emit = defineEmits(['add'])

function submitNote() {
  if (!title.value.trim() || !content.value.trim()) return

  emit('add', {
    title: title.value,
    content: content.value,
    tags: tags.value
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag)
  })

  title.value = ''
  content.value = ''
  tags.value = ''
}
</script>

<template>
  <form @submit.prevent="submitNote">
    <input
      v-model="title"
      placeholder="Title"
    >

    <textarea
      v-model="content"
      placeholder="Note"
    ></textarea>

    <input
      v-model="tags"
      placeholder="Tags (comma separated)"
    >

    <button type="submit">Add Note</button>
  </form>
</template>