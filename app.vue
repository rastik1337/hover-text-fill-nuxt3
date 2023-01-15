<script setup lang="ts">
  const links = [
    {
      text: 'about',
      to: '#',
    },
    {
      text: 'portfolio',
      to: '#',
    },
    {
      text: 'contact',
      to: '#',
    },
  ];
</script>
<template>
  <div
    class="flex h-screen flex-col items-center justify-center bg-gray-800 md:flex-row"
  >
    <LinkComponent
      v-for="link in links"
      :key="link.text"
      :text="link.text"
      :to="link.to"
    />
  </div>
</template>
