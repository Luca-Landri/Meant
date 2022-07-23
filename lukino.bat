echo off
cls
:loop
cls
npm run dev
timeout /t 3
goto loop