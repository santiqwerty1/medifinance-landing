#!/bin/bash
# Quick OG Image Generator using ImageMagick
# Usage: ./create-og-image.sh

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "ImageMagick is not installed. Install it with:"
    echo "  Ubuntu/Debian: sudo apt-get install imagemagick"
    echo "  macOS: brew install imagemagick"
    exit 1
fi

# Create a gradient background with text overlay
convert -size 1200x630 \
  gradient:'#9333EA-#2563EB' \
  -gravity North -pointsize 72 -fill white -font "Arial-Bold" \
  -annotate +0+120 "MediFinance" \
  -gravity Center -pointsize 48 -fill white -font "Arial" \
  -annotate +0-50 "Gestión Financiera Simple" \
  -annotate +0+10 "para Profesionales de la Salud" \
  -gravity South -pointsize 28 -fill white \
  -annotate +0+80 "✓ Plan Gratis   ✓ Precios PPP   ✓ Web + Móvil" \
  -annotate +0+30 "medifinance.app" \
  public/og-image.png

echo "✓ OG image created at public/og-image.png"
