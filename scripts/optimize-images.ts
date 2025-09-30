```ts
import fs from "fs";
import path from "path";
import sharp from "sharp";

const themesDir = path.resolve(__dirname, "../src/themes");

const optimizeImage = async (filePath: string) => {
  const outPath = filePath.replace(/(\.[\w\d_-]+)$/i, "-optimized$1");
  await sharp(filePath).resize(1200).jpeg({ quality: 80 }).toFile(outPath);
  console.log(`✅ Optimized: ${filePath}`);
};

(async () => {
  try {
    const couples = fs.readdirSync(themesDir).filter((f) => f.startsWith("couple"));
    for (const couple of couples) {
      const assetsDir = path.join(themesDir, couple, "assets");
      if (!fs.existsSync(assetsDir)) continue;
      const files = fs.readdirSync(assetsDir);

      for (const file of files) {
        const fullPath = path.join(assetsDir, file);
        if (/\.(jpg|jpeg|png)$/i.test(file)) {
          await optimizeImage(fullPath);
        }
      }
    }
    console.log("✅ All images optimized!");
  } catch (err) {
    console.error("❌ Error optimizing images", err);
    process.exit(1);
  }
})();
```
