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
import {chartData} from '../data/chartData.js'
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip } from 'chart.js'

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip)

onMounted(()=>{
  const ctx = document.getElementById('attendanceChart')
  if(!ctx) return
  const labels = (chartData && chartData.labels && chartData.labels.length) ? chartData.labels : employees.map(e => e.name)
  const datasets = (chartData && chartData.datasets && chartData.datasets.length) ? chartData.datasets : [{ label: 'Attendance %', data: employees.map(e => e.attendancePercent), backgroundColor: 'rgba(212,175,55,0.7)' }]

  new Chart(ctx, {
    type: 'bar',
    data: { labels, datasets },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Attendance Overview',
          color: '#ffffff',
          font: { size: 16 }
        },
        legend: {
          labels: { color: '#ffffff' }
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const v = context.parsed && context.parsed.y !== undefined ? context.parsed.y : context.parsed
              return `Attendance: ${v}%`
            }
          }
        }
      },
      scales: {
        x: {
          ticks: {
            textColor: 'bbbbbbb',
            maxRotation: 0,
            autoSkip: false,
            font: { size: 12 }
          },
          grid: { color: 'rgba(255,255,255,0.08)' }
        },
        y: {
          beginAtZero: true,
          suggestedMax: 100,
          ticks: {
            stepSize: 10,
            callback: (value) => `${value}%`,
            color: '#bbbbbbb',
            font: { size: 12 }
          },
          grid: { color: 'rgba(255,255,255,0.08)' }
        }
      }
    }
  })
})
</script>

<style scoped>
#attendanceChart { max-width:100% }


</style>
