import { CellsPage } from '@cells/cells-page';
import { BbvaCoreIntlMixin } from '@bbva-web-components/bbva-core-intl-mixin';
import { html, css } from 'lit-element';

import '@cells-components/cells-template-paper-drawer-panel';
import '@meraki/evolution-ui/evolution-ui.js';


/* eslint-disable new-cap */
class EvolutionsPage extends BbvaCoreIntlMixin(CellsPage) {
  static get is() {
    return 'evolutions-page';
  }

  static get properties() {
    return {
      idNumber: { type: Number }
    };
  }

  constructor() {
    super();
    
  }

  connectedCallback() {
    super.connectedCallback && super.connectedCallback();
    this.subscribe('numeroId', (idNumber) => this.idNumber = idNumber);
  }

  onPageLeave() {
    this.idNumber = '';
  }

  render() {
    return html`
      <cells-template-paper-drawer-panel mode="seamed">
        <div slot="app__header">
          <bbva-header-main
            icon-left-primary="coronita:return-12"
            accessibility-text-icon-left-primary="Volver"
            image="https://1000marcas.net/wp-content/uploads/2020/01/Pok%C3%A9mon-emblema.jpg"
            @header-main-icon-left-primary-click=${() => window.history.back()}>
          </bbva-header-main>
        </div>
        <div slot="app__main" class="container">
        <evolution-ui
          id =${this.idNumber}
        ></evolution-ui>
        </div>
     </cells-template-paper-drawer-panel>`;
  }
  static get styles() {
    return css`
      bbva-header-main {
        --bbva-header-main-bg-color: #000000;
        
      }
      `;
  }
}

window.customElements.define(EvolutionsPage.is, EvolutionsPage);