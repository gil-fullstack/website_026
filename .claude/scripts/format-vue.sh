#!/usr/bin/env bash
# Formata arquivos .vue com prettier após edição, se disponível.
INPUT=$(cat)
FILE=$(echo "$INPUT" | node -e "
  try {
    const d = JSON.parse(require('fs').readFileSync('/dev/stdin','utf8'));
    process.stdout.write(d.file_path || d.path || '');
  } catch(e) { process.stdout.write(''); }
" 2>/dev/null <<< "$INPUT")

[[ -z "$FILE" ]] && exit 0
[[ "$FILE" != *.vue && "$FILE" != *.css && "$FILE" != *.js ]] && exit 0

if command -v prettier &>/dev/null; then
  prettier --write "$FILE" 2>/dev/null
elif [ -f "$CLAUDE_PROJECT_DIR/node_modules/.bin/prettier" ]; then
  "$CLAUDE_PROJECT_DIR/node_modules/.bin/prettier" --write "$FILE" 2>/dev/null
fi

exit 0
