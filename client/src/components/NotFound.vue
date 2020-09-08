<template>
  <panel title="404 Not Found">
    <p>Oops, looks like this page doesn't exist or has been moved.</p>
    <img
      src="https://images.unsplash.com/photo-1500930540495-e92875696a16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1364&q=80"
      alt="NotFound"
    />
  </panel>
</template>

<script>
import Panel from "@/components/Panel";
export default {
  name: "NotFound",
  components: {
    Panel,
  },
};
</script>
<style></style>
