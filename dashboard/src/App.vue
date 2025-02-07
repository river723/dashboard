<template>
  <div class="dashboard-container">
    <div class="header">
      <h1>智能驾驶舱管理系统</h1>
      <div class="time-display">{{ currentTime }}</div>
    </div>
    
    <nav class="main-nav">
      <button 
        v-for="tab in tabs" 
        :key="tab.id"
        :class="{ active: activeTab === tab.id }"
        @click="switchTab(tab.id)"
      >
        {{ tab.label }}
      </button>
    </nav>

    <div class="content-area">
      <component :is="activeComponent" class="content-component" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import MapPanel from './components/MapPanel.vue'
import ChartsPanel from './components/ChartsPanel.vue'
import StatusPanel from './components/StatusPanel.vue'

const tabs = [
  { id: 'map', label: '设备分布', component: MapPanel },
  { id: 'charts', label: '数据分析', component: ChartsPanel },
  { id: 'status', label: '运行状态', component: StatusPanel }
]

const activeTab = ref('map')
const currentTime = ref('')

const activeComponent = computed(() => 
  tabs.find(tab => tab.id === activeTab.value)?.component
)

function switchTab(tabId) {
  activeTab.value = tabId
}

function updateTime() {
  const now = new Date()
  currentTime.value = now.toLocaleString('zh-CN', { 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })
}

onMounted(() => {
  updateTime()
  setInterval(updateTime, 1000)
})
</script>

<style scoped>
.dashboard-container {
  height: 100vh;
  background: #0a1633;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.header {
  padding: 20px 40px;
  background: rgba(16, 33, 71, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.time-display {
  font-size: 1.2rem;
  color: #2d8cf0;
}

.main-nav {
  padding: 15px 40px;
  background: rgba(18, 35, 72, 0.9);
  
  button {
    padding: 12px 30px;
    margin-right: 20px;
    border: none;
    border-radius: 5px;
    background: #1f2b48;
    color: #7a8ba9;
    cursor: pointer;
    transition: all 0.3s;
    
    &.active {
      background: #2d8cf0;
      color: white;
      box-shadow: 0 0 15px rgba(45,140,240,0.5);
    }
    
    &:hover {
      transform: translateY(-2px);
    }
  }
}

.content-area {
  flex: 1;
  padding: 20px;
  overflow: hidden;
}

.content-component {
  height: 100%;
  background: rgba(16, 33, 71, 0.3);
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(0,0,0,0.2);
}
</style>
