# Commits work/progress.json and work/logs/ to git.
# Run after using dashboard "Save to work folder" (Chrome/Edge) or copying an export into work/.
#
# Usage:
#   .\save-progress.ps1           # commit only
#   .\save-progress.ps1 -Push     # commit and push to GitHub
#   .\save-progress.ps1 -FromDownloads   # copy Downloads\progress.json into work/ first

param(
    [switch]$Push,
    [switch]$FromDownloads
)

$RepoRoot = $PSScriptRoot
$WorkDir  = Join-Path $RepoRoot "work"
$Progress = Join-Path $WorkDir "progress.json"
$Downloads = Join-Path $env:USERPROFILE "Downloads\progress.json"

if ($FromDownloads -and (Test-Path $Downloads)) {
    Copy-Item $Downloads $Progress -Force
    Write-Host "Copied Downloads\progress.json -> work\progress.json"
}

if (-not (Test-Path $Progress)) {
    Write-Host ""
    Write-Host "No work\progress.json found." -ForegroundColor Yellow
    Write-Host "1. Open dashboard in Chrome or Edge (local or live URL)"
    Write-Host "2. Click 'Save to work folder' and choose: $WorkDir"
    Write-Host "   OR click 'Export all work' and run: .\save-progress.ps1 -FromDownloads"
    Write-Host ""
    exit 1
}

# Split logs into work/logs/*.md if node is available
$exportScript = Join-Path $RepoRoot "scripts\export-work.mjs"
if (Test-Path $exportScript) {
    try {
        Push-Location $RepoRoot
        node $exportScript "work\progress.json" 2>$null
    } finally {
        Pop-Location
    }
}

Push-Location $RepoRoot
try {
    git add work/
    $status = git status --porcelain work/
    if (-not $status) {
        Write-Host "No changes in work/ — already up to date." -ForegroundColor Green
        exit 0
    }

    $date = Get-Date -Format "yyyy-MM-dd HH:mm"
    git commit -m "Save learning progress ($date)"
    Write-Host "Committed work/ progress." -ForegroundColor Green

    if ($Push) {
        git push
        Write-Host "Pushed to GitHub." -ForegroundColor Green
    } else {
        Write-Host "Run with -Push to upload: .\save-progress.ps1 -Push"
    }
} finally {
    Pop-Location
}
