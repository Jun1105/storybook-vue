<template>
  <div>
    <button class="btn">{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: "click"
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  color: red;
}
</style>