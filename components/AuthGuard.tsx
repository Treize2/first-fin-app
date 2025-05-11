"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/login") return;
    const cookies = document.cookie.split(';').map(c => c.trim());
    const auth = cookies.find(c => c.startsWith("auth="));
    if (!auth || auth.split("=")[1] !== "ok") {
      router.replace("/login");
    }
  }, [pathname, router]);

  return <>{children}</>;
} 