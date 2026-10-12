@echo off
title Sports Blueprint - Web Platform
echo ===================================================
echo   Starting Sports Blueprint Web Application...
echo ===================================================
echo.
timeout /t 1 /nobreak >nul
start http://localhost:3000/
npm run dev
pause
