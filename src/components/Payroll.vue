<template>
  <div>
    <h5 class="brand">Payroll Calculator</h5>
    <div class="row mt-3">
      <div class="col-md-6">
        <label class="form-label">Employee</label>
        <select v-model="selectedId" class="form-select">
          <option v-for="e in employees" :value="e.id" :key="e.id">{{ e.name }} - €{{ e.salary }}</option>
        </select>
      </div>

      <div class="col-md-3">
        <label class="form-label">Month</label>
        <input v-model="month" type="month" class="form-control" />
      </div>

      <div class="col-md-3 align-self-end">
        <button class="btn btn-warning text-dark" @click="calculate">Calculate</button>
      </div>
    </div>

    <div v-if="result" class="mt-3 card">
      <p><strong>Gross:</strong> €{{ result.gross }}</p>
      <p><strong>Tax (15%):</strong> €{{ result.tax }}</p>
      <p><strong>Net:</strong> €{{ result.net }}</p>
      <button class="btn btn-outline-light btn-sm" @click="downloadPayslip">Download Payslip</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { employees } from '../data/dummy.js'

const employeesList = employees
const selectedId = ref(employeesList[0].id)
const month = ref(new Date().toISOString().slice(0,7))
const result = ref(null)

function calculate() {
  const emp = employeesList.find(e => e.id === Number(selectedId.value))
  const gross = emp.salary
  const tax = Math.round(gross * 0.15)
  const net = gross - tax
  result.value = { gross, tax, net, employee: emp.name, month: month.value }
}

function downloadPayslip(){
  if(!result.value) return
  const text = `Payslip for ${result.value.employee} (${result.value.month})\nGross: €${result.value.gross}\nTax: €${result.value.tax}\nNet: €${result.value.net}`
  const blob = new Blob([text], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `payslip-${result.value.employee.replace(/\s+/g,'_')}-${result.value.month}.txt`
  a.click()
  URL.revokeObjectURL(url)
}
</script>

<style scoped>
.card { padding: 1rem }
</style>
