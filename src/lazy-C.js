import { LitElement, html } from 'lit-element';

export class LazyC extends LitElement {
  render() {
    return html`
      <h2>lazy-c</h2>
    `;
  }
}

customElements.define('lazy-c', LazyC);