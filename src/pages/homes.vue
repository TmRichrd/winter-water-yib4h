<template>
  <div>{{ $t("login.title") }}</div>
</template>

<script>
import { getLogin } from "@/api/login";
import { log } from "util";
export default {
  data() {
    return {};
  },
  mounted() {
    this.fetchLogin();
  },
  methods: {
    fetchLogin() {
      getLogin().then((res) => {
        console.log(res, "res");
      });
    },
  },
};
</script>

<style>
</style>