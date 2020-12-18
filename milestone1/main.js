// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
// messaggi relativi al contatto attivo all’interno del pannello della conversazione
// ● Click sul contatto mostra la conversazione del contatto cliccato

let root = new Vue ({
  el: "#root",
  data: {
    testo: "",
    contacts: [
      {
        name: 'Michele',
        avatar: 'img/avatar_2.jpg',
        visible: true,
        messages: [
        {
        date: '10/01/2020 15:30:55',
        text: 'Hai portato a spasso il cane?',
        status: 'sent'
        },
        {
        date: '10/01/2020 15:50:00',
        text: 'Ricordati di dargli da mangiare',
        status: 'sent'
        },
        {
        date: '10/01/2020 16:15:22',
        text: 'Tutto fatto!',
        status: 'received'
        }
        ],
      },
      {
        name: 'Fabio',
        avatar: 'img/avatar_3.jpg',
        visible: true,
        messages: [
        {
        date: '20/03/2020 16:30:00',
        text: 'Ciao come stai?',
        status: 'sent'
        },
        {
        date: '20/03/2020 16:30:55',
        text: 'Bene grazie! Stasera ci vediamo?',
        status: 'received'
        },
        {
        date: '20/03/2020 16:35:00',
        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
        status: 'sent'
        }
        ],
      },
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
    },
    changeChat (index){
      this.contatoreChat = index;
    }
  }
})
