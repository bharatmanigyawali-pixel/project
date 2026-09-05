import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { steps } from "@/lib/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/steps")({ component: StepsPage });

function StepsPage() {
  const [done, setDone] = useState<boolean[]>([false, false, false, false]);
  const all = useMemo(() => done.every(Boolean), [done]);

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3">
          <Link
            to="/"
            className="inline-flex h-11 items-center gap-2 text-sm text-muted hover:text-fg"
          >
            <ArrowLeft className="size-4" />
            फर्कनुहोस्
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          जाँचसूची
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold">चार चरण</h1>
        <p className="mt-3 max-w-2xl text-muted">
          तोकिएको मापको खाल्डो, त्यसमा पानी, एक सय कदमको दूरी र फर्केपछि
          निरीक्षण—यी सँगै सम्झनुहोस्।
        </p>

        <ul className="mt-10 space-y-8">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="overflow-hidden rounded-xl border border-border bg-elevated"
            >
              <img
                src={s.image}
                alt={s.alt}
                className="aspect-video w-full object-cover"
              />
              <div className="p-5 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-sm text-muted">चरण {s.n}</p>
                    <h2 className="mt-1 font-display text-xl font-semibold">
                      {s.title}
                    </h2>
                  </div>
                  <button
                    type="button"
                    aria-pressed={done[i]}
                    onClick={() =>
                      setDone((prev) => {
                        const next = [...prev];
                        next[i] = !next[i];
                        return next;
                      })
                    }
                    className={cn(
                      "inline-flex h-11 shrink-0 items-center justify-center gap-1.5 rounded-md border px-3 text-sm transition-colors",
                      done[i]
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-transparent text-muted",
                    )}
                  >
                    <Check className="size-4" />
                    टिक
                  </button>
                </div>
                <p className="mt-3 text-base text-muted">{s.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <div
          className={cn(
            "mt-10 rounded-lg border px-5 py-5",
            all
              ? "border-primary bg-surface text-fg"
              : "border-border bg-elevated text-muted",
          )}
        >
          {all
            ? "चारै चरण चिन्ह लगाइयो। अब यो परीक्षणको नतिजा भन्न मिल्ने आधार पूरा भयो—तर यसबाट मात्र निर्माण-सुरक्षा प्रमाणित भएको दाबी नगर्नुहोस्।"
            : "अझै सबै चरण चिन्ह लागेको छैन। एउटा चरण छुटाएर नतिजा नभन्नुहोस्।"}
        </div>

        <div className="mt-8">
          <Button asChild>
            <Link to="/status">स्ट्याटस पाठ हेर्नुहोस्</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
