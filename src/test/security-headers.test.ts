import { describe, expect, it } from "vitest";
import { withSecurityHeaders } from "@/lib/security-headers";

describe("security headers", () => {
  it("adds browser hardening headers while preserving the response", async () => {
    const response = withSecurityHeaders(
      new Response("ok", {
        status: 201,
        headers: { "content-type": "text/plain" },
      }),
    );

    expect(response.status).toBe(201);
    expect(response.headers.get("content-type")).toBe("text/plain");
    expect(response.headers.get("x-content-type-options")).toBe("nosniff");
    expect(response.headers.get("x-frame-options")).toBe("DENY");
    expect(response.headers.get("content-security-policy")).toContain("object-src 'none'");
    expect(await response.text()).toBe("ok");
  });

  it("overrides weaker upstream values", () => {
    const response = withSecurityHeaders(
      new Response(null, { headers: { "x-frame-options": "SAMEORIGIN" } }),
    );

    expect(response.headers.get("x-frame-options")).toBe("DENY");
  });
});
