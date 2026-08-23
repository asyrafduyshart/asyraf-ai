import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Static personal site — no ISR/data cache needed. If that changes, enable
// R2 incremental cache: https://opennext.js.org/cloudflare/caching
export default defineCloudflareConfig();
