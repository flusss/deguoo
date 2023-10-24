<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const chartContainer = ref(null)

onMounted(() => {
  const myChart = echarts.init(chartContainer.value)
  const option = {
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      data: [
        '2008',
        '2009',
        '2010',
        '2011',
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020'
      ]
    },
    yAxis: {},
    series: [
      {
        name: 'Baden-Württemberg',
        type: 'bar',
        data: [
          365.06, 341.23, 361.75, 376.29, 500.417, 407.24, 407.24, 460.687,
          476.27, 493.27, 513.438, 524.325, 500.79
        ],
        itemStyle: {
          color: '#D35138'
        }
      },
      {
        name: 'Bayern',
        type: 'bar',
        data: [
          444.81, 423.84, 442.39, 446.44, 465.5, 487.99, 487.99, 549.19, 569.81,
          594.45, 616.674, 632.897, 610.22
        ],
        itemStyle: {
          color: '#DFD2A6'
        }
      },
      {
        name: 'Nordrhein-Westfalen',
        type: 'bar',
        data: [
          547.54, 522.92, 543.03, 568.86, 582.05, 599.75, 599.75, 645.59,
          668.91, 691.52, 694.839, 711.419, 697.13
        ],
        itemStyle: {
          color: '#65A194'
        }
      },
      {
        name: 'Österreich',
        type: 'line',
        data: [
          293.762, 288.044, 295.897, 310.129, 318.653, 323.91, 333.146, 344.269,
          357.608, 369.362, 385.274, 397.17, 381.042
        ],
        itemStyle: {
          color: '#FFC01D'
        }
      },
      {
        name: 'Schweiz',
        type: 'line',
        data: [
          387.521, 398.541, 452.242, 514.982, 534.222, 531.734, 546.572,
          625.398, 620.687, 616.745, 615.197, 644.432, 649.078
        ],
        itemStyle: {
          color: '#D0F578'
        }
      }
    ]
  }

  myChart.setOption(option)
})
</script>

<template>
  <div
    class="echartsone"
    style="width: 100%; height: 350px"
    ref="chartContainer"
  ></div>
</template>
<style></style>
