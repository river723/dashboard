<template>
  <div class="data-visualization">
    <div class="chart-container">
      <div class="chart-item" ref="lineChart"></div>
      <div class="chart-item" ref="barChart"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  mounted() {
    this.initCharts()
  },
  methods: {
    initCharts() {
      this.initLineChart()
      this.initBarChart()
    },
    initLineChart() {
      const chart = echarts.init(this.$refs.lineChart)
      chart.setOption({
        title: { text: '实时数据趋势', left: 'center', textStyle: { color: '#fff' } },
        tooltip: { trigger: 'axis' },
        xAxis: {
          type: 'category',
          data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
          axisLabel: { color: '#fff' }
        },
        yAxis: { type: 'value', axisLabel: { color: '#fff' } },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330],
          type: 'line',
          smooth: true,
          lineStyle: { color: '#1e5dd6', width: 2 },
          itemStyle: { color: '#00f7ff' }
        }],
        grid: { top: '20%', bottom: '15%' },
        backgroundColor: 'transparent'
      })
    },
    initBarChart() {
      const chart = echarts.init(this.$refs.barChart)
      chart.setOption({
        title: { text: '数据分析对比', left: 'center', textStyle: { color: '#fff' } },
        tooltip: { trigger: 'axis' },
        xAxis: {
          type: 'category',
          data: ['设备A', '设备B', '设备C', '设备D', '设备E'],
          axisLabel: { color: '#fff' }
        },
        yAxis: { type: 'value', axisLabel: { color: '#fff' } },
        series: [{
          data: [120, 200, 150, 80, 70],
          type: 'bar',
          itemStyle: { color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [{ offset: 0, color: '#1e5dd6' }, { offset: 1, color: '#00f7ff' }]
          )}
        }],
        grid: { top: '20%', bottom: '15%' },
        backgroundColor: 'transparent'
      })
    }
  }
}
</script>

<style scoped>
.chart-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  height: 600px;
}

.chart-item {
  height: 100%;
  background: rgba(16, 34, 70, 0.8);
  border-radius: 10px;
  padding: 15px;
}
</style>
