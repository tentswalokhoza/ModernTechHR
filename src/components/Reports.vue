<template>
  <div>
    <h5 class="brand">Reports</h5>
    <div class="mt-3">
      <canvas id="attendanceChart" width="400" height="160"></canvas>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { employees } from '../data/dummy.js'
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip } from 'chart.js'

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip)

onMounted(()=>{
  const ctx = document.getElementById('attendanceChart')
  if(!ctx) return
  const labels = employees.map(e=>e.name)
  const data = employees.map(e=>e.attendancePercent)

  new Chart(ctx, {
    type: 'bar',
    data: { labels, datasets: [{ label: 'Attendance %', data, backgroundColor: 'rgba(212,175,55,0.7)' }] },
    options: { responsive:true, plugins:{ title:{ display:true, text:'Attendance Overview' } } }
  })
})
</script>

<style scoped>
#attendanceChart { max-width:100% }
</style>
