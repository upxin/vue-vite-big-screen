<template>
  <div class="flex max-w-800px">
    <div class="w-160px bg-second p-20px -my-5px">
      <div @click="test" class="font-bold py-20px text-16px">{{ props.title }}</div>
      <div class="opacity-60 font-light">{{ props.intro }}</div>
    </div>

    <div class="flex p-20px flex-wrap flex-1">
      <div
        class="p-10px"
        v-for="(item, index) in list"
        :index="parentIndex + '-' + index"
        :key="item.label"
      >
        <div
          class="p-10px w-120px hover:bg-[#ddd]"
          :class="{
            'bg-header-ac': routePath === item.router,
            'bg-second': routePath !== item.router
          }"
        >
          <div class="text-14px pb-4px">{{ item.name }}{{ item.router }}</div>
          <div class="text-12px font-light">{{ item.intro }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string
  intro: string
  parentIndex: number
  list: any[]
}
const props = withDefaults(defineProps<Props>(), {
  title: '',
  intro: '',
  parentIndex: 0,
  list: () => []
})
const route = useRoute()
const routePath = computed(() => route.path)
console.log('path====', routePath.value)
const test = () => {
  var i = 0
  console.log(i)
  if (i < 0) {
    console.log(i)
  }
}
</script>
