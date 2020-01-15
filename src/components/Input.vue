<template>
  <div>
    <input type="text" v-bind="$attrs" :value="$attrs.value" @input="handleInput">
  </div>
</template>

<script>
  export default {
    inheritAttrs: false,
    methods: {
      handleInput (e) {
        this.$emit("input", e.target.value)
      }
    }
  }
</script>

<style scoped lang="scss">
  div{
    font-size: 14px;
    box-shadow: 0 0 15px -1px red;
    display: flex;
  }
</style>
