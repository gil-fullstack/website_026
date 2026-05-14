<script setup>
const products = [
  {
    id: 1,
    name: 'CIAF Professional',
    icon: 'mdi-briefcase-outline',
    description: 'ERP completo para gestão empresarial integrada: financeiro, estoque, vendas e fiscal em um único sistema.',
    tag: 'Mais popular'
  },
  {
    id: 2,
    name: 'CIAF Emissor',
    icon: 'mdi-file-document-outline',
    description: 'Emissão ágil de NF-e, NFC-e e demais documentos fiscais com total conformidade tributária.',
    tag: null
  },
  {
    id: 3,
    name: 'CIAF Automotivo',
    icon: 'mdi-car-wrench',
    description: 'Gestão completa para oficinas mecânicas e lojas de autopeças: OS, estoque e controle de serviços.',
    tag: null
  },
  {
    id: 4,
    name: 'Petsystem',
    icon: 'mdi-paw',
    description: 'Sistema especializado para pet shops e clínicas veterinárias com agenda, prontuário e vendas.',
    tag: null
  },
  {
    id: 5,
    name: 'CIAF Essencial',
    icon: 'mdi-star-circle-outline',
    description: 'Versão enxuta e acessível para micro e pequenos negócios que precisam de controle sem complexidade.',
    tag: 'Para pequenos negócios'
  },
  {
    id: 6,
    name: 'CIAF Online Web',
    icon: 'mdi-web',
    description: 'Acesso 100% via browser, sem instalação. Gerencie sua empresa de qualquer lugar e dispositivo.',
    tag: 'Sem instalação'
  }
]
</script>

<template>
  <section id="solucoes" class="solutions" aria-labelledby="solutions-heading">
    <div class="container">
      <header class="section-header">
        <h2 id="solutions-heading">Nossas Soluções</h2>
        <p>Software desenvolvido para cada tipo de negócio, com suporte especializado incluído.</p>
      </header>

      <div class="solutions__grid" role="list">
        <article
          v-for="product in products"
          :key="product.id"
          class="solution-card"
          role="listitem"
        >
          <div class="solution-card__icon-wrap" aria-hidden="true">
            <i :class="['mdi', product.icon]" />
          </div>

          <div class="solution-card__body">
            <div class="solution-card__header">
              <h3 class="solution-card__name">{{ product.name }}</h3>
              <span v-if="product.tag" class="solution-card__tag">{{ product.tag }}</span>
            </div>
            <p class="solution-card__desc">{{ product.description }}</p>
          </div>

          <a href="#comprar" class="solution-card__cta" :aria-label="`Saiba mais sobre ${product.name}`">
            Saiba mais
            <i class="mdi mdi-arrow-right" aria-hidden="true" />
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.solutions {
  background-color: $color-white;
  @include section-padding;

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $space-3;

    @include respond-to('md') {
      grid-template-columns: repeat(2, 1fr);
    }

    @include respond-to('lg') {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

.solution-card {
  @include card-base;
  display: flex;
  flex-direction: column;
  gap: $space-2;
  padding: $space-4 $space-3;

  &__icon-wrap {
    @include flex-center;
    width: 60px;
    height: 60px;
    background-color: $color-navy-light;
    border-radius: $radius-md;
    flex-shrink: 0;

    .mdi {
      font-size: 30px;
      color: $color-navy;
    }
  }

  &__body {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: $space-1;
  }

  &__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: $space-1;
    flex-wrap: wrap;
  }

  &__name {
    font-size: $font-size-md;
    font-weight: 700;
    color: $color-navy;
    line-height: 1.3;
  }

  &__tag {
    display: inline-block;
    padding: 3px 10px;
    background-color: $color-red-light;
    color: $color-red;
    font-size: $font-size-xs;
    font-weight: 600;
    border-radius: $radius-full;
    white-space: nowrap;
    flex-shrink: 0;
  }

  &__desc {
    font-size: $font-size-sm;
    color: $color-gray-600;
    line-height: 1.6;
  }

  &__cta {
    @include flex-start;
    gap: 6px;
    font-size: $font-size-sm;
    font-weight: 600;
    color: $color-navy-mid;
    text-decoration: none;
    margin-top: auto;
    padding-top: $space-1;
    border-top: 1px solid $color-gray-200;
    transition: gap $transition-fast, color $transition-fast;

    .mdi {
      font-size: 16px;
      transition: transform $transition-fast;
    }

    &:hover {
      color: $color-red;
      gap: 10px;

      .mdi {
        transform: translateX(2px);
      }
    }

    @include focus-ring;
  }
}
</style>