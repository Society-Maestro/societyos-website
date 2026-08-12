# SocietyOS — Samsung Galaxy Fold 8 Ultra Setup Guide
## Hermes Agent on Android via Termux with SocietyOS UI

---

## What You'll Have

A clean, elegant terminal interface on your Fold 8 Ultra with the SocietyOS blue/gold/green theme. No matrix. No hacking aesthetic. Just your sovereign command center in your pocket.

### Prerequisites
- Samsung Galaxy Fold 8 Ultra (512GB)
- Internet connection
- 10 minutes

---

## Step 1: Install Termux

Termux is the terminal app that lets Hermes run on Android. Do NOT install from Google Play Store (it's outdated). Install from F-Droid or the direct APK.

### Option A: F-Droid (Recommended)
1. Open Samsung Internet on the Fold 8 Ultra
2. Go to https://f-droid.org/packages/com.termux/
3. Download and install Termux

### Option B: Direct APK
1. Go to https://github.com/termux/termux-app/releases
2. Download the latest `termux-v3+universal.apk`
3. Install it

---

## Step 2: Install Hermes Agent

Open Termux and paste this single command:

```bash
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
```

This automatically:
- Installs all system packages (python, git, rust, clang, etc.)
- Clones the Hermes Agent repository
- Creates a virtual environment
- Links `hermes` to your PATH

Wait for it to finish. It takes 3-5 minutes on the Fold 8 Ultra.

---

## Step 3: Verify Installation

```bash
hermes version
hermes doctor
```

If `hermes doctor` shows green across the board, you're ready.

---

## Step 4: Configure Your Model

```bash
hermes setup
```

This runs the interactive setup wizard. Configure:
- Model: Same as your Mac (z-ai/glm-5.2 via Nous)
- API keys: Same keys as your Mac setup
- Telegram gateway: Optional — lets you talk to Maestro from Telegram on the phone

---

## Step 5: Apply SocietyOS Theme

### Termux Color Scheme

Open Termux, long-press the screen, select "More" → "Preferences":

**Background:** `#0d1f2d` (SocietyOS Deep Blue)
**Foreground text:** `#e0e0e0` (Clean White)
**Font:** JetBrains Mono or Fira Code (install via Termux: `pkg install fontconfig-utils`)

Or create the color scheme file:

```bash
mkdir -p ~/.termux
cat > ~/.termux/colors.properties << 'EOF'
# SocietyOS Theme
background=#0d1f2d
foreground=#e0e0e0
cursor=#c5a059
color0=#1a1a2e
color1=#8b1a1a
color2=#1b5e3e
color3=#c5a059
color4=#1e3d59
color5=#8b5cf6
color6=#2a8a6e
color7=#e0e0e0
color8=#3a3a4a
color9=#c5a059
color10=#1b5e3e
color11=#c5a059
color12=#1e3d59
color13=#8b5cf6
color14=#2a8a6e
color15=#f0f0f0
EOF
```

### Termux Font (Clean, Not Terminal-Looking)

```bash
# Install a clean monospace font
pkg install fontconfig-utils
```

In Termux preferences, set font size to 14-16pt for the Fold 8 Ultra's inner screen.

### Disable the Default Welcome Message

```bash
cat > ~/.termux/termux.properties << 'EOF'
# SocietyOS Termux Config
bell-character = ignore
enforce-char-based-input = true
EOF
```

---

## Step 6: Create SocietyOS Welcome Banner

When you launch Hermes, show the SocietyOS identity — clean, with the three circles (Learn, Listen, Watch, Play, Create):

```bash
cat > ~/.bashrc.societyos << 'EOF'
# SocietyOS Welcome
clear
echo ""
echo "  ███████ ███████ ██████  ███████ ███    ██"
echo "  ██      ██      ██   ██ ██      ████   ██"
echo "  ███████ █████   ██████  █████   ██ ██  ██"
echo "       ██ ██      ██   ██ ██      ██  ██ ██"
echo "  ███████ ███████ ██   ██ ███████ ██   ████"
echo ""
echo "  ○ Learn    ○ Listen    ○ Watch"
echo "  ○ Play     ○ Create"
echo ""
echo "  The Operating System for the Sovereign"
echo "  Samsung Galaxy Fold 8 Ultra | 512GB"
echo ""
EOF
```

---

## Step 7: Start Hermes

```bash
hermes
```

You're now running Maestro on your Fold 8 Ultra. Talk to it naturally — "Hey Maestro, what's the status of societyos.world?"

---

## DeX Mode (Desktop Experience)

When you dock the Fold 8 Ultra or connect to a monitor:

1. Termux automatically scales to full screen
2. Run `hermes` for a full desktop terminal experience
3. The SocietyOS blue/gold/green theme looks clean on a large monitor
4. You have the same power as your Mac terminal — in your pocket

---

## What Works on the Fold 8 Ultra

✅ Full Hermes CLI — talk to Maestro naturally
✅ Cron jobs — scheduled tasks
✅ Telegram gateway — message Maestro from Telegram
✅ File operations — read/write on phone storage
✅ Git — push to SocietyOS repos
✅ MCP support — tool extensions
✅ Memory — persistent across sessions

## What Doesn't Work (Yet) on Android

❌ Voice (faster-whisper blocked on Android)
❌ Browser automation (Playwright not supported)
❌ Docker isolation (not available in Termux)
❌ Computer use (desktop control — needs macOS/Windows/Linux)

---

## Quick Commands

| Command | What It Does |
|---------|-------------|
| `hermes` | Start chatting with Maestro |
| `hermes setup` | Run setup wizard |
| `hermes doctor` | Check system health |
| `hermes version` | Check version |
| `hermes model` | Configure AI model |
| `hermes status` | System status |

---

## Troubleshooting

### "No solution found" during install
Use the tested Termux bundle instead of full install:
```bash
python -m pip install -e '.[termux]' -c constraints-termux.txt
```

### `jiter` / `maturin` build error
```bash
export ANDROID_API_LEVEL="$(getprop ro.build.version.sdk)"
```
Then re-run the install.

### Android kills Termux in background
Go to phone Settings → Battery → Termux → Don't optimize battery. Also enable "Acquire wakelock" in Termux notification.

### `hermes` command not found
```bash
ln -sf "$PWD/venv/bin/hermes" "$PREFIX/bin/hermes"
```

---

*Designed by The Nyx & Raven Ranch. SocietyOS — The Operating System for the Sovereign.*
