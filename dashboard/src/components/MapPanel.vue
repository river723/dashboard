<template>
  <div class="map-panel">
    <h2>设备分布地图</h2>
    <div class="map-container">
      <!-- 这里可以接入真实地图API -->
      <div class="mock-map">
        <div class="marker" v-for="(marker, index) in markers" :key="index" 
             :style="{ left: marker.x + '%', top: marker.y + '%' }">
          <div class="pulse"></div>
          <div class="pin"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const markers = ref([
  { x: 30, y: 40 },
  { x: 60, y: 55 },
  { x: 45, y: 70 }
])
</script>

<style scoped>
.map-panel {
  padding: 30px;
  margin: 20px;
}

.map-container {
  height: 700px;
  background: rgba(16, 33, 71, 0.6);
  border-radius: 10px;
  overflow: hidden;
}

.mock-map {
  width: 100%;
  height: 100%;
  background: #122348;
  position: relative;
}

.marker {
  position: absolute;
  transform: translate(-50%, -100%);
}

.pin {
  width: 20px;
  height: 20px;
  background: #2d8cf0;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  position: relative;
  z-index: 2;
}

.pulse {
  position: absolute;
  width: 40px;
  height: 40px;
  background: rgba(45, 140, 240, 0.3);
  border-radius: 50%;
  animation: pulse 1.5s infinite;
  transform: translate(-30%, -30%);
}

@keyframes pulse {
  0% { transform: scale(0.5); opacity: 1; }
  100% { transform: scale(2); opacity: 0; }
}
</style>
