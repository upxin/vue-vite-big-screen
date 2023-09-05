<template>
  <section class="flex flex-col w-screen h-screen">
    <NrzHeader></NrzHeader>
    <section class="flex-1">
      <router-view>
        <template #default="{ Component, route }">
          <keep-alive>
            <component :is="Component" :key="route.fullPath" />
          </keep-alive>
        </template>
      </router-view>
    </section>
    <Footer></Footer>
  </section>
</template>
<script lang="ts" setup>
import Footer from '@/components/pageFooter/PageFooter.vue'
import NrzHeader from '../NrzHeader/NrzHeader.vue'
</script>
