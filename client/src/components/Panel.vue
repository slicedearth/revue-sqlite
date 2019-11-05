<template>
  <b-card class="text-center shadow-lg bg-light border-0 rounded-0">
    <h2 class="text-info m-o border-0 rounded-0">{{title}}</h2>
    <slot></slot>
  </b-card>
</template>

<script>
export default {
  name: "Panel",
  props: ["title"]
};
</script>

<style>
</style>