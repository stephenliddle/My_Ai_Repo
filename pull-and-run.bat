@echo off
setlocal
cd /d "%~dp0"

echo.
echo === Pulling latest from GitHub ===
git fetch origin
if errorlevel 1 (
  echo Git fetch failed. Is this folder a git clone?
  pause
  exit /b 1
)

REM Prefer the numbered-content branch if it exists remotely; otherwise stay on current branch
git show-ref --verify --quiet refs/remotes/origin/cursor/numbered-content-system-aed7
if not errorlevel 1 (
  git checkout cursor/numbered-content-system-aed7
  git pull origin cursor/numbered-content-system-aed7
) else (
  git pull
)

if errorlevel 1 (
  echo Git pull failed.
  pause
  exit /b 1
)

echo.
echo === Installing / updating npm packages ===
cd summerhouse-website
call npm install
if errorlevel 1 (
  echo npm install failed.
  pause
  exit /b 1
)

echo.
echo === Starting the site (Ctrl+C to stop) ===
echo Open http://localhost:5173 in your browser when ready.
echo.
call npm run dev

pause
