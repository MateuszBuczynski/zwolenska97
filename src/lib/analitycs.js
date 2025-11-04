export function trackEvent(name, payload = {}) {
  try {
    if (typeof window !== "undefined") {
      if (window.dataLayer) window.dataLayer.push({ event: name, ...payload });
      if (window.gtag) window.gtag("event", name, payload);
      if (import.meta.env.DEV) console.log("[event]", name, payload);
    }
  } catch (e) {
    if (import.meta.env.DEV) console.warn("trackEvent error", e);
  }
}
