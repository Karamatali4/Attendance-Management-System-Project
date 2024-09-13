@echo off
cd D:\MERN STACK COURSE\Attendance Management System\backend
start cmd /k "npm run dev"
timeout /t 5 /nobreak >nul
cd D:\MERN STACK COURSE\Attendance Management System\frontend
start cmd /k "npm run dev"
timeout /t 10 /nobreak >nul
start "" "http://localhost:5173"