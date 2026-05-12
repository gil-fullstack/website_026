#!/usr/bin/env bash
# Bloqueia comandos Bash destrutivos antes da execução.
INPUT=$(cat)
CMD=$(echo "$INPUT" | node -e "
  try {
    const d = JSON.parse(require('fs').readFileSync('/dev/stdin','utf8'));
    process.stdout.write(d.command || d.input || '');
  } catch(e) { process.stdout.write(''); }
" 2>/dev/null <<< "$INPUT")

PATTERNS=("rm -rf /" "rm -rf \$" "drop table" "DROP TABLE" "DELETE FROM" "> /dev/sda" "mkfs")

for pattern in "${PATTERNS[@]}"; do
  if echo "$CMD" | grep -qi "$pattern"; then
    echo '{"decision":"deny","reason":"Comando destrutivo detectado. Execute manualmente se tiver certeza."}' >&2
    exit 2
  fi
done

exit 0
