import { defineStore } from "pinia";

export const useNoteStore = defineStore("notes", {
  state: () => ({
    notes: [],
    lastNoteId: null,
  }),
  getters: {
    pinnedNotes: state => state.notes.filter(note => note.pinned),
    nonPinnedNotes: state => state.notes.filter(note => !note.pinned)
  },
  actions: {
    // add new note
    AddNewNote( note ) {
      const newNote = [ note, ...this.notes ]
      this.notes = newNote; 
    },
    markAsPin(id) {
      const noteIndex = this.notes.findIndex(item => item.id === id);
      if (noteIndex !== -1) {
        this.notes[noteIndex].pinned = !this.notes[noteIndex].pinned;
        this.notes = [...this.notes];
      }
    },
    // deleting note
    deleteNote(id) {
      const noteIndex = this.notes.filter(item => item.id === id);
      if (noteIndex!== -1) {
        this.notes.splice(noteIndex, 1);
        this.notes = [...this.notes];
      }
    },
    // update note
    updateNote(id, updatedNote) {
      const noteIndex = this.notes.findIndex(item => item.id === id);
      if (noteIndex!== -1) {
        this.notes[noteIndex] = {...updatedNote };
        this.notes = [...this.notes];
      }
    },
    // generate unique id for new note
    generateUniqueId() {
      const id = Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
      return id;
    }
   
  }
});
