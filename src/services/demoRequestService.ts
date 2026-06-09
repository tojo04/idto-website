export type DemoRequestPayload = {
  companyName: string;
  fullName: string;
  workEmail: string;
  phone: string;
  queriesAndRequirements: string;
  consentToContact: boolean;
};

type DemoRequestSubmission = {
  delivery: "sent" | "pending-setup";
};

type DemoRequestEndpointResponse = {
  ok?: boolean;
  message?: string;
};



const DEMO_REQUEST_ENDPOINT = "https://script.google.com/macros/s/AKfycbwf6CVybQpDqbVGG7FSxuQzBcDtAKRK7iimDrlJUh9bX7KfS3kTfwoFpR9QT8DWFlhhQw/exec";
const DEMO_REQUEST_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1OJH3O3rPi1O6r4L05THbJFueZOjFhjcCoQ7oqetVilk/edit?usp=sharing";
export async function submitDemoRequest(
  formData: DemoRequestPayload
): Promise<DemoRequestSubmission> {
  const payload = {
    ...formData,
    submittedAt: new Date().toISOString(),
    sourceUrl: window.location.href,
    googleSheetUrl: DEMO_REQUEST_SHEET_URL,
  };

  if (!DEMO_REQUEST_ENDPOINT) {
    console.info(
      "Demo request endpoint is not configured. Set VITE_DEMO_REQUEST_ENDPOINT to send form submissions."
    );
    return { delivery: "pending-setup" };
  }

  const response = await fetch(DEMO_REQUEST_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(payload),
  });

  const responseText = await response.text();
  let responseBody: DemoRequestEndpointResponse | undefined;

  if (responseText) {
    try {
      responseBody = JSON.parse(responseText) as DemoRequestEndpointResponse;
    } catch {
      responseBody = undefined;
    }
  }

  if (!response.ok || responseBody?.ok === false) {
    throw new Error(
      responseBody?.message || "Demo request endpoint failed."
    );
  }

  return { delivery: "sent" };
}
