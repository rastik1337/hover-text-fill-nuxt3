<script setup lang="ts">
const text = ref('hover animation');
</script>
<template>
  <div class="flex items-center justify-center h-screen bg-slate-600">
    <h1
      class="text-6xl uppercase relative text-gray-900 font-extrabold hover:cursor-pointer before:bg-green-500 before:bg-clip-text before:whitespace-nowrap before:text-transparent before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:w-0 before:duration-[3s] before:overflow-hidden hover:before:w-full"
      :data-text="text"
    >
      {{ text }}
    </h1>
  </div>
</template>
<style>
.bg-blue-500 {
  height: 100%;
}
</style>
