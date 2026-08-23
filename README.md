# asyraf.ai

Personal site for Asyraf Duyshart — warm sketch aesthetic, Next.js 15 (App Router) + Tailwind, deployed to Cloudflare Workers via [OpenNext](https://opennext.js.org/cloudflare) (`@opennextjs/cloudflare`).

## Develop

```bash
npm install
npm run dev        # Next dev server on http://localhost:3456
npm run preview    # Full Workers-runtime preview (OpenNext build + local workerd)
```

## Deploy to Cloudflare Workers

One-time: authenticate Wrangler against the personal Cloudflare account (the `account_id` is pinned in `wrangler.jsonc`).

```bash
npx wrangler login
```

Then deploy:

```bash
npm run deploy     # opennextjs-cloudflare build && deploy
```

This builds the Next.js app, converts it into a Worker (`.open-next/worker.js` + static assets), and deploys it as the `asyraf-ai` Worker.

### Custom domain (asyraf.ai)

`wrangler.jsonc` already declares `asyraf.ai` as a custom domain route. For it to attach:

1. The `asyraf.ai` zone must exist on the same Cloudflare account (Dashboard → Add a domain, nameservers pointed at Cloudflare).
2. Run `npm run deploy` — Wrangler creates the custom domain (DNS record + certificate) automatically.

Alternatively, bind it in the dashboard: **Workers & Pages → asyraf-ai → Settings → Domains & Routes → Add → Custom domain**.

For a smoke-test deploy before the domain is ready, comment out the `routes` block in `wrangler.jsonc` and set `"workers_dev": true` to serve on `asyraf-ai.<subdomain>.workers.dev`.

### Notes

- `next/image` is optimized through the [Cloudflare Images binding](https://opennext.js.org/cloudflare/howtos/image) (`"images"` in `wrangler.jsonc`); unsupported cases fall back to the original file.
- `public/_headers` marks `/_next/static/*` as immutable for CDN caching.
- Homepage screenshots for the Building section live in `public/shots/` (`jualan-home.png`, `imajinyata-home.png`, 16:10). Current files are placeholders — drop in real screenshots with the same names to update the site.
