<template>
  <div>
    <h5 class="brand">Employees</h5>
    <table class="table table-dark table-striped mt-3">
      <thead>
        <tr><th>Name</th><th>Role</th><th>Department</th><th>Salary</th><th>Attendance</th><th></th></tr>
      </thead>
      <tbody>
        <tr v-for="e in employees" :key="e.id">
          <td>{{ e.name }}</td>
          <td>{{ e.role }}</td>
          <td>{{ e.department }}</td>
          <td>R{{ e.salary }}</td>
          <td>{{ e.attendancePercent }}%</td>
          <td><button class="btn btn-sm btn-outline-warning text-dark" @click="select(e)">View</button></td>
        </tr>
      </tbody>
    </table>

    <div v-if="selected" class="mt-3 card">
      <h6>{{ selected.name }} <small class="muted">({{ selected.role }})</small></h6>
      <p class="muted mb-1">Department: {{ selected.department }}</p>
      <p class="muted mb-1">Email: {{ selected.email }}</p>
      <p class="muted">Start date: {{ selected.startDate }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { employees as empData } from '../data/dummy.js'

const employees = empData
const selected = ref(null)

function select(emp) { selected.value = emp }
</script>

<style>
.table { background: transparent }
</style>
