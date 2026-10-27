"use client";
import { Toaster } from "sonner";
export default function ToastProvider() {
  return <Toaster position="bottom-right" theme="dark" richColors toastOptions={{ style: { background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.12)", color: "#f7f3e8" } }} />;
}
