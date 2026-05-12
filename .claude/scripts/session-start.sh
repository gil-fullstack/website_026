#!/usr/bin/env bash
# Exibe status do projeto ao iniciar sessão.
cd "$CLAUDE_PROJECT_DIR" 2>/dev/null || exit 0

echo "=== website_026 — status do projeto ==="
echo "Node: $(node --version 2>/dev/null || echo 'não encontrado')"
echo "Yarn: $(yarn --version 2>/dev/null || echo 'não encontrado')"
[ -d node_modules ] && echo "node_modules: OK" || echo "node_modules: AUSENTE — execute yarn install"
[ -f .env ] && echo ".env: presente" || echo ".env: ausente"
echo "======================================="
exit 0
