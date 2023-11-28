# Vue To Do List

Questo programma rappresenta un'applicazione web per la gestione di una lista di cose da fare utilizzando Vue.js come framework JavaScript. Il programma consente agli utenti di aggiungere nuovi To-Do, contrassegnarli come completati/non completati, ed eliminare quelli che non sono più necessari. Vue.js facilita la gestione dello stato e l'aggiornamento dinamico dell'interfaccia utente in risposta alle interazioni dell'utente.

1. **Struttura HTML:**
   - Il documento HTML definisce la struttura della pagina web.
   - Carica Bootstrap 5 per lo stile e FontAwesome per le icone.
   - Contiene un elemento con l'id "app" che sarà gestito da Vue.js.
   - Carica la libreria Vue.js tramite CDN.
   - Carica uno script personalizzato (`main.js`) che contiene la logica Vue per gestire l'applicazione.

2. **Struttura Vue.js:**
   - Crea un'applicazione Vue.
   - Definisce il dato `newTodo` per memorizzare il testo del nuovo To-Do inserito dall'utente.
   - Definisce l'array `todos` contenente oggetti To-Do con testo e stato di completamento (done).
   
3. **Metodi Vue.js:**
   - `toggleDone(index)`: Cambia lo stato di completamento di un To-Do quando viene cliccato.
   - `delTodo(index)`: Cancella un To-Do dalla lista quando viene cliccato.
   - `addTodo()`: Verifica che il nuovo To-Do non sia vuoto prima di aggiungerlo ed eventualmente aggiunge un nuovo To-Do alla lista quando viene cliccato il pulsante "Aggiungi" o quando viene premuto il testo "invio" nell'input di testo.

4. **Interazione con l'HTML:**
   - I dati Vue (`newTodo` e `todos`) sono legati agli elementi HTML attraverso le direttive `v-model` e le espressioni Vue.
   - Gli eventi HTML, come il click e il keyup.enter, sono collegati ai metodi Vue per eseguire le operazioni definite.

5. **Rendering dinamico con Vue:**
   - La lista dei To-Do viene inserita in pagina dinamicamente attraverso la direttiva `v-for`, che itera sugli elementi dell'array `todos`.
   - Gli elementi possono essere contrassegnati come completati con uno stile barrato.
   - Viene visualizzato un messaggio informativo se la lista è vuota.