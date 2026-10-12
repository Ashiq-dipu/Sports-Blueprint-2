@echo off
title Sports Blueprint - Production Preview
echo Starting Production Preview...
timeout /t 1 /nobreak >nul
start http://localhost:4173/
npm run preview
pause
