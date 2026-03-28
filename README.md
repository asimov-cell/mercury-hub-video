# Mercury Hub - Revideo Video Demo

## Proyecto para renderizar video promocional de Mercury Hub

### Estructura
```
mercury-hub-video/
├── package.json
├── src/
│   └── project.tsx    # Video completo (30 segundos)
└── README.md
```

### Video (30 segundos)
1. **Hook (0-3s):** "Tu Agency de AI" + Logo
2. **Problema (3-8s):** "El problema con HubSpot"
3. **Solución (8-15s):** "5 min + 0 devs" + 91%
4. **Features (15-22s):** Visual Builder, KB, White-label, Billing
5. **Pricing (22-27s):** Starter $79, Fleet $299, Enterprise
6. **CTA (27-30s):** "Start Free Today"

### Cómo renderizar

#### Opción 1: Midrender (más fácil)
1. Ir a https://midrender.com
2. Subir este proyecto
3. Renderizar desde el editor web

#### Opción 2: Revideo CLI (local)
```bash
npm install
npm run dev    # Preview en localhost:9000
npm run render # Renderizar MP4
```

#### Opción 3: GitHub + Revideo Cloud
1. Subir a GitHub
2. Conectar repo con Revideo
3. Deploy y renderizar via API

### Token Midrender
Usar el token proporcionado para autenticación.

### Formato
- Vertical: 1080x1920 (TikTok/Shorts)
- FPS: 30
- Duración: ~30 segundos
