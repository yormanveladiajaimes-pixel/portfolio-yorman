# Instrucciones de Carga de Media — Portfolio Yorman

Tu portfolio está casi listo. Solo falta que subas tus videos y foto. Aquí te digo exactamente dónde y cómo.

## Estructura de carpetas

```
portfolio-vercel/
├── public/
│   ├── videos/
│   │   ├── sample-1.mp4       ← Video 1 (el que quieras que aparezca primero)
│   │   ├── sample-2.mp4       ← Video 2
│   │   ├── sample-3.mp4       ← Video 3
│   │   └── sample-4.mp4       ← Video 4 (opcional)
│   │
│   └── images/
│       ├── sample-1-thumb.jpg ← Thumbnail / preview image para Video 1
│       ├── sample-2-thumb.jpg ← Thumbnail para Video 2
│       ├── sample-3-thumb.jpg ← Thumbnail para Video 3
│       └── sample-4-thumb.jpg ← Thumbnail para Video 4 (opcional)
```

## Qué necesitas subir

### Videos
- **Dónde:** `public/videos/`
- **Nombres exactos:** `sample-1.mp4`, `sample-2.mp4`, `sample-3.mp4`, (opcional) `sample-4.mp4`
- **Formato:** MP4, H.264, cualquier resolución (se adaptará responsive)
- **Duración:** 30-60 segundos es ideal
- **Audio:** Sí, se puede incluir
- **¿Cuáles usar?** Tus 3-4 mejores trabajos. En `../remotion-editor/public/` tienes varios finales completados si quieres reusarlos (ej. `portafolio_reel_01.mp4`, `TRAINEE_gym_edit_v1.mp4`).

### Thumbnails (imágenes de preview)
- **Dónde:** `public/images/`
- **Nombres exactos:** `sample-1-thumb.jpg`, `sample-2-thumb.jpg`, etc. (DEBEN coincidir con los números de los videos)
- **Formato:** JPG, PNG o WebP
- **Tamaño:** Idealmente 400×600px (relación 9:16, vertical, como los videos)
- **Propósito:** Aparece como fondo/preview antes de que el usuario haga click para reproducir
- **Cómo generarlas:** Captura un frame de cada video en un editor cualquiera (CapCut, Photoshop, FFMPEG: `ffmpeg -i sample-1.mp4 -ss 00:00:05 -vf "scale=400:-1" sample-1-thumb.jpg`)

## Pasos para cargar

1. Edita o reemplaza los archivos en las carpetas exactas mostradas arriba.
2. Respeta los nombres (`sample-1.mp4`, `sample-2-thumb.jpg`, etc.) — el código JavaScript busca por esos nombres exactos.
3. No es necesario que tengas los 4 videos — con 3 funciona perfecto. Solo asegúrate de que si usas `sample-3.mp4`, también exista `sample-3-thumb.jpg`.

## Después de cargar

Una vez hayas subido los videos:

1. Corre `npm run dev` desde la carpeta `portfolio-vercel/` en tu terminal.
2. Abre `http://localhost:3000` en el navegador.
3. Desplázate a la sección "Últimos Trabajos" y verifica que los videos y thumbnails aparecen correctamente.
4. Haz click en el botón Play de cada video — debe reproducir inline en el navegador.
5. Si todo se ve bien, estamos listos para hacer push a GitHub y desplegar a Vercel.

## Problemas comunes

**"No veo mis videos, solo están en blanco"**
- Verifica que el nombre del archivo coincida EXACTAMENTE con lo esperado (mayúsculas, punto, extension).
- Abre la pestaña Network en DevTools (F12) y mira si los recursos 404 — si aparecen como "not found", el nombre está mal.

**"El thumbnail se ve pixelado o mal proporcionado"**
- Asegúrate de que sea vertical (9:16 o similar) — no horizontal.
- Redimensiona a 400×600px antes de subirlo.

**"El video no se reproduce"**
- Verifica que sea MP4 válido (codec H.264). Abre en tu editor de video favorito y exporta nuevamente si hace falta.

---

**¿Preguntas?** Revisa el código en `src/app/page.tsx` — ahí está la definición de `videoSamples` que busca estos archivos.
