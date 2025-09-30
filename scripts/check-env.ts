```ts
import fs from "fs";
import path from "path";

const requiredEnv = ["VITE_API_URL", "VITE_GA_ID"];

const envFile = path.resolve(__dirname, "../.env.production");
const envVars = fs.readFileSync(envFile, "utf-8");

const missing = requiredEnv.filter((key) => !envVars.includes(key));

if (missing.length > 0) {
  console.error("❌ Missing environment variables:", missing.join(", "));
  process.exit(1);
} else {
  console.log("✅ All required environment variables are set!");
}
```
