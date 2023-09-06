<template>
  <div>
    <cheerupHeader />
    <router-view />
    <cheerupFooter />
  </div>
</template>

<script>
import cheerupHeader from "./components/cheerupHeader.vue";
import cheerupFooter from "./components/cheerupFooter.vue";

export default {
  name: "App",
  components: {
    cheerupHeader,
    cheerupFooter,
  },
  data() {
    return {
      isHeaderFixed: false,
    };
  },
};
</script>

<style scoped>
.cheerupHeader {
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9999;
}
</style>
