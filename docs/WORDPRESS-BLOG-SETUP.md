# How to integrate WordPress blog with this app

This app filters the blog/insights section by **Topic** (category) and **Country**. To feed it from WordPress, your WordPress site needs proper categories and optionally a custom taxonomy for countries.

---

## 1. WordPress Setup

### Categories (built-in)
Use WordPress's built-in **Categories** for the topic filter:
- Market Access
- Digital Health
- Oncology
- etc.

### Country (custom taxonomy or ACF)
You have two options:

**Option A: Custom Taxonomy (recommended)**
1. Install "Custom Post Type UI" plugin
2. Create a new taxonomy called "country" attached to Posts
3. Add country options: Europe, USA, UK, Germany, etc.

**Option B: Advanced Custom Fields**
1. Install "ACF" plugin
2. Add a text or select field called "country" to Posts
3. Install "ACF to REST API" plugin to expose the field

---

## 2. Enable REST API

WordPress REST API is enabled by default. Your posts are available at:
```
https://yoursite.com/wp-json/wp/v2/posts
```

To include featured images and categories in one request, use:
```
https://yoursite.com/wp-json/wp/v2/posts?_embed
```

---

## 3. CORS Configuration

If fetching from a different domain, add CORS headers to WordPress. In your theme's `functions.php`:

```php
add_action('rest_api_init', function() {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function($value) {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type');
        return $value;
    });
}, 15);
```

Or use a plugin like "WP REST API CORS".

---

## 4. Using in the App

The app provides utilities in `src/lib/wordpress-blog.ts`:

### Basic Usage

```tsx
import { getWordPressBlogPosts } from '@/lib/wordpress-blog';
import BlogSection from '@/components/BlogSection';

// In your component or page
const [posts, setPosts] = useState<BlogPost[]>([]);

useEffect(() => {
  getWordPressBlogPosts({
    siteUrl: 'https://blog.yoursite.com',
    perPage: 6,
  }).then(setPosts);
}, []);

return <BlogSection posts={posts} />;
```

### With React Query

```tsx
import { useQuery } from '@tanstack/react-query';
import { getWordPressBlogPosts } from '@/lib/wordpress-blog';

const { data: posts, isLoading } = useQuery({
  queryKey: ['blog-posts'],
  queryFn: () => getWordPressBlogPosts({
    siteUrl: 'https://blog.yoursite.com',
    perPage: 6,
  }),
});
```

---

## 5. Field Mapping

| WordPress Field | BlogPost Field | Used For |
|-----------------|----------------|----------|
| id | id | Unique identifier |
| slug | slug | URL path |
| title.rendered | title | Article title |
| excerpt.rendered | excerpt | Short summary |
| date | date | Formatted date |
| Categories (taxonomy) | category | **Topic filter** |
| Country (taxonomy/ACF) | country | **Country filter** |
| Featured image | coverImage | Card image |

---

## 6. Environment Variable (recommended)

Store your WordPress URL as an environment variable:

```env
VITE_WORDPRESS_URL=https://blog.yoursite.com
```

Then use it:
```tsx
const siteUrl = import.meta.env.VITE_WORDPRESS_URL;
```

---

## 7. Summary

1. **WordPress**: Use Categories for topics, add Country taxonomy or ACF field
2. **Enable CORS** if fetching from a different domain
3. **Use** `getWordPressBlogPosts()` to fetch and map posts
4. **Pass** the posts array to `<BlogSection posts={posts} />`
