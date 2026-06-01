import type { Mixpanel } from "mixpanel-browser";

type AnalyticsPropertyValue = string | number | boolean | null | undefined;
type AnalyticsProperties = Record<string, AnalyticsPropertyValue>;

export type AnalyticsEventName =
  | "Page Viewed"
  | "CTA Clicked"
  | "Demo Modal Opened"
  | "Demo Request Submit Attempted"
  | "Demo Request Submitted"
  | "Demo Request Failed"
  | "Live Demo Opened"
  | "Live Demo Iframe Loaded";

let lastPageViewKey = "";
let analyticsAvailable: boolean | null = null;
let mixpanelClient: Mixpanel | null = null;
let mixpanelLoadPromise: Promise<Mixpanel | null> | null = null;

function isBrowser() {
  return typeof window !== "undefined";
}

function envFlag(name: string, fallback: boolean) {
  const value = import.meta.env[name];

  if (value === undefined) return fallback;

  return value === "true";
}

function normalizeApiHost(apiHost: string | undefined) {
  const trimmedHost = apiHost?.trim();

  if (!trimmedHost) return undefined;

  const hostWithProtocol = /^https?:\/\//i.test(trimmedHost)
    ? trimmedHost
    : `https://${trimmedHost}`;

  return hostWithProtocol.replace(/\/+$/, "");
}

function canUseAnalytics() {
  if (analyticsAvailable !== null) return analyticsAvailable;

  const token = import.meta.env.VITE_MIXPANEL_TOKEN?.trim();
  const enabled = envFlag("VITE_MIXPANEL_ENABLED", true);

  analyticsAvailable = isBrowser() && enabled && Boolean(token);

  return analyticsAvailable;
}

function cleanProperties(properties: AnalyticsProperties) {
  return Object.fromEntries(
    Object.entries(properties).filter(([, value]) => value !== undefined)
  );
}

function pageProperties(): AnalyticsProperties {
  if (!isBrowser()) return {};

  const url = new URL(window.location.href);

  return {
    page_path: url.pathname,
    page_search: url.search || undefined,
    page_hash: url.hash || undefined,
    page_url: window.location.href,
    page_title: document.title || undefined,
    referrer: document.referrer || undefined,
  };
}

async function loadMixpanel() {
  if (!canUseAnalytics()) return null;
  if (mixpanelClient) return mixpanelClient;
  if (mixpanelLoadPromise) return mixpanelLoadPromise;

  mixpanelLoadPromise = import("mixpanel-browser")
    .then(({ default: mixpanel }) => {
      const token = import.meta.env.VITE_MIXPANEL_TOKEN?.trim();
      const apiHost = normalizeApiHost(import.meta.env.VITE_MIXPANEL_API_HOST);

      if (!token) return null;

      mixpanel.init(token, {
        ...(apiHost ? { api_host: apiHost } : {}),
        autocapture: false,
        debug: import.meta.env.DEV,
        ignore_dnt: false,
        ip: envFlag("VITE_MIXPANEL_IP_TRACKING", true),
        opt_out_tracking_by_default: envFlag(
          "VITE_MIXPANEL_OPT_OUT_BY_DEFAULT",
          false
        ),
        persistence: "localStorage",
        secure_cookie: window.location.protocol === "https:",
        track_pageview: false,
      });

      mixpanel.register({
        app: "idto.ai website",
        environment: import.meta.env.MODE,
      });

      mixpanelClient = mixpanel;
      return mixpanelClient;
    })
    .catch(() => null);

  return mixpanelLoadPromise;
}

export function initAnalytics() {
  void loadMixpanel();
}

export function optInAnalytics() {
  void loadMixpanel().then((mixpanel) => {
    mixpanel?.opt_in_tracking();
  });
}

export function optOutAnalytics() {
  void loadMixpanel().then((mixpanel) => {
    mixpanel?.opt_out_tracking();
  });
}

export function trackEvent(
  eventName: AnalyticsEventName,
  properties: AnalyticsProperties = {}
) {
  const eventProperties = cleanProperties({
    ...pageProperties(),
    ...properties,
  });

  void loadMixpanel().then((mixpanel) => {
    mixpanel?.track(eventName, eventProperties);
  });
}

export function trackPageView(properties: AnalyticsProperties = {}) {
  if (!isBrowser()) return;

  const url = new URL(window.location.href);
  const pageViewKey = `${url.pathname}${url.search}${url.hash}`;

  if (pageViewKey === lastPageViewKey) return;

  lastPageViewKey = pageViewKey;

  trackEvent("Page Viewed", properties);
}
