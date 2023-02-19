class HelloWorld extends HTMLElement {
  constructor() {
    super()

    this.button = this.querySelector('button')
    this.output = this.querySelector('output')
    if (!this.button) return

    this.button.addEventListener('click', () => {
      this.output.innerHTML = String(++this.output.value)
    })
  }
}

customElements.define('hello-world', HelloWorld)
