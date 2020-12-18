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
    avatar: [
      "img/avatar_1.jpg",
    ],
    contatoreChat: 0,
    chat: [
      "Test messaggio",
      "Test messaggio 2",
      "Test messaggio 3",
    ],
  },
  methods: {
    add(){
      this.chat.push(this.testo);
      this.testo = "";
    },
    // next() {
    //   this.contatoreChat ++;
    // },
    // prev() {
    //   this.contatoreChat --;
    // },
    changeChat (index){
      this.contatoreChat = index;
    }
  }
})
