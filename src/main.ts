import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { dom } from '@fortawesome/fontawesome-svg-core';

/* Auto Import Shared Components */
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

const requireComponent = require.context(
  // O caminho relativo da pasta de componentes
  './components/shared',
  // Se deve ou não olhar subpastas
  false,
  // Expressão regular para localizar nomes de componentes base
  /\w+\.(vue|js|ts)$/
);

requireComponent.keys().forEach((fileName: string) => {
  // Pega a configuração do componente
  const componentConfig = requireComponent(fileName);

  // Obtém nome em PascalCase do componente
  const componentName = upperFirst(
    camelCase(
      // Obtém o nome do arquivo, independentemente da profundidade da pasta
      fileName
        .split('/')
        .pop()
        ?.replace(/\.\w+$/, '')
    )
  );

  // Registra o componente globalmente
  Vue.component(
    componentName,
    // Olha para as opções em `.default`, existentes
    // se o componente foi exportado com `export default`,
    // caso contrário usa o módulo raiz.
    componentConfig.default || componentConfig
  );
});
/* Auto Import Shared Components */

import AuthInterceptor from '@/api/auth.interceptor';

dom.watch();

library.add(faSearch);

AuthInterceptor();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
