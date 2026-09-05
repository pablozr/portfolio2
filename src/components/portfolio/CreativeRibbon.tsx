import { useLanguage } from "@/i18n/language";

export function CreativeRibbon() {
  const { locale } = useLanguage();
  const pt = locale === "pt-BR";
  const words = pt
    ? ["Imaginar.", "Construir.", "Surpreender."]
    : ["Imagine.", "Build.", "Surprise."];
  return (
    <div className="creative-ribbon" aria-hidden="true">
      <div className="ribbon-caption micro">
        <span>{pt ? "ENTRE A LÓGICA E O INESPERADO" : "BETWEEN LOGIC AND THE UNEXPECTED"}</span>
        <span>DESIGN ↔ DEVELOPMENT</span>
      </div>
      <div className="ribbon-window">
        <div className="ribbon-track">
          {[0, 1].map((group) => (
            <div className="ribbon-group" key={group}>
              {[0, 1].map((repeat) =>
                words.map((word, index) => (
                  <span className="ribbon-item" key={`${repeat}-${word}`}>
                    <span className={index === 1 ? "serif" : index === 2 ? "ribbon-outline" : ""}>
                      {word}
                    </span>
                    <span className="ribbon-star">✳</span>
                  </span>
                )),
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="ribbon-baseline">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
