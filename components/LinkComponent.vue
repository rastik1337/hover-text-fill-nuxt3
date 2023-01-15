<script setup lang="ts">
  defineProps({
    text: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  });
</script>
<template>
  <NuxtLink
    class="md:fill-animation m-4 text-5xl font-extrabold uppercase text-black"
    :href="to"
    :data-text="text"
  >
    {{ text }}
  </NuxtLink>
</template>
<style>
  @tailwind components;
  @layer components {
    .fill-animation {
      @apply relative before:absolute before:top-0 before:left-0 before:w-0
       before:overflow-hidden before:whitespace-nowrap before:bg-gradient-to-r
      before:from-green-300 before:to-green-600 before:bg-clip-text before:text-transparent before:duration-[5s]
       before:content-[attr(data-text)] hover:before:w-full;
    }
  }
</style>
