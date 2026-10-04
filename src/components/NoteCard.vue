<script setup lang="ts">
import BaseCard from './BaseCard.vue'
import type { Note } from '../types/note'

defineProps<{
  note: Note
}>()

const emit = defineEmits<{
  delete: [id: number]
}>()
</script>

<template>
  <BaseCard>
    <template #header>
      <strong class="note-title">
        {{ note.title }}
      </strong>
    </template>

    <div class="note-item"> 
      <div class="note-info">

 <p class="note-content">
      {{ note.content }}
    </p>

        <div class="note-tags">
          <span
            v-for="tag in note.tags"
            :key="tag"
            class="tag"
          >
            #{{ tag }}
          </span>
        </div>
      </div>

      <button
        class="delete-button"
        @click="emit('delete', note.id)"
        title="Delete note"
      >
        Delete
      </button>
    </div>
  </BaseCard>
</template>