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
  background: deepskyblue;
  height: 3em;
  margin-top: 1em;
  padding: 1em;
  color: white;
  font-weight: bolder;
}
</style>
