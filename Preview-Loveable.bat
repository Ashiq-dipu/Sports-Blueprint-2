@echo off
title Sports Blueprint - Lovable App Edition
cd /d "%~dp0loveable-app"
echo ===================================================
echo   Starting Sports Blueprint (Lovable Edition)...
echo ===================================================
echo.
timeout /t 2 /nobreak >nul
start http://localhost:8080/
npm run dev
pause
