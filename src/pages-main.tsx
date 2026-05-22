import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LanguageProvider } from "@/i18n/language";
import { Page } from "@/routes/index";
import "./styles.css";

function StaticApp() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  );
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Elemento #root nao encontrado.");
}

createRoot(rootElement).render(
  <StrictMode>
    <StaticApp />
  </StrictMode>,
);
