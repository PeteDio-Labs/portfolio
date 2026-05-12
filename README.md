# portfolio — petedillo.com

Personal portfolio site for Pedro Delgadillo. Vite + React + TypeScript with
Apple liquid-glass theming inherited from Mission Control web.

## Develop

```sh
bun install
bun run dev      # http://localhost:5173
bun run build    # static bundle in dist/
bun run typecheck
```

## Deploy

- Image: `docker.pdlab.dev/portfolio:main-latest`
- Manifests: `infrastructure/kubernetes/portfolio/`
- ArgoCD app: `infrastructure/kubernetes/control-plane/argocd/applications/portfolio.yaml`
- DNS: `petedillo.com` &rarr; Cloudflare Tunnel &rarr; cluster ingress

Pushes to `main` build + tag the image. ArgoCD Image Updater syncs the
digest into the GitOps repo and ArgoCD rolls the Deployment.
