@echo off
title Oustouri Fit - Pro Gym PWA
cd /d "%~dp0"
echo Starting Oustouri Fit server on port 5500...
start http://localhost:5500
node server.js
pause
