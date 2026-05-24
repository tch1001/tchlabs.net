#!/usr/bin/env bash
# Serve the tchlabs.net root over HTTP and expose it via cloudflared tunnel.
# The audiobook lives at /audiobook/ — open <tunnel-url>/audiobook/ on phone.
#
# Usage:  ./_tools/serve.sh [port]
#   PORT  — local port, default 8765

set -eo pipefail

PORT="${1:-7321}"
SITE_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"

# Pick an unused port if the default is taken
while ss -ltn 2>/dev/null | awk '{print $4}' | grep -q ":$PORT$"; do
  PORT=$((PORT + 1))
done

cd "$SITE_ROOT"
echo "serving $SITE_ROOT on http://localhost:$PORT"

HTTP_PID=""
TUNNEL_PID=""
python3 -m http.server "$PORT" --bind 127.0.0.1 >/tmp/audiobook_http.log 2>&1 &
HTTP_PID=$!

cleanup() {
  echo
  echo "shutting down..."
  [ -n "$HTTP_PID" ] && kill "$HTTP_PID" 2>/dev/null || true
  [ -n "$TUNNEL_PID" ] && kill "$TUNNEL_PID" 2>/dev/null || true
}
trap cleanup EXIT INT TERM

sleep 1
if ! kill -0 "$HTTP_PID" 2>/dev/null; then
  echo "http server died:"
  cat /tmp/audiobook_http.log
  exit 1
fi

echo "starting cloudflared tunnel..."
cloudflared tunnel --url "http://localhost:$PORT" --no-autoupdate 2>&1 | tee /tmp/audiobook_tunnel.log &
TUNNEL_PID=$!

# Wait for tunnel URL to appear in log
for _ in $(seq 1 30); do
  if grep -qE "https://[a-z0-9-]+\.trycloudflare\.com" /tmp/audiobook_tunnel.log; then
    URL=$(grep -oE "https://[a-z0-9-]+\.trycloudflare\.com" /tmp/audiobook_tunnel.log | head -1)
    echo
    echo "=========================================="
    echo "  preview:    $URL/audiobook/"
    echo "  ↑ scan QR for phone or open on mobile"
    echo "=========================================="
    break
  fi
  sleep 1
done

wait "$TUNNEL_PID"
