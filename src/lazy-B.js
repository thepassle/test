import { LitElement, html } from 'lit-element';

export class LazyB extends LitElement {
  render() {
    return html`
      <h2>lazy-b</h2>
    `;
  }
}

customElements.define('lazy-b', LazyB);