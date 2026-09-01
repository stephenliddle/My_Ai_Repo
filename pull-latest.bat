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
echo Done. Latest files are in this folder.
echo Products images: summerhouse-website\public\images\products
echo.
pause
