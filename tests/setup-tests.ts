import { vi } from "vitest";

// Override any jest functions.
Object.assign(globalThis, { jest: vi });
