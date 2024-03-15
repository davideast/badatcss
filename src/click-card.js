customElements.define("click-card", class extends HTMLElement {
  connectedCallback() {
    let startTime, endTime;
    this.style.cursor = "pointer";
    const link = this.querySelector("a");
    this.onmousedown = () => (startTime = +new Date());
    this.onmouseup = () => {
      endTime = +new Date();
      if (endTime - startTime < 200 && !this.contains(document.activeElement)) link.click();
    };
  }
});
