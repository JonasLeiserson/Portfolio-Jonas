import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const assetsDir = path.join(root, "src", "assets");
const srcDir = path.join(root, "src");

async function readAllCode(dir) {
  let code = "";
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) code += await readAllCode(full);
    else if (/\.(tsx|ts|jsx|js)$/.test(entry.name)) {
      code += `\n--- ${entry.name} ---\n` + (await fs.readFile(full, "utf8"));
    }
  }
  return code;
}

const allCode = await readAllCode(srcDir);
const jsonFiles = (await fs.readdir(assetsDir)).filter((f) => f.endsWith(".asset.json"));

for (const file of jsonFiles) {
  const data = JSON.parse(await fs.readFile(path.join(assetsDir, file), "utf8"));
  const imgName = file.replace(".asset.json", "");
  
  // Busca dónde aparece image-XX.png en el código y muestra 150 caracteres alrededor
  const idx = allCode.indexOf(imgName);
  const context = idx !== -1 
    ? allCode.slice(Math.max(0, idx - 120), idx + 150).replace(/\s+/g, " ")
    : "No encontrado directamente en el código";

  console.log(`📌 ${imgName}`);
  console.log(`   URL esperada: ${data.url}`);
  console.log(`   Contexto en código: ${context}\n`);
}