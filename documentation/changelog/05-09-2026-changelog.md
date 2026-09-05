# Changelog: 05-09-2026

- [Sábado]-[05/09/2026]-[00:03] : Corrección de discrepancia visual y restauración de paleta de colores Vanguard en producción:
  1. Configuración completa de Tailwind (frontend/tailwind.config.js): definición formal de las clases de colores Vanguard (brand.lime: #bdf052, brand.dark: #070515, brand.navy: #0c0926, brand.blue: #38bdf8, brand.yellow: #facc15, brand.purple: #c084fc, brand.orange: #fb923c), eliminando el problema de purgado (CSS tree-shaking) donde Tailwind descartaba estas clases durante la compilación de producción.
  2. Tipografía Display (font-display): configuración de fontFamily.display ('Syne') en tailwind.config.js e importación en frontend/index.html vía Google Fonts.
  3. Estilos base y scrollbar oscura: actualización de frontend/src/index.css e index.html con fondo nativo #070515 y scrollbar personalizada con acento #bdf052, eliminando flashes blancos y scrollbars genéricos claros.
  4. Regeneración y empaquetado del bundle de producción en frontend/dist/ (index-C-LRC0TT.css y index-y_29G_xl.js).
