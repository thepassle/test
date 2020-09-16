import { LitElement, html } from 'lit-element';

export class LazyD extends LitElement {
  render() {
    return html`
      <h2>lazy-d</h2>
    `;
  }
}

customElements.define('lazy-d', LazyD);