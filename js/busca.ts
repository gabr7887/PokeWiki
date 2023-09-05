export default class busca {
  btn: Element | null;
  input: Element | null ;
  constructor(btn: string, input: string) {
    this.btn = document.querySelector(`#${btn}`);
    this.input = document.querySelector(`#${input}`);
    
    this.turnOn = this.turnOn.bind(this);
  }


  turnOn(event: MouseEvent) {
    event.preventDefault();
    if (this.btn instanceof HTMLAnchorElement && this.input instanceof HTMLInputElement) {
      this.btn.classList.toggle("buscaOn");
      this.input.classList.toggle("buscaOn");
    }
  }

  onChanges() {

  }

  onInit() {
    if (this.btn instanceof HTMLAnchorElement && this.input instanceof HTMLInputElement) {
      this.btn.addEventListener("click", this.turnOn);
    }
  }
}