import { CellsPage } from '@cells/cells-page';
import { BbvaCoreIntlMixin } from '@bbva-web-components/bbva-core-intl-mixin';
import { html,css } from 'lit-element';

import '@cells-components/cells-template-paper-drawer-panel';
import '@bbva-web-components/bbva-header-main';
import '@meraki/pokemon-ui/pokemon-ui.js';

/* eslint-disable new-cap */
class PokemonPage extends BbvaCoreIntlMixin(CellsPage) {
  static get is() {
    return 'pokemon-page';
  }

  static get properties() {
    return {
      title: { type: String }
    };
  }

  constructor() {
    super();
    this.title = 'holamundo';
  }

  render() {
    return html`
      <cells-template-paper-drawer-panel mode="seamed">
        <div slot="app__header">
          <bbva-header-main
            image="https://1000marcas.net/wp-content/uploads/2020/01/Pok%C3%A9mon-emblema.jpg"
          </bbva-header-main>
        </div>

        <div slot="app__main" class="container">
        <bbva-button-default 
              text="Details" 
              @click="${() => this.navigate('evolutions')}">
            </bbva-button-default>
          <pokemon-ui
          @numero-click ="${this._onEvolutions}";
          ></pokemon-ui>
        </div>
     </cells-template-paper-drawer-panel>`;
  }

  _onEvolutions(ev) {
    const numero  = ev.detail;
    this.publish('numeroId', numero);
    this.navigate('evolutions');
  }

  static get styles() {
    return css`
      bbva-header-main {
        --bbva-header-main-bg-color: #000000;
      }
      .container {
        background-color: black;
      }
      `;
  }
}

window.customElements.define(PokemonPage.is, PokemonPage);