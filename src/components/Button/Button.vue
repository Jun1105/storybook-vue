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
      default:'button'
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  color: red;
}
</style>