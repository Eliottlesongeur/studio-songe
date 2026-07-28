#!/usr/bin/env bash
# =============================================================
# Génère brand-kit.css : polices embarquées (base64) + tokens.
# Fichier autonome pour Claude design (maquettes pixel-perfect).
# Usage : npm run brand-kit   (ou bash scripts/build-brand-kit.sh)
# Régénérer après toute modif de src/tokens/tokens.css ou des polices.
# =============================================================
set -euo pipefail
cd "$(dirname "$0")/.."

OUT="brand-kit.css"
FONTS="public/fonts"

cat > "$OUT" <<'EOF'
/* =============================================================
   Studio Songe — BRAND KIT (autonome)
   À déposer dans un Projet Claude (knowledge) ou à coller en tête
   d'une maquette. Contient : polices embarquées (base64) + tokens.
   Généré par scripts/build-brand-kit.sh — ne pas éditer à la main.
   ============================================================= */

EOF

emit() {
  local family="$1" file="$2" weight="$3"
  local b64
  b64=$(base64 -i "$FONTS/$file" | tr -d '\n')
  {
    echo "@font-face {"
    echo "  font-family: \"$family\";"
    echo "  src: url(\"data:font/woff2;base64,$b64\") format(\"woff2\");"
    echo "  font-weight: $weight;"
    echo "  font-style: normal;"
    echo "  font-display: swap;"
    echo "}"
  } >> "$OUT"
}

# Romains utilisés par le DS (pas d'italiques — cf. décision brand-kit).
emit "Garet" "Garet-Light.woff2" 300
emit "Garet" "Garet-Bold.woff2" 700
emit "Work Sans" "WorkSans-Light.woff2" 300
emit "Work Sans" "WorkSans-Medium.woff2" 500

{
  echo ""
  echo "/* ---- Tokens de marque (miroir de src/tokens/tokens.css) ---- */"
} >> "$OUT"
sed -n '/^:root/,$p' src/tokens/tokens.css >> "$OUT"

echo "✓ $OUT généré ($(du -h "$OUT" | cut -f1), $(grep -c '@font-face' "$OUT") polices, $(grep -cE '^\s*--ss-' "$OUT") tokens)"

# --- brand-tokens.css : version LÉGÈRE (tokens seuls) pour Claude design ---
TOK="brand-tokens.css"
cat > "$TOK" <<'EOF'
/* =============================================================
   Studio Songe — TOKENS pour Claude design
   À donner à Claude (Projet > knowledge, ou collé en tête de maquette).
   RÈGLE : n'utiliser QUE ces variables --ss-*, jamais de valeur en dur.
   Polices : Garet (titres), Work Sans (corps) — les vraies polices sont
   injectées via brand-kit.css au moment d'exporter/héberger la maquette.
   ============================================================= */

EOF
sed -n '/^:root/,$p' src/tokens/tokens.css >> "$TOK"
echo "✓ $TOK généré ($(du -h "$TOK" | cut -f1), $(grep -cE '^\s*--ss-' "$TOK") tokens)"
