import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();

    this.emojis = [];
    this.banana = "🍌";
    this.newArr = [];

    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;

    this.emojis = this.addBananas()

    let main = document.getElementsByClassName('main')[0];
    let emo = document.getElementById('emojis');

    main.removeChild(emo);

    let a = document.createElement('p');
    a.textContent = this.emojis
  
    main.appendChild(a)
  }

  addBananas() {

    this.emojis.map(i => {
      this.newArr.push(i + this.banana)
    })

    this.newArr = this.newArr.slice(0, 3)

    return this.newArr;
  }
}