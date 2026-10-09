#!/bin/bash
cd "$(dirname "$0")"
PORT=4173
echo "节日日历网站启动中..."
echo "如果浏览器没有自动打开，请访问：http://localhost:$PORT"
open "http://localhost:$PORT" 2>/dev/null || true
python3 -m http.server "$PORT"
