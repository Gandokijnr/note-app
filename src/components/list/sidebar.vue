<script setup>
import { defineProps, defineEmits } from 'vue';
import { useNoteStore } from '@/stores/notestorage';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  notes: {
    type: Array,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'list',
  }
});

const emit = defineEmits(['update-notes']);

const noteStore = useNoteStore();

const pinnednote = (note) => {
  emit('update-notes', note.id);
}
</script>

<template>
  <div class="sidebar p-2 bg-amber-800 text-white text-center h-auto lg:min-h-52" v-show="type === 'list'">
    <div class="flex items-center gap-2 justify-center mb-5 font-bold mt-10">
      <span class="material-symbols-outlined">{{ icon }}</span>
      <span>{{ title }}</span>
    </div>
    <hr class="text-white mb-5" />
    <div class="sidebar-nav flex items-center justify-center">
      <ul class="flex flex-col gap-2">
        <li v-for="note in notes" :key="note.id" class="flex gap-8 relative group">
          <button>{{ note.title }}</button>
          <span v-if="!note.pinned" class="material-symbols-outlined absolute w-52 hidden group-hover:block cursor-pointer" @click="pinnednote(note)">push_pin</span>
          <span v-else class="material-symbols-outlined absolute w-52 hidden group-hover:block cursor-pointer" @click="pinnednote(note)">keep_off</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* You can add any custom styles here if needed */
</style>
