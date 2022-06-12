<template>
  <div class="container-sm">
    <h1>
      <slot></slot>
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
h1 {
  height: 3em;
  margin: auto;
  padding: 1em;
  color: white;
  font-weight: bolder;
  width: auto;
}
div {
  width: 95%;
  background: deepskyblue;
  height: auto;
  justify-content: center;
  display: flex;
}
</style>
