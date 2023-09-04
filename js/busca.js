export default class busca {
    btn;
    input;
    constructor(btn, input) {
        this.btn = document.querySelector(`#${btn}`);
        this.input = document.querySelector(`#${input}`);
    }
    turnOn(event) {
        event.preventDefault();
        if (this.btn instanceof HTMLAnchorElement && this.input instanceof HTMLInputElement) {
            this.btn.style.display = "none";
            this.input.style.display = "block";
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
//# sourceMappingURL=busca.js.map