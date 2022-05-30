<template>
  <button @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'CustomButton',
}
</script>

<style>
button {
  background: #782c4b;
  border: 1px black solid;
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
}
</style>
