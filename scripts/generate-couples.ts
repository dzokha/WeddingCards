```ts
import fs from "fs";
import path from "path";

const themesDir = path.resolve(__dirname, "../src/themes");

const sampleCouple = (id: number) => ({
  id,
  slug: `couple${id}`,
  groomName: `Chú Rể ${id}`,
  brideName: `Cô Dâu ${id}`,
  date: "2025-12-31",
  location: "Cần Thơ",
});

(async () => {
  try {
    for (let i = 1; i <= 3; i++) {
      const dir = path.join(themesDir, `couple${i}`);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir);

      const dataFile = path.join(dir, "data.ts");
      const dataContent = `export default ${JSON.stringify(
        sampleCouple(i),
        null,
        2
      )};\n`;

      fs.writeFileSync(dataFile, dataContent);
    }
    console.log("✅ Couples data generated successfully!");
  } catch (err) {
    console.error("❌ Error generating couples", err);
    process.exit(1);
  }
})();
```
