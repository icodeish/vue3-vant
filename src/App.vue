<template>
  <van-image :src="require('./assets/01.png')" />
  <div class="container">
    <FormSubmit />
  </div>

  <van-image :src="require('./assets/03.png')" />

  <div class="container1">
    <FormSubmit />
  </div>
  <van-image :src="require('./assets/05.png')" />

</template>

<script>
import FormSubmit from "./components/FormSubmit.vue";
export default {
  name: "App",
  components: {
    FormSubmit,
  },
};
</script>
 
<style>
body{
  height: 100vh;
  background:red;
}
* {
  margin: 0;
  padding: 0;
  border:0;
}
input{
  -webkit-appearance: none;
}
.van-image {
  width: 100%;
  height: 100%;
  display: block;
}
.container {
  width: 100vw;
  height: 92vw;
  background-image: url(./assets/02.png);
  background-size: contain;
}
.container input {
  margin-top: 8.5333vw;
}
.container1 {
  width: 100vw;
  height: 96vw;
  background-image: url(./assets/04.png);
  background-size: contain;
  position: relative;
}
.container1 .form {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
