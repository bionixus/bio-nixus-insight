# Connecting WordPress to blog.bionixus.com

This guide explains how to connect a WordPress blog so it is served at **blog.bionixus.com**.

You have two main options:

1. **Subdomain = WordPress** – `blog.bionixus.com` shows your WordPress site (recommended if the blog is the main content there).
2. **Subdomain = your React app, content from WordPress** – `blog.bionixus.com` stays your React app and fetches posts from WordPress via the REST API.

---

## Option A: blog.bionixus.com shows WordPress directly

Here the subdomain points to wherever WordPress is hosted. Visitors go to `blog.bionixus.com` and see the WordPress site.

### Step 1: Host WordPress somewhere

Choose one:

- **WordPress.com** (managed): Create a site, then add the custom domain `blog.bionixus.com` in the WordPress.com dashboard (often requires a paid plan for custom domains).
- **Self‑hosted / VPS**: Install WordPress on a server (e.g. DigitalOcean, Linode, or your own host). You’ll need PHP, MySQL/MariaDB, and a web server (e.g. Nginx or Apache).
- **Managed WordPress** (e.g. WP Engine, Kinsta, Flywheel): Create a WordPress site; they’ll give you a temporary URL, then you point `blog.bionixus.com` to it (see Step 2).

### Step 2: Point blog.bionixus.com to WordPress (DNS)

Where you manage DNS for **bionixus.com** (e.g. Cloudflare, Namecheap, Vercel, your registrar):

**If WordPress is on a host that gives you a target hostname (e.g. WordPress.com, Kinsta):**

- Add a **CNAME** record:
  - **Name/host:** `blog` (so the full name is `blog.bionixus.com`)
  - **Value/target:** the hostname they give you (e.g. `your-site.wordpress.com` or `your-site.kinsta.cloud`)
  - **TTL:** 3600 or default

**If WordPress is on your own server with a fixed IP:**

- Add an **A** record:
  - **Name/host:** `blog`
  - **Value:** the server’s IP address
  - **TTL:** 3600 or default

Save the DNS changes. Propagation can take from a few minutes up to 24–48 hours.

### Step 3: Configure WordPress for blog.bionixus.com

In the WordPress admin of the site you’re using for the blog:

1. Go to **Settings → General**.
2. Set:
   - **WordPress Address (URL):** `https://blog.bionixus.com`
   - **Site Address (URL):** `https://blog.bionixus.com`
3. Save.

(If WordPress was first installed at another URL, you may need to run a search‑replace on the database for the old URL → `https://blog.bionixus.com`, or use a “domain change” plugin/migration tool.)

### Step 4: Enable HTTPS for blog.bionixus.com

- **WordPress.com / managed hosts:** They usually provide SSL for your custom domain; follow their “custom domain” or “SSL” steps.
- **Your own server:** Use a certificate for `blog.bionixus.com` (e.g. Let’s Encrypt with Certbot). Configure your Nginx/Apache vhost for `blog.bionixus.com` and the certificate.

After this, `https://blog.bionixus.com` should open your WordPress blog.

---

## Option B: Keep your React app on blog.bionixus.com and pull content from WordPress

Here **blog.bionixus.com** stays your existing React app (e.g. deployed on Vercel). WordPress runs elsewhere (e.g. `wp.bionixus.com` or a subdirectory on another domain). The React app fetches posts via the **WordPress REST API** and displays them.

### Step 1: Host WordPress and note its URL

Install WordPress on any host (see Option A, Step 1). You’ll use its base URL for the API, e.g.:

- `https://wp.bionixus.com`
- or `https://blog.bionixus.com` if you later move the React app to another path/domain

### Step 2: Point blog.bionixus.com to your React app (current setup)

In DNS for **bionixus.com**:

- **blog.bionixus.com** should point to where your React app is hosted (e.g. Vercel):
  - **CNAME** `blog` → `cname.vercel-dns.com` (or whatever Vercel/host tells you for the subdomain).

So `blog.bionixus.com` continues to serve the React app.

### Step 3: Use the WordPress REST API in the React app

WordPress exposes a REST API at:

- **List posts:** `GET https://YOUR-WORDPRESS-URL/wp-json/wp/v2/posts`
- **Single post:** `GET https://YOUR-WORDPRESS-URL/wp-json/wp/v2/posts/<id>`
- **By slug:** you can use `?slug=your-post-slug` or fetch and find by slug.

You can add a small data layer (e.g. `src/lib/wordpress-blog.ts`) that:

1. Fetches from `https://YOUR-WORDPRESS-URL/wp-json/wp/v2/posts` (and optionally `categories`, `tags`).
2. Maps each WP post to your existing `BlogPost` type (`id`, `slug`, `title`, `excerpt`, `date`, `category`, `country`, `coverImage`).  
   Note: WordPress has `title`, `excerpt`, `date`, `slug`, featured image via `_embedded` or a separate request; you may need to map “topic” and “country” from custom fields or taxonomies if you use them.
3. Passes the array into your existing `<BlogSection />` or blog list.

If WordPress is on a different domain (e.g. `wp.bionixus.com`), ensure its CORS and/or REST API allow requests from `https://blog.bionixus.com` if you need to call the API from the browser. Many hosts allow this by default for public posts.

---

## Summary

| Goal | What to do |
|------|------------|
| **blog.bionixus.com = WordPress site** | Host WordPress → DNS: CNAME or A for `blog` → set WordPress URLs to `https://blog.bionixus.com` → enable SSL. |
| **blog.bionixus.com = React app, content from WordPress** | Keep DNS for `blog` pointing to your React app → host WordPress elsewhere → in the app, fetch from `https://YOUR-WP-URL/wp-json/wp/v2/posts` and map to `BlogPost`. |

If you tell me which option you want (A or B) and where you host (e.g. Vercel for the main site, WordPress.com or VPS for WordPress), I can give step‑by‑step tailored to those services (including exact DNS and, for B, sample `wordpress-blog.ts` and how to wire it into `Blog.tsx`).
