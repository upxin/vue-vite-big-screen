<script lang="ts" setup>
import Map from './Map/Map.vue'
import Pie from '@/components/CustomChart/CustomChart.vue'
const pieOpts = {
  type: 'pie',
  radius: ['40%', '70%'],
  label: {
    formatter: '{b}: {c}'
  }
}
</script>

<template>
  <section class="w-full h-full relative">
    <Map></Map>
    <section class="absolute bottom-20px">
      <section>
        <div class="bar-title text-center text-30px">今日行驶时长</div>
        <Pie class="bg-[#fff] bar1" :opts="pieOpts"></Pie>
      </section>
      <section>
        <div class="bar-title text-center text-100px">今日行驶时长111</div>
        <Pie class="bg-[#fff] bar1" :opts="pieOpts"></Pie>
      </section>
      <section>
        <div class="bar-title text-center">今日行驶时长</div>
        <Pie
          class="bg-[#fff] bar2"
          :opts="pieOpts"
          :data="[
            { value: 12, name: 'Search Engine' },
            { value: 22, name: 'Direct' },
            { value: 33, name: 'Email' },
            { value: 67, name: 'Union Ads' },
            { value: 55, name: 'Video Ads' }
          ]"
        ></Pie>
      </section>
    </section>
  </section>
</template>
<style scoped lang="scss">
.bar-title {
  color: rgba(51, 255, 255, 0.75);
  background-color: #051d3f;
}
</style>
