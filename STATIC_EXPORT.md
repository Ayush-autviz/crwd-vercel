# Static Export Configuration for Next.js

This project is now configured for static site generation, similar to Vite's `dist/` folder output.

## How to Build Static Files

### Development
```bash
npm run dev
```

### Build Static Site
```bash
npm run build:static
# or
npm run build
```

This will create an `out/` folder containing all the static files ready for deployment.

## Deployment

The generated `out/` folder can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `out/` folder or connect your Git repository
- **Vercel**: Use `vercel --prod` or connect your Git repository
- **GitHub Pages**: Upload the `out/` folder contents to your gh-pages branch
- **Firebase Hosting**: Use `firebase deploy` with the `out/` folder
- **Surge.sh**: Use `surge out/` to deploy
- **AWS S3**: Upload the `out/` folder to your S3 bucket

## Configuration Details

The following has been configured in `next.config.ts`:

- `output: 'export'` - Enables static site generation
- `images.unoptimized: true` - Disables Next.js image optimization for static export
- `trailingSlash: true` - Adds trailing slashes to URLs for better static hosting compatibility

## Dynamic Routes

All dynamic routes have been configured with `generateStaticParams()` functions:

- `/posts/[id]/` - Post detail pages
- `/profile/[id]/` - Profile pages  
- `/profile/[id]/statistics/` - Profile statistics pages
- `/your-crwds/[id]/` - CRWD detail pages

## Important Notes

1. **No Server-Side Features**: API routes, server-side rendering, and other server features won't work
2. **Image Optimization**: Images are not optimized by default (can be re-enabled with custom loaders)
3. **Static Only**: All data must be available at build time
4. **Base Path**: Uncomment and configure `basePath` in `next.config.ts` if deploying to a subdirectory

## File Structure

After running `npm run build`, you'll get:
```
out/
├── _next/          # Next.js assets
├── posts/          # Static post pages
├── profile/        # Static profile pages
├── index.html      # Home page
└── ...            # Other static pages
``` 