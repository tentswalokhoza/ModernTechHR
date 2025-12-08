export const employees = [
  {
    id: 1,
    name: 'Aisha Khan',
    role: 'Senior Frontend Developer',
    department: 'Engineering',
    email: 'aisha.khan@moderntech.com',
    salary: 9000,
    startDate: '2018-03-15',
    attendancePercent: 96,
  },
  {
    id: 2,
    name: 'Daniel Park',
    role: 'QA Engineer',
    department: 'Quality Assurance',
    email: 'daniel.park@moderntech.com',
    salary: 6200,
    startDate: '2019-09-01',
    attendancePercent: 88,
  },
  {
    id: 3,
    name: 'Maya Singh',
    role: 'HR Specialist',
    department: 'Human Resources',
    email: 'maya.singh@moderntech.com',
    salary: 5400,
    startDate: '2021-07-12',
    attendancePercent: 92,
  }
]

export const timeOffRequests = [
  { id: 1, employeeId: 2, from: '2025-12-20', to: '2025-12-24', type: 'Vacation', status: 'Pending' },
  { id: 2, employeeId: 3, from: '2025-12-01', to: '2025-12-02', type: 'Sick', status: 'Approved' },
]

export const payrollHistory = [
  { id: 1, employeeId: 1, month: '2025-11', gross: 9000, tax: 1350, net: 7650 },
  { id: 2, employeeId: 2, month: '2025-11', gross: 6200, tax: 930, net: 5270 },
]
