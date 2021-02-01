<template id="modal-template">
  <transition name="modal-fade">
    <div class="modal-backdrop" @click.self="closeModal(true)">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header"> </slot>
          <button
            type="button"
            class="btn-close"
            aria-label="Close modal"
            @click="closeModal(true)"
          >
            <i class="fas fa-times"></i>
          </button>
        </header>
        <section class="modal-body" id="modalDescription">
          <slot name="body"> </slot>
        </section>
        <footer class="modal-footer" v-if="showFooter">
          <slot name="footer">
            <button type="button" class="btn-green" aria-label="OK modal">
              OK !
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Modal',
  props: ['sFooter', 'sHeader'],
  data() {
    return {
      showFooter: this.sFooter ?? false,
      showHeader: this.sHeader ?? false
    };
  },
  methods: {
    closeModal(cancel = false) {
      if (cancel) {
        this.$emit('close', cancel);
      } else {
        this.$emit('ok');
      }
    }
  }
});
</script>
