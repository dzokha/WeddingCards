```ts
import fs from "fs";
import path from "path";
import { generateSitemap } from "../src/lib/sitemapGenerator";

// Lấy danh sách couples từ theme folders
const themesDir = path.resolve(__dirname, "../src/themes");
const couples = fs.readdirSync(themesDir).filter((f) => f.startsWith("couple"));

(async () => {
  try {
    const urls = couples.map(
      (c) => `https://weddingcards.example.com/thiep/${c}`
    );
    const sitemap = generateSitemap(urls);
    fs.writeFileSync(path.resolve(__dirname, "../public/sitemap.xml"), sitemap);
    console.log("✅ Sitemap generated successfully!");
  } catch (err) {
    console.error("❌ Error generating sitemap", err);
    process.exit(1);
  }
})();
```
