'use strict';

const { createApp } = Vue;

const myApp = createApp({
    data() {
        return {
            newTodo: '', // Input per i nuovi To-Do
            todos: [ // Array di oggetti To-Do 
                {
                    text: 'Cosa da fare 1',
                    done: false,
                },
                {
                    text: 'Cosa da fare 2',
                    done: true,
                },
                {
                    text: 'Cosa da fare 3',
                    done: false,
                },
                {
                    text: 'Cosa da fare 4',
                    done: true,
                },
            ]
        };
    },
    methods: {
        // Cambia lo stato di un To-Do
        toggleDone(index) {
            this.todos[index].done = !this.todos[index].done;
        },
        // Cancella un To-Do
        delTodo(index) {
            this.todos.splice(index, 1);
        },
        // Aggiunge un nuovo To-Do
        addTodo() {
            // Verifica se il nuovo To-Do non è vuoto
            if (this.newTodo.trim() !== '') {
                this.todos.push(
                    {
                        text: this.newTodo,
                        done: false,
                    }
                );
            }
            // Svuota il campo di input
            this.newTodo = '';
        },
    },
}).mount('#app');