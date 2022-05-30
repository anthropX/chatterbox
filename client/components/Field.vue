<template>
  <form class="form" @submit.prevent>
    <label :for="nanoid()">{{ label }}</label>
    <div class="form-content">
      <input
        :id="nanoid()"
        :value="value"
        type="text"
        @input="$emit('input', $event.target.value)"
      />
      <Button v-if="hasSubmit" class="join" @click="$emit('submit')"
        >Join</Button
      >
    </div>
  </form>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
  name: 'Field',
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    hasSubmit: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    nanoid() {
      return nanoid()
    },
  },
}
</script>

<style scoped lang="scss">
.form-content {
  display: flex;
  padding-top: 0.5rem;
}

input {
  flex-grow: 1;
  margin-right: 0.5rem;
  padding: 0.25rem 0.5rem;
  background: black;
  border: 1px #782c4b solid;
  border-radius: 0.5rem;
  outline: none;
}
</style>
