<template>
  <div ref="bar"></div>
</template>
<script lang="ts" setup>
import { echarts } from '@/plugins/useEcharts'

const bar = ref()
let myChart = shallowRef()
interface Props {
  opts: any
  data: any[]
}

const props = withDefaults(defineProps<Props>(), {
  opts: () => {
    return {}
  },
  data: () => []
})

function initBar() {
  myChart.value?.setOption?.({
    series: [
      {
        ...props.opts,
        data: props.data
      }
    ]
  })
}

function updateBar({ data }) {
  myChart.value?.setOption?.({
    labelLayout: function (params) {
      const isLeft = params.labelRect.x < myChart.value?.getWidth?.() / 2
      const points = params.labelLinePoints
      points[2][0] = isLeft ? params.labelRect.x : params.labelRect.x + params.labelRect.width
      return {
        labelLinePoints: points
      }
    },
    series: [
      {
        data
      }
    ]
  })
}

watch(
  () => props.data,
  (v) => {
    updateBar({ data: v })
  },
  { deep: true, immediate: true }
)

onMounted(() => {
  myChart.value = echarts.init(bar.value)
  initBar()
})
</script>
