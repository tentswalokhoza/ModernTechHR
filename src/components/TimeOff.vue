<template>
  <div>
    <h5 class="brand">Time Off Requests</h5>
    <table class="table table-dark table-striped mt-3">
      <thead>
        <tr><th>Employee</th><th>From</th><th>To</th><th>Type</th><th>Status</th><th>Action</th></tr>
      </thead>
      <tbody>
        <tr v-for="r in requests" :key="r.id">
          <td>{{ employeeName(r.employeeId) }}</td>
          <td>{{ r.from }}</td>
          <td>{{ r.to }}</td>
          <td>{{ r.type }}</td>
          <td>{{ r.status }}</td>
          <td>
            <button class="btn btn-sm btn-success me-1" @click="update(r, 'Approved')">Approve</button>
            <button class="btn btn-sm btn-danger" @click="update(r, 'Denied')">Deny</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { timeOffRequests, employees } from '../data/dummy.js'

const requests = ref(JSON.parse(JSON.stringify(timeOffRequests)))

function employeeName(id){
  const e = employees.find(x => x.id === id)
  return e ? e.name : 'Unknown'
}

function update(r, status){
  r.status = status
}
</script>

<style scoped>
.table { background: transparent }
</style>
