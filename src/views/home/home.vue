<script setup lang="ts" name="Home">
import commonAPI from "@api/common";
commonAPI
  .test()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
</script>

<template>
  <div>home</div>
</template>

<style scoped></style>
