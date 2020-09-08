<template>
  <div class="text-center shadow-lg bg-light border-0 rounded-0">
    <h1 class="text-prime m-0 border-0 rounded-0">{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Panel",
  props: ["title"],
};
</script>

<style>
.text-prime {
  letter-spacing: 0.08em;
}
/* .panel {
  margin-top: 4rem;
} */
</style>
