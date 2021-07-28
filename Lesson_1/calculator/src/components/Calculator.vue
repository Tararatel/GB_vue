<template>
  <div class="calc">
    {{ message }}

    <div>
      <input
        type="number"
        placeholder="Operand1"
        v-on:focus="onFocus"
        v-model.number="operand1"
      />
      <input
        type="number"
        placeholder="Operand2"
        @keyup="onKeyUp"
        v-model.number="operand2"
      />
      = {{ result }}
      <div class="keyboard">
      <button @click="result = operand1 + operand2">+</button>
      <button @click="result = operand1 - operand2">-</button>
      <button @click="result = operand1 * operand2">*</button>
      <button @click="result = operand1 / operand2">/</button>
      <button @click="result = operand1 ** operand2">^</button>
      <button v-on:click="division(operand1, operand2)">Целочисленное деление</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data: () => ({
    message: "Calculator",
    operand1: 0,
    operand2: 0,
    result: 0,
    array: []
  }),
  methods: {
    division(op1, op2) {
      this.result = ~~(op1/op2)
    }
  }
};
</script>