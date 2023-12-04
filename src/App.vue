<script setup lang="ts">
import { RouterView } from "vue-router";
import { formatDatetime } from "@/utils/common";
const a = formatDatetime(new Date());
console.log(a);
</script>

<template>
  <div></div>
  <RouterView />
</template>

<style scoped></style>
