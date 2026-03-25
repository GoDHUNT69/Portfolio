# Portfolio (Next.js)

This project is ready for Vercel free deployment.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Vercel (free tier)

1. Push this repository to GitHub.
2. Go to `https://vercel.com/new`.
3. Import your GitHub repository.
4. Keep defaults:
   - Framework Preset: `Next.js`
   - Build Command: `next build`
   - Output Directory: `.next` (auto)
5. Click `Deploy`.
6. After deploy, open your free domain:
   - `https://<project-name>.vercel.app`

## Connect a custom domain

1. In Vercel project dashboard, go to `Settings` -> `Domains`.
2. Add your domain (for example `yourname.dev`).
3. In your domain registrar, add the DNS records Vercel shows.
4. Wait for SSL to be issued automatically.

Note: `.dev` domains are paid domains, but hosting on Vercel Hobby can still be free.

## Production commands

```bash
npm run build
npm run start
```
