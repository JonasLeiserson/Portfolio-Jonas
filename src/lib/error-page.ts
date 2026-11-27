export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>No se pudo cargar la página</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #f4f6f8; color: #1c2a30; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.35rem; margin: 0 0 0.5rem; }
      p { color: #5d6c72; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #2b4c7e; color: #fff; }
      .secondary { background: #fff; color: #2b4c7e; border-color: #c9d9d5; }
    </style>
  </head>
  <body>
    <main class="card">
      <h1>No se pudo cargar la página</h1>
      <p>Ocurrió un error inesperado. Probá recargar o volver al inicio.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Reintentar</button>
        <a class="secondary" href="/">Volver al inicio</a>
      </div>
    </main>
  </body>
</html>`;
}
