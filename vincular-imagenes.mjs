import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const metadataDir = path.join(root, "src", "assets");
const sourceDir = path.resolve(process.argv[2] ?? "imagenes-originales");
const outputDir = path.join(root, "public", "images");

// Mapeo exacto verificado según las rutas y variables de tus componentes
const EXACT_MAP = {
  "image-85.png": "798ed7990429026f82e4a5ba2b6c847b174ceaed", // Pokeort 2D (Home)
  "image-86.png": "6e44bfbd65107284b441c3dcb10bd1874007a0aa", // SpatialValue (Home)
  "image-87.png": "798ed7990429026f82e4a5ba2b6c847b174ceaed", // Pokeort 2D (Proyectos)
  "image-88.png": "6e44bfbd65107284b441c3dcb10bd1874007a0aa", // SpatialValue (Proyectos)
  "image-89.png": "798ed7990429026f82e4a5ba2b6c847b174ceaed", // Pokeort 2D (Detalle)
  "image-90.png": "cbceed6aa795947a5b117c06bf91b5756ed69592", // Unity 3D (Detalle Pokeort)
  "image-91.png": "6e44bfbd65107284b441c3dcb10bd1874007a0aa", // SpatialValue (Detalle)
  "image-92.png": "7387ff86f56186c7f9b44edc8ad5370b1b13b7ce", // UBA (Sobre mí)
  "image-93.png": "edbcb8443e7d56c5f9cd4f2a89ecd91e05899cd5", // Rugby (Sobre mí)
  "image-94.png": "1a54085b234d0d65724ebc351668a177a969281a", // Minecraft (Sobre mí)
};

async function main() {
  await fs.mkdir(outputDir, { recursive: true });
  const sourceFiles = await fs.readdir(sourceDir);

  let linked = 0;

  for (const [targetName, hashPrefix] of Object.entries(EXACT_MAP)) {
    // Busca el archivo en imagenes-originales que empiece con ese hash (sin importar si es .png o .jpg)
    const foundFile = sourceFiles.find(
      (f) => f.startsWith(hashPrefix) && !f.includes("(1)")
    );

    if (!foundFile) {
      console.error(`❌ No se encontró archivo que empiece con ${hashPrefix} para ${targetName}`);
      continue;
    }

    const srcPath = path.join(sourceDir, foundFile);
    const destPath = path.join(outputDir, targetName);
    const jsonPath = path.join(metadataDir, `${targetName}.asset.json`);

    // 1. Copia la imagen exacta a public/images/image-XX.png
    await fs.copyFile(srcPath, destPath);

    // 2. Corrige el .asset.json para que apunte limpiamente a /images/image-XX.png
    const metadata = JSON.parse(await fs.readFile(jsonPath, "utf8"));
    metadata.url = `/images/${targetName}`;
    metadata.original_filename = targetName;
    await fs.writeFile(jsonPath, JSON.stringify(metadata, null, 2));

    linked++;
    console.log(`✅ ${targetName} <- ${foundFile} (URL: ${metadata.url})`);
  }

  console.log(`\n✨ ¡Listo! ${linked}/10 imágenes vinculadas y corregidas en su lugar exacto.`);
}

main().catch(console.error);