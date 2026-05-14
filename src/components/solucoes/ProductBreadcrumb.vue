<script setup>
defineProps({
  items: { type: Array, required: true }
  // [{ label: 'Início', to: '/' }, { label: 'CIAF Professional', to: '/solucoes/ciaf-professional' }, { label: 'CIAF Júnior' }]
})
</script>

<template>
  <nav class="breadcrumb" aria-label="Navegação estrutural">
    <div class="container breadcrumb__inner">
      <ol class="breadcrumb__list" role="list">
        <li
          v-for="(item, index) in items"
          :key="item.label"
          class="breadcrumb__item"
        >
          <RouterLink
            v-if="item.to"
            :to="item.to"
            class="breadcrumb__link"
          >
            {{ item.label }}
          </RouterLink>
          <span
            v-else
            class="breadcrumb__current"
            :aria-current="index === items.length - 1 ? 'page' : undefined"
          >
            {{ item.label }}
          </span>

          <i
            v-if="index < items.length - 1"
            class="mdi mdi-chevron-right breadcrumb__sep"
            aria-hidden="true"
          />
        </li>
      </ol>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.breadcrumb {
  background-color: $color-gray-100;
  border-bottom: 1px solid $color-gray-200;

  &__inner {
    padding-block: 12px;
  }

  &__list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 2px;
  }

  &__link {
    font-size: $font-size-sm;
    color: $color-navy-mid;
    text-decoration: none;
    transition: color $transition-fast;

    &:hover {
      color: $color-red;
      text-decoration: underline;
    }

    @include focus-ring;
  }

  &__current {
    font-size: $font-size-sm;
    color: $color-gray-600;
    font-weight: 500;
  }

  &__sep {
    font-size: 16px;
    color: $color-gray-400;
  }
}
</style>
