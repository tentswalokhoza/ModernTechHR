<template>
  <div>
    <h5 class="brand">Payroll Calculator</h5>
    <div class="row mt-3">
      <div class="col-md-6">
        <label class="form-label">Employee</label>
        <select v-model="selectedId" class="form-select">
          <option v-for="e in employees" :value="e.id" :key="e.id">{{ e.name }} - R{{ e.salary }}</option>
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
      <p><strong>Gross:</strong> R{{ result.gross }}</p>
      <p><strong>Tax (15%):</strong> R{{ result.tax }}</p>
      <p><strong>Net:</strong> R{{ result.net }}</p>
      <button class="btn btn-outline-light btn-sm" @click="downloadPayslip">Download Payslip</button>
    </div>

    <div class="mt-4 card">
      <h6>Payroll Data</h6>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Hours Worked</th>
            <th>Leave Deductions</th>
            <th>Final Salary</th>
            <th>Base Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in enrichedPayroll" :key="row.employeeId">
            <td>{{ row.name }}</td>
            <td>{{ row.hoursWorked }}</td>
            <td>{{ row.leaveDeductions }}</td>
            <td>R{{ row.finalSalary }}</td>
            <td v-if="row.baseSalary">R{{ row.baseSalary }}</td>
            <td v-else>—</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { employees } from '../data/dummy.js'
import { payrollData } from '../data/payrollData.js'

const employeesList = employees
const selectedId = ref(employeesList[0]?.id ?? 1)
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
  const text = `Payslip for ${result.value.employee} (${result.value.month})\nGross: R${result.value.gross}\nTax: R${result.value.tax}\nNet: R${result.value.net}`
  const blob = new Blob([text], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `payslip-${result.value.employee.replace(/\s+/g,'_')}-${result.value.month}.txt`
  a.click()
  URL.revokeObjectURL(url)
}

const enrichedPayroll = computed(() => payrollData.map(p => {
  const emp = employeesList.find(e => e.id === p.employeeId) || {}
  return {
    ...p,
    name: emp.name || `#${p.employeeId}`,
    baseSalary: emp.salary ?? null
  }
}))
</script>

<style scoped>
.card { padding: 1rem }
</style>
