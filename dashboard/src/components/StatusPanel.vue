<template>
  <div class="status-panel">
    <h2>设备运行状态</h2>
    <div class="indicator-grid">
      <div class="indicator-item" v-for="n in 6" :key="n">
        <div class="value">{{ 95 + n }}%</div>
        <div class="label">设备{{ n }}运行效率</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.status-panel {
  padding: 30px;
  background: rgba(16, 33, 71, 0.6);
  border-radius: 10px;
  margin: 20px;
}

.indicator-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 20px;
}

.indicator-item {
  background: rgba(45, 140, 240, 0.2);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid rgba(45, 140, 240, 0.5);
}

.value {
  font-size: 28px;
  color: #2d8cf0;
  font-weight: bold;
  margin-bottom: 10px;
}

.label {
  color: #a3d4ff;
  font-size: 16px;
}
</style>
