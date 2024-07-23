<script setup>
import { ref, defineEmits } from 'vue';
import { useNoteStore } from '@/stores/notestorage';

const notesStore = useNoteStore();  // Use the store instance

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Define emits
const emit = defineEmits(['delete-notes']);

// Deleting note
const deleteNote = (id) => {
  notesStore.deleteNote(id);  // Call the store action to delete the note
  emit('delete-notes', notesStore.notes);  // Emit the deleted notes array
  console.log('delete-notes', notesStore.notes);
}
</script>


<template>
  <header class="bg-amber-800 text-white p-4">
    <div class="container mx-auto flex justify-between items-center flex-wrap gap-3">
      <div class="flex justify-between w-full md:w-auto">
        <div class="text-xl font-bold">Notify</div>
        <button @click="toggleMenu" class="text-gray-500 md:hidden">
          <span class="material-symbols-outlined text-white">menu</span>
        </button>
      </div>
      <div :class="{'hidden': !isMenuOpen, 'block': isMenuOpen}" class="w-full md:w-auto md:flex md:items-center md:gap-4">
        <div class="flex justify-between w-full md:w-auto md:flex md:gap-4">
          <span class="material-symbols-outlined cursor-pointer">edit_note</span>
          <span class="material-symbols-outlined cursor-pointer" @click="deleteNote(id)">delete</span>
        </div>
        <div class="flex justify-between w-full mt-4 md:mt-0 md:w-auto md:flex md:gap-4">
          <span class="material-symbols-outlined cursor-pointer">search</span>
          <span class="material-symbols-outlined cursor-pointer">grid_view</span>
        </div>
      </div>
    </div>
  </header>
</template>
