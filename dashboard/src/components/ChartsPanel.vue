<template>
  <div class="charts-container">
    <div class="chart-item" ref="lineChart"></div>
    <div class="chart-item" ref="barChart"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'

const lineChart = ref(null)
const barChart = ref(null)
let lineInstance = null
let barInstance = null
let updateInterval = null

// 折线图配置
const initLineChart = () => {
  const option = {
    backgroundColor: 'transparent',
    title: {
      text: '实时运行趋势',
      textStyle: {
        color: '#fff'
      }
    },
    xAxis: {
      type: 'category',
      data: new Array(24).fill(0).map((_,i) => `${i}:00`),
      axisLabel: { color: '#7d8fb3' }
    },
    yAxis: {
      type: 'value',
      axisLabel: { color: '#7d8fb3' }
    },
    series: [{
      data: generateRandomData(24),
      type: 'line',
      smooth: true,
      lineStyle: {
        color: '#2d8cf0',
        width: 3
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(45,140,240,0.6)' },
          { offset: 1, color: 'rgba(45,140,240,0.1)' }
        ])
      }
    }]
  }
  lineInstance.setOption(option)
}

// 柱状图配置
const initBarChart = () => {
  const option = {
    backgroundColor: 'transparent',
    title: {
      text: '设备运行统计',
      textStyle: {
        color: '#fff'
      }
    },
    xAxis: {
      type: 'category',
      data: ['设备A', '设备B', '设备C', '设备D'],
      axisLabel: { color: '#7d8fb3' }
    },
    yAxis: {
      type: 'value',
      axisLabel: { color: '#7d8fb3' }
    },
    series: [{
      data: generateRandomData(4),
      type: 'bar',
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#2d8cf0' },
          { offset: 1, color: '#1a2b5b' }
        ])
      }
    }]
  }
  barInstance.setOption(option)
}

const generateRandomData = (length) => {
  return Array.from({length}, () => Math.floor(Math.random() * 1000))
}

onMounted(() => {
  lineInstance = echarts.init(lineChart.value)
  barInstance = echarts.init(barChart.value)
  initLineChart()
  initBarChart()
  
  updateInterval = setInterval(() => {
    lineInstance.setOption({
      series: [{ data: generateRandomData(24) }]
    })
    barInstance.setOption({
      series: [{ data: generateRandomData(4) }]
    })
  }, 3000)

  window.addEventListener('resize', () => {
    lineInstance.resize()
    barInstance.resize()
  })
})

onBeforeUnmount(() => {
  clearInterval(updateInterval)
  lineInstance.dispose()
  barInstance.dispose()
  window.removeEventListener('resize', () => {
    lineInstance.resize()
    barInstance.resize()
  })
})
</script>

<style scoped>
.charts-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  height: 100%;
}

.chart-item {
  height: 400px;
  background: rgba(16, 33, 71, 0.6);
  border-radius: 8px;
  padding: 15px;
}
</style>
