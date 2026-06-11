<script setup>
import { ref } from 'vue'

defineProps({
  items: { type: Array, required: true }
})

const openIndex = ref(0)

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section id="perguntas-frequentes" class="support-faq" aria-labelledby="support-faq-heading">
    <div class="container">
      <div class="section-header">
        <h2 id="support-faq-heading">Perguntas frequentes</h2>
        <p>Respostas rápidas para as dúvidas mais comuns sobre o suporte CIAF.</p>
      </div>

      <div class="support-faq__list">
        <div v-for="(item, index) in items" :key="item.question" class="faq-item">
          <h3 class="faq-item__heading">
            <button
              class="faq-item__trigger"
              type="button"
              :aria-expanded="openIndex === index"
              :aria-controls="`faq-panel-${index}`"
              @click="toggle(index)"
            >
              <span>{{ item.question }}</span>
              <i
                class="mdi mdi-chevron-down faq-item__icon"
                :class="{ 'faq-item__icon--open': openIndex === index }"
                aria-hidden="true"
              />
            </button>
          </h3>
          <div
            v-show="openIndex === index"
            :id="`faq-panel-${index}`"
            class="faq-item__panel"
            role="region"
          >
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.support-faq {
  @include section-padding;

  &__list {
    max-width: 760px;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    gap: $space-2;
  }
}

.faq-item {
  border: 1px solid $color-gray-200;
  border-radius: $radius-md;
  overflow: hidden;

  &__heading {
    margin: 0;
  }

  &__trigger {
    @include flex-between;
    width: 100%;
    gap: $space-2;
    padding: $space-2 $space-3;
    text-align: left;
    font-size: $font-size-base;
    font-weight: 700;
    color: $color-navy;
    background-color: $color-white;
    transition: background-color $transition-fast;

    &:hover {
      background-color: $color-gray-100;
    }

    @include focus-ring;
  }

  &__icon {
    flex-shrink: 0;
    font-size: 22px;
    color: $color-gray-400;
    transition: transform $transition-base;

    &--open {
      transform: rotate(180deg);
      color: $color-red;
    }
  }

  &__panel {
    padding: 0 $space-3 $space-3;
    font-size: $font-size-sm;
    color: $color-gray-600;
    line-height: 1.7;

    p {
      margin: 0;
    }
  }
}
</style>
