// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
// messaggi relativi al contatto attivo all’interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato

let root = new Vue ({
  el: "#root",
  data: {
    isActive: false,
    testo: {
      date: '10/01/2020 15:30:55',
      text: '',
      status: 'sent'
    },
    reply: {
      date: '10/01/2020 15:30:55',
      text: 'Ok',
      status: 'received'
      },
    contacts: [
      {
        name: 'Michele',
        avatar: 'img/avatar_1.jpg',
        visible: true,
        lastLogin: "15:30:55",
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
        userMessage: [
        ],
      },
      {
        name: 'Fabio',
        avatar: 'img/avatar_2.jpg',
        visible: true,
        lastLogin: "16:30:55",
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
        userMessage: [
        ],
      },
      {
        name: 'Samuele',
        avatar: 'img/avatar_3.jpg',
        visible: true,
        lastLogin: "17:30:55",
        messages: [
          {
          date: '28/03/2020 10:10:40',
          text: 'La Marianna va in campagna',
          status: 'received'
          },
          {
          date: '28/03/2020 10:20:10',
          text: 'Sicuro di non aver sbagliato chat?',
          status: 'sent'
          },
          {
          date: '28/03/2020 16:15:22',
          text: 'Ah scusa!',
          status: 'received'
          }
        ],
        userMessage: [
        ],
},
    ],
    contactActive: {
      name: "Michele",
      avatar: 'img/avatar_1.jpg',
      visible: true,
      lastLogin: "15:30:55",
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
      userMessage: [
      ],
    },
    seen: false,
  },
  methods: {
    add(){
      this.contactActive.messages.push(this.testo);
      this.testo = {
        date: '10/01/2020 15:30:55',
        text: '',
        status: 'sent'
      };
      setTimeout(() => this.contactActive.messages.push(this.reply), 1000);
    },
    changeChat(index){
      this.contactActive = this.contacts[index];
    },
    cancella(index){
      console.log(this.contactActive.messages[index]);
      this.contactActive.messages.splice(index, 1);
      this.seen = false;
    },
  }
})
