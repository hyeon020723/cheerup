<template>
  <cheerupHeader></cheerupHeader>
  <router-view></router-view>
  <cheerupFooter></cheerupFooter>
</template>

<script>
import cheerupHeader from "./layout/cheerupHeader.vue";
import cheerupFooter from "./layout/cheerupFooter.vue";

export default {
  // eslint-disable-next-line
  name: "App",
  components: {
    cheerupHeader,
    cheerupFooter,
  },
};
</script>

<style></style>
