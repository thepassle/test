import { LitElement, html } from 'lit-element';

export class LazyA extends LitElement {
  render() {
    return html`
      <h2>lazy-a</h2>
    `;
  }
}

customElements.define('lazy-a', LazyA);