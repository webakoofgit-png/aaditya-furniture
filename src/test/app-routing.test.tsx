import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";
import { routeTree } from "@/routeTree.gen";
describe("Showroom routes", () => {
  it.each([
    "/",
    "/about",
    "/collections",
    "/custom-furniture",
    "/wholesale",
    "/projects",
    "/contact",
    "/products/ananta-sofa",
  ])("resolves %s", (path) => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    const match = router.matchRoutes(path).at(-1);
    expect(match?.routeId).not.toBe(rootRouteId);
    expect(match?.routeId).toBeTruthy();
  });
});
