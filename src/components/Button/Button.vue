<template>
  <div>
    <button class="btn">{{ label }}</button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: {
      type: String,
      default: "button",
    },
    Name: {
      type: String,
    },
    primary: {
      type: Boolean,
    },
    size: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  color: red;
}
</style>