<template>
  <panel title="Access Denied">
    <p>Oops! Looks like you aren't signed in, please sign into your account in order to access this section of the site.</p>
    <img
      src="https://images.unsplash.com/photo-1523672557977-2c106afb2278?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80"
      alt="Access Denied"
    />
  </panel>
</template>

<script>
import Panel from "@/components/Panel";
export default {
  name: "AccessDenied",
  components: {
    Panel
  }
};
</script>
<style></style>
