// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
// messaggi relativi al contatto attivo all’interno del pannello della conversazione
// ● Click sul contatto mostra la conversazione del contatto cliccato

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
    seen: false,
  },
  methods: {
    add(){
      this.lista.push(this.testo);
      this.testo = "";
    },
    showChat(){

    }
  }
})
