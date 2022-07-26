<template>
  <div>
    <button class="btn">{{ label }}</button>
  </div>
</template>

<script>
export default {
  name: "Badge",
  props: {
    label: {
      type: String,
      default:'badge'
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  color: red;
}
</style>