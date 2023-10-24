<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const chartContainer = ref(null)

onMounted(() => {
  const myChart = echarts.init(chartContainer.value)

  const option = {
    /* title: {
      text: 'BIP von 2008 bis 2020 ',
      textStyle: {
        color: '#88FCB0'
      }
    }, */
    /* tooltip: {
      trigger: 'none',
      axisPointer: {
        type: 'cross'
      }
    }, */
    tooltip: {
      trigger: 'axis'
    },
    legend: {},

    xAxis: [
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
        axisLine: {
          onZero: false,
          lineStyle: {}
        },

        data: [
          '1980',
          '1985',
          '1900',
          '1995',
          '2000',
          '2005',
          '2010',
          '2015',
          '2020'
        ]
      },
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
        axisLine: {
          onZero: false,
          lineStyle: {}
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Programmierer',
        type: 'line',
        smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: [35, 43, 53, 224, 1977, 910, 1017, 1056, 730]
      },
      {
        name: 'Entwickler',
        type: 'line',
        smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: [95, 119, 53, 297, 1529, 2279, 4150, 4400, 2722]
      },
      {
        name: 'Informatiker',
        type: 'line',
        smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: [7, 49, 80, 345, 3088, 1531, 1717, 1728, 1340]
      }
    ]
  }

  myChart.setOption(option)
})
</script>
<template>
  <div>
    <div
      ref="chartContainer"
      class="chartContainer"
      style="width: 100%; height: 350px"
    ></div>
  </div>
</template>
<style scoped></style>
