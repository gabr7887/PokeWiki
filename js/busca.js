export default class busca {
    btn;
    input;
    constructor(btn, input) {
        this.btn = document.querySelector(`#${btn}`);
        this.input = document.querySelector(`#${input}`);
        this.turnOn = this.turnOn.bind(this);
    }
    turnOn(event) {
        event.preventDefault();
        if (this.btn instanceof HTMLAnchorElement && this.input instanceof HTMLInputElement) {
            this.btn.classList.toggle("buscaOn");
            this.input.classList.toggle("buscaOn");
        }
    }
    onInit() {
        if (this.btn instanceof HTMLAnchorElement && this.input instanceof HTMLInputElement) {
            this.btn.addEventListener("click", this.turnOn);
        }
    }
}
//# sourceMappingURL=busca.js.map