<template>
  <section class="app-content">
    <div class="app-content__inner">
      <RouterView />
    </div>
  </section>
</template>

<style lang="scss">
.app-content {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  padding: 9rem 0 4rem;

  &__inner {
    width: 1000px;
    padding: 0 1rem;
    margin: 0 auto;
  }
}
</style>
