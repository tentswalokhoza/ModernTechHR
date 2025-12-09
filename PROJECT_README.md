# ModernTech HR — Project README

This file documents the features implemented by the assistant and how to run the project.

Implemented features (assistant)
- Mock authentication (client-side): login with `hradmin / secret`. Login stores `localStorage.auth` and a navbar logout button was added.
- Time-off flow: request submission form, validation, and persistence to `localStorage`.
- Payroll: payroll list editable in memory, per-row recompute, CSV export, and basic payroll form validation.
- Reports: Chart.js charts for attendance, Chart lifecycle management (destroy on unmount).
- Responsive CSS and a global background image variable in `src/assets/main.css`.
- Added comments to key components and created this README-like file.

How to run

```bash
npm install
npm run dev
```

Open the app in the browser (Vite default `http://localhost:5173`).

Notes
- To reset saved app state: open the browser console and run `localStorage.clear()`.
- Background image: place a file `public/bg.jpg` to have a background across pages (or change `--bg-image` in `src/assets/main.css`).

Files changed
- `src/components/ThePayroll.vue`
- `src/components/TimeOff.vue`
- `src/components/TheReports.vue`
- `src/views/LoginView.vue`
- `src/components/NavBarHR.vue`
- `src/assets/main.css`

If you want me to replace `README.md` content as well, I can attempt it again or we can keep the existing template README and use this file for project-specific notes.
