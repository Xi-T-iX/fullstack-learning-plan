# Daily learning reminder - shows a Windows toast and opens the dashboard.
# Registered as scheduled task "FullstackLearning-DailyReminder" (Mon-Sat 10:30).
# Change time:  schtasks /Change /TN "FullstackLearning-DailyReminder" /ST 09:00
# Pause:        schtasks /Change /TN "FullstackLearning-DailyReminder" /DISABLE
# Resume:       schtasks /Change /TN "FullstackLearning-DailyReminder" /ENABLE
# Remove:       schtasks /Delete /TN "FullstackLearning-DailyReminder" /F

$dashboard = "D:\Coding Projects\fullstack-learning-plan\dashboard.html"

# --- Compute current week + phase from the PLAN.md schedule ---
$start      = Get-Date "2026-07-17"   # Week 0 Day 1
$week1Mon   = Get-Date "2026-07-20"   # Week 1 Monday
$today      = (Get-Date).Date

if ($today -lt $start) {
    $days = [int]([math]::Ceiling(($start - $today).TotalDays))
    $line1 = "Countdown: plan starts in $days day(s)"
    $line2 = "Read GETTING-STARTED.md so Day 1 is smooth."
}
elseif ($today -lt $week1Mon) {
    $line1 = "Week 0 - Setup"
    $line2 = "Installs, GitHub, first push. Dashboard has today's steps."
}
else {
    $week = [int][math]::Floor((($today - $week1Mon).TotalDays) / 7) + 1
    if ($week -gt 42) {
        $line1 = "Beyond Week 42"
        $line2 = "Plan's done - iterate on the MVP and consulting pipeline."
    }
    else {
        $phases = @(
            @(5, 9,  "JS + DOM"), @(10, 13, "Backend"), @(14, 15, "Databases"),
            @(16, 17, "TypeScript"), @(18, 21, "React"), @(22, 27, "Tailwind + Next.js"),
            @(28, 29, "AI Engineering"), @(30, 32, "AEC Data & BIM"), @(33, 36, "DevOps"),
            @(37, 42, "Capstone MVP"), @(0, 4, "Fundamentals")
        )
        $phase = "Fundamentals"
        foreach ($p in $phases) { if ($week -ge $p[0] -and $week -le $p[1]) { $phase = $p[2]; break } }
        $line1 = "Week $week of 42 - $phase"
        if ((Get-Date).DayOfWeek -eq "Saturday") {
            $line2 = "Project Saturday: extend and polish - no new material."
        } else {
            $line2 = "90 minutes: review, learn, build, commit. Dashboard is open."
        }
    }
}

# --- Toast notification (Windows 10/11, no modules needed) ---
try {
    [Windows.UI.Notifications.ToastNotificationManager, Windows.UI.Notifications, ContentType = WindowsRuntime] | Out-Null
    [Windows.Data.Xml.Dom.XmlDocument, Windows.Data.Xml.Dom.XmlDocument, ContentType = WindowsRuntime] | Out-Null
    $appId = '{1AC14E77-02E7-4E5D-B744-2EB1AE5198B7}\WindowsPowerShell\v1.0\powershell.exe'
    $xmlText = @"
<toast scenario="reminder">
  <visual>
    <binding template="ToastGeneric">
      <text>Time to build - fullstack plan</text>
      <text>$line1</text>
      <text>$line2</text>
    </binding>
  </visual>
  <audio src="ms-winsoundevent:Notification.Reminder"/>
</toast>
"@
    $xml = New-Object Windows.Data.Xml.Dom.XmlDocument
    $xml.LoadXml($xmlText)
    $toast = New-Object Windows.UI.Notifications.ToastNotification $xml
    [Windows.UI.Notifications.ToastNotificationManager]::CreateToastNotifier($appId).Show($toast)
}
catch {
    # Toast can fail on locked-down systems; the dashboard still opens below.
}

# --- Open the dashboard in the default browser ---
Start-Process $dashboard
