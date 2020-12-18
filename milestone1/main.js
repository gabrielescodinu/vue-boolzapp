// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
// dall’interlocutore (bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for,
// visualizzare nome e immagine di ogni contatto

let root = new Vue ({
  el: "#root",
  data: {
    testo: "",
    users: [
      "Michele",
      "Fabio",
      "Samuele",
      "Lusia",
    ],
    lista: [
      "Test messaggio",
      "Test messaggio",
    ],
  },
  methods: {
    add(){
      this.lista.push(this.testo);
      this.testo = "";
    }
  }
})
