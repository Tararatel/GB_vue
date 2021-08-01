<template>
  <div class="calc">
    <h1 class="title">{{ message }}</h1>

    <div>
      <input
        class="operand1"
        type="number"
        placeholder="Значение 1"
        v-model.number="operand1"
      />
      <input
      class="operand2"
        type="number"
        placeholder="Значение 2"
        v-model.number="operand2" 
      />
      = {{ result }} {{ error }}
      <div class="keyboard">
        <button
          class="operation"
          v-for="operation in operations"
          :key="operation"
          @click="calculate(operation)"
          :title="operation"
        >
          {{ operation }}
        </button>
      </div>

      <input type="checkbox" id="checkbox" v-model="checked">
      <label class="checkboxText" for="checkbox">{{ checkedText }}</label>

      <div class="numbers" v-show="checked">
        <button id="n0" @click="append('0')">0</button>
        <button id="n1" @click="append('1')">1</button>
        <button id="n2" @click="append('2')">2</button>
        <button id="n3" @click="append('3')">3</button>
        <button id="n4" @click="append('4')">4</button>
        <button id="n5" @click="append('5')">5</button>
        <button id="n6" @click="append('6')">6</button>
        <button id="n7" @click="append('7')">7</button>
        <button id="n8" @click="append('8')">8</button>
        <button id="n9" @click="append('9')">9</button>
        <button id="del" @click="del(0, -1)">del</button>
      </div>

      <input type="radio" id="one" value="op1" v-model="picked">
      <label for="one">Операнд 1</label>
      
      <input type="radio" id="two" value="op2" v-model="picked">
      <label for="two">Операнд 2</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data: () => ({
    message: "Calculator",
    operand1: '',
    operand2: '',
    result: '',
    checkedText: "Отобразить экранную клавиатуру",
    operations: ['+', '-', '*', '/', '**', '~~'],
    checked: false,
    picked: 'op1',
    error: ""
  }),
  methods: {
    calculate(operation = '+') {
      switch (operation) {
        case "+":
          this.sum();
          break;
        case "-":
          this.sub();
          break;
        case "*":
          this.mul();
          break;
        case "/":
          this.div();
          break;
        case "**":
          this.exp();
          break;
        case "~~":
          this.division();
          break;
      }
    },
    sum() {
      this.result = +this.operand1 + +this.operand2;
    },
    sub() {
      this.result = this.operand1 - this.operand2;
    },
    mul() {
      this.result = this.operand1 * this.operand2;
    },
    div() {
      if(this.operand2 == 0) {
        this.error = "На 0 делить нельзя";
      } else {
        this.result = this.operand1 / this.operand2;
      }      
    },
    exp() {
      this.result = this.operand1 ** this.operand2;
    },
    division() {
      if(this.operand2 == 0) {
        this.error = "На 0 делить нельзя";
      } else {
        this.result = ~~(this.operand1 / this.operand2);
      }      
    },
    append(number) {
      if(this.picked === 'op1') {
        this.operand1 += number;
      } else {
        this.operand2 += number;   
      }
    },
    del(start, end) {
      if(this.picked === 'op1') {
        this.operand1 = this.operand1.slice(start, end);
      } else {
        this.operand2 = this.operand2.slice(start, end);   
      }
      
    }
  }
};
</script>

<style>
  .operand1 {
    margin-right: 5px;
    margin-top: 10px;
  }
  .operation {
    margin-top: 10px;
    font-size: 18px;
    margin-bottom: 15px;
  }
  .operation.operation {
    margin-right: 10px;
  }
  .checkboxText {
    font-size: 16px;
  }
  .numbers {
    margin-top: 20px;
    font-size: 18px;
  }
  .numbers button {
    padding: 10px;
    margin-bottom: 10px;
  }
  #n0, #n1, #n2, #n3, #n4, #n5, #n6, #n7, #n8, #n9 {
    margin-right: 7px;
  }
  .title {
    font-size: 24px;
    color: grey;

  }
</style>>
