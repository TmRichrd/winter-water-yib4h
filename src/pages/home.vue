<template>
  <div>
    <router-view />
    <Navbar />
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
export default {
  components: {
    Navbar,
  },
  data() {
    return {};
  },
  methods: {
    handleJump() {
      console.log(222);
      this.$router.push("about");
    },
  },
};
</script>

<style>
</style>