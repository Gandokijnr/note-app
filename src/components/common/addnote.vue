<script setup>
import { ref } from 'vue';
import contenteditable from 'vue-contenteditable';
import { useNoteStore } from '@/stores/notestorage';
import { v4 as uuidv4 } from 'uuid';

const addNote = useNoteStore();

const title = ref('');
const content = ref('');

const AddNewNote = () => {
  const newid = uuidv4();

  if (title.value.length > 0) {
    addNote.AddNewNote({ id: newid, title: title.value, content: content.value, timestamp: new Date().toISOString(), pinned: false });
    title.value = '';
    content.value = '';
  }
};
</script>

<template>
  <div class="w-full h-full">
    <form @submit.prevent="AddNewNote" class="w-full h-full bg-amber-100 rounded">
      <input 
        type="text" 
        id="title" 
        v-model="title" 
        class="w-full lg:w-1/2 bg-amber-100 p-2 mb-5 rounded" 
        placeholder="What's the title of your note?" 
      />

      <contenteditable 
        tag="div"
        class="border min-w-full h-96 bg-amber-100 p-4"
        :contenteditable="true"
        :no-nl="false"
        :no-html="true"
        v-model="content"
      />

      <button 
        type="submit"
        class="bg-amber-800 text-white p-2 rounded px-6 m-4 flex gap-3"
      >
        Save Note
        <span class="material-symbols-outlined">
          save
        </span>
      </button>
    </form>
  </div>
</template>

<style scoped>
/* Custom styles if needed */
</style>
