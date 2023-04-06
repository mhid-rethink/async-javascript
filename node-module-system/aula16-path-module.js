import { fileURLToPath } from "url";
import * as fs from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = fs.dirname(__filename);
console.log(__filename);
console.log(__dirname);
