"use client";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/react";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </NextUIProvider>
  );
}
