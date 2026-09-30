import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { LanguageProvider } from "@/i18n/language";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="sys-page">
      <p className="sys-code">ERR:404</p>
      <h1>node not found</h1>
      <p>This layer doesn't exist in the wired. / Essa camada não existe na wired.</p>
      <Link to="/" className="wire-button">
        return to layer:00
      </Link>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="sys-page">
      <p className="sys-code">ERR:SIGNAL_LOST</p>
      <h1>connection dropped</h1>
      <p>Something went wrong. Try reconnecting or head back home.</p>
      <div className="sys-actions">
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="wire-button"
        >
          reconnect
        </button>
        <a href="/" className="wire-button ghost">
          home
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Pablo Farina — backend, arquitetura & IA aplicada" },
      {
        name: "description",
        content:
          "Pablo Farina: backend, arquitetura de software, RAG, agentes e ferramentas para desenvolvedores.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/logo-pf.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=JetBrains+Mono:wght@400;500&family=Noto+Sans+JP:wght@400;700&family=Space+Grotesk:wght@400;500;600&family=UnifrakturMaguntia&family=VT323&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Outlet />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
