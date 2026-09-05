import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { CopyButton } from "@/components/copy-button";
import { shareAll, statuses } from "@/lib/content";

export const Route = createFileRoute("/status")({ component: StatusPage });

function StatusPage() {
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
          व्हाट्सएप स्ट्याटस
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold">
          दैनिक सेयरका लागि तयार पाठ
        </h1>
        <p className="mt-3 max-w-2xl text-muted">
          स्क्रिप्टका बुँदा मात्र। अनुमान थपिएको छैन। प्रत्येक कार्ड कपी गरेर
          स्ट्याटसमा राख्नुहोस्—क्रम: हुक, विधि, निरीक्षण, सीमा, सेयर।
        </p>

        <div className="mt-6">
          <CopyButton text={shareAll} label="पूरा शृङ्खला कपी गर्नुहोस्" />
        </div>

        <ol className="mt-10 grid gap-5 md:grid-cols-2">
          {statuses.map((s, i) => (
            <li
              key={s.label}
              className="flex flex-col rounded-xl border border-border bg-elevated p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="font-display text-sm text-muted">
                  {i + 1} · {s.label}
                </p>
                <CopyButton text={s.text} />
              </div>
              <p className="mt-4 flex-1 whitespace-pre-line text-sm leading-relaxed">
                {s.text}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-10 max-w-2xl text-sm text-muted">
          दृश्य सुझाव: परिवार र कारीगरबीच शान्त छलफल; अन्त्यमा जाँचसूचीमा टिक
          लगाएको दृश्य। अनुमानित अवधि: १:१०–२:२०।
        </p>
      </main>
    </div>
  );
}
