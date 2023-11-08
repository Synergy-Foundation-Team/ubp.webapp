"use client";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          {children}
        </SessionProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </NextUIProvider>
  );
}
