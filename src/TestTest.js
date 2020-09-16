import { LitElement, html, css } from 'lit-element';
import { openWcLogo } from './open-wc-logo.js';

export class TestTest extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
      showA: { type: Boolean },
      showB: { type: Boolean },
      showC: { type: Boolean },
      showD: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.showA = false;
    this.showB = false;
    this.showC = false;
    this.showD = false;
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
      }

      main {
        flex-grow: 1;
      }

      .logo > svg {
        margin-top: 36px;
        animation: app-logo-spin infinite 20s linear;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }
    `;
  }

  async lazyA() {
    await import('./lazy-A');
    this.showA = true;
  }

  async lazyB() {
    await import('./lazy-B');
    this.showB = true;
  }

  async lazyC() {
    await import('./lazy-C');
    this.showC = true;
  }

  async lazyD() {
    await import('./lazy-D');
    this.showD = true;
  }

  render() {
    return html`
      <main>
        <div class="logo">${openWcLogo}</div>
        <h1>My app</h1>

        <button @click=${() => this.lazyA()}>lazy A</button>
        <button @click=${() => this.lazyB()}>lazy B</button>
        <button @click=${() => this.lazyC()}>lazy C</button>
        <button @click=${() => this.lazyD()}>lazy D</button>
        <br/>
        ${this.showA && html`<lazy-a></lazy-a>`}
        ${this.showB && html`<lazy-b></lazy-b>`}
        ${this.showC && html`<lazy-c></lazy-c>`}
        ${this.showD && html`<lazy-d></lazy-d>`}

        <p>Edit <code>src/TestTest.js</code> and save to reload.</p>
        <a
          class="app-link"
          href="https://open-wc.org/developing/#code-examples"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}
