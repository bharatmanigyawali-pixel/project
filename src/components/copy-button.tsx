import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function CopyButton({
  text,
  label = "कपी गर्नुहोस्",
}: {
  text: string;
  label?: string;
}) {
  const [done, setDone] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setDone(true);
      toast.success("पाठ कपी भयो");
      window.setTimeout(() => setDone(false), 1800);
    } catch {
      toast.error("कपी गर्न सकिएन");
    }
  }

  return (
    <Button type="button" variant="outline" size="sm" onClick={copy}>
      {done ? <Check className="size-4" /> : <Copy className="size-4" />}
      {done ? "कपी भयो" : label}
    </Button>
  );
}
