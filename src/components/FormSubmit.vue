<template>
  <div class="form">
  <input  v-model="keyword" placeholder="请输入期货品种名称..." type="text" name="" id="" />
    <button @click="check()">立即诊断</button>
  </div>
</template>
<style>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;

}
.form input {
  width: 74.6667vw;
  height: 13.3333vw;
  border-top-left-radius: 4vw;
  border: 0.5333vw solid #f8e4c9;
  box-sizing: border-box;
  padding-left: 3.3333vw;
  font-size: 5.3333vw;
  color: #999;
}
.form button {
  width: 74.6667vw;
  height: 12.1333vw;
  background: linear-gradient(0deg, #fff600, #e8b71f);
  border-radius: 6.1333vw;
  border: none;
  font-size: 8.6667vw;
  font-family: SourceHanSansSC;
  font-weight: bold;
  color: #f5342b;
  line-height: 9.6vw;
  margin-top: 4.6667vw;
}
</style>

<script setup>
import { ref} from 'vue'
import { Toast } from 'vant';
const keyword=ref('')
function check(){
  Toast('a')
  console.log(keyword.value)
}
</script>