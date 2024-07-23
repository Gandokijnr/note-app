<script setup>
import Sidebar from '@/components/list/sidebar.vue';
import Addnote from '@/components/common/addnote.vue';
import { useNoteStore } from '@/stores/notestorage';
import { computed } from 'vue';

const noteStore = useNoteStore();

const updateNotes = (id) => {
  noteStore.markAsPin(id);
};

const deleteNote = (id) => {
  noteStore.deleteNote(id);
};

const hasPinnedNote = computed(() => {
  return noteStore.pinnedNotes.length > 0;
});
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-4">
    <div class="lg:order-none order-2 lg:col-span-1">
      <Sidebar 
        :notes="noteStore.nonPinnedNotes"
        :title="`All notes`"
        :icon="`filter_list`"
        :type="`list`"
        @update-notes="updateNotes"
        @delete-notes="deleteNote"
      />
      <Sidebar 
        v-if="hasPinnedNote"
        :notes="noteStore.pinnedNotes"
        :title="`Pinned notes`"
        :icon="`push_pin`"
        :type="`list`"
        @update-notes="updateNotes"
        @delete-notes="deleteNote"
      />
    </div>
    <div class="lg:order-none order-1 lg:col-span-3 p-4">
      <Addnote />
    </div>
  </div>
</template>

<style scoped>
/* Custom styles if needed */
</style>
