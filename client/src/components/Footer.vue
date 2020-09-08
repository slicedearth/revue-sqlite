<template>
  <footer class="position-fixed-bottom">
    <div class="col-md-12">
      <a href="https://www.facebook.com">
        <i class="fa fa-facebook" aria-hidden="true"></i>
      </a>
      <a href="https://www.twitter.com">
        <i class="fa fa-twitter" aria-hidden="true"></i>
      </a>
      <a href="https://www.instagram.com">
        <i class="fa fa-instagram" aria-hidden="true"></i>
      </a>
      <a href="https://www.github.com">
        <i class="fa fa-github" aria-hidden="true"></i>
      </a>
    </div>
    &copy;&nbsp;{{ new Date().getFullYear() }}&nbsp;slicedearth
  </footer>
</template>

<script>
export default {};
</script>

<style>
a i {
  color: white;
  padding: 1rem 0.25rem;
}
footer {
  background-color: #343a40;
  text-align: center;
  color: white;
}
</style>