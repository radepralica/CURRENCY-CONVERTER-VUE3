<template>
  <br /><br />
  <div class="container lastly">
    <slot name="footer"></slot>
  </div>
</template>

<style scoped>
.lastly {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  height:5em;
  display: flex;
  
}

</style>
