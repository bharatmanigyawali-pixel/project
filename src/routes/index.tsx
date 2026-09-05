import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ListChecks, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { steps } from "@/lib/content";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <SiteHeader />
      <main>
        <Hero />
        <Hook />
        <Problem />
        <Method />
        <StepsPreview />
        <Limit />
        <Cta />
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="font-display text-lg font-semibold tracking-tight">
          भूमि ज्ञान
        </Link>
        <nav className="flex items-center gap-1">
          <Link
            to="/steps"
            className="inline-flex h-11 items-center rounded-md px-3 text-sm text-muted hover:text-fg"
          >
            चार चरण
          </Link>
          <Link
            to="/status"
            className="inline-flex h-11 items-center rounded-md px-3 text-sm text-muted hover:text-fg"
          >
            स्ट्याटस
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-10 pt-8 sm:pt-12">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted">
        जनचेतना · वास्तु परामर्श
      </p>
      <h1 className="max-w-3xl font-display text-3xl font-semibold text-fg">
        खाल्डोमा पानी भरेर भूमि हेर्ने परम्परा
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        शीर्षक सामान्य सुनिन्छ, तर यसको प्रसङ्ग अर्कै हुन सक्छ।
      </p>
      <div className="mt-8 overflow-hidden rounded-xl">
        <img
          src="/images/homestead.jpg"
          alt="बिहानको शान्त नेपाली बस्ती, घर बनाउने खाली भूमि"
          className="aspect-video w-full object-cover"
        />
      </div>
    </section>
  );
}

function Hook() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-8">
      <h2 className="font-display text-xl font-semibold">समस्या</h2>
      <p className="mt-4 text-base text-fg">
        घर बनाउने भूमि हेर्दा माथिबाट देखिने स्वरूप मात्रै देखिन्छ। तर
        बृहद्वास्तुमालामा भूमिको परीक्षण गर्न छुट्टै विधि पनि वर्णन गरिएको छ।
        आज त्यसैमध्ये पानीसँग सम्बन्धित एउटा विधि बुझौँ।
      </p>
      <p className="mt-4 text-base text-muted">
        यसमा पानी भरेर तुरुन्त निष्कर्ष निकालिँदैन; ग्रन्थले त्यसपछि के गर्ने
        भन्ने क्रम पनि दिएको छ।
      </p>
    </section>
  );
}

function Problem() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-6">
      <div className="overflow-hidden rounded-xl">
        <img
          src="/images/discussion.jpg"
          alt="भूमि हेर्दै परिवार र कारीगरबीच शान्त छलफल"
          className="aspect-video w-full object-cover"
        />
      </div>
    </section>
  );
}

function Method() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-8">
      <h2 className="font-display text-xl font-semibold">ग्रन्थमा भनिएको क्रम</h2>
      <p className="mt-4 text-base">
        विश्वकर्मप्रकाशको मत प्रस्तुत गरिएको अंशमा गृहस्वामी वा प्रधान कारीगरको
        हातको मापअनुसार एक–एक हात लम्बाइ, चौडाइ र गहिराइ भएको खाल्डो बनाउने
        भनिएको छ। त्यसमा पानी भरिन्छ। त्यसपछि एक सय कदम टाढा गएर फर्की पानीको
        अवस्था हेरिन्छ।
      </p>
      <p className="mt-4 text-base text-muted">
        पानी भरिएकै अवस्थामा रहेको, केही घटेको वा धेरै घटेको आधारमा भूमिको
        परम्परागत मूल्याङ्कन गरिएको छ। अर्थ स्पष्ट छ: कथनमा जति छ, त्यति नै
        ग्रहण गर्ने; बाहिरको कारण वा परिणाम नजोड्ने।
      </p>
    </section>
  );
}

function StepsPreview() {
  return (
    <section className="border-y border-border bg-surface/60">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-xl font-semibold">चार चरण सँगै</h2>
            <p className="mt-2 max-w-xl text-sm text-muted">
              कुनै एउटा चरण छुटाएर यही परीक्षणको नतिजा भन्न मिल्दैन।
            </p>
          </div>
          <Button asChild>
            <Link to="/steps">
              जाँचसूची हेर्नुहोस्
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <ol className="grid gap-4 sm:grid-cols-2">
          {steps.map((s) => (
            <li
              key={s.n}
              className="rounded-lg border border-border bg-elevated p-5"
            >
              <p className="font-display text-sm text-muted">चरण {s.n}</p>
              <h3 className="mt-1 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Limit() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h2 className="font-display text-xl font-semibold">के दाबी नगर्ने</h2>
      <p className="mt-4 text-base">
        यसलाई ग्रन्थमा वर्णित परम्परागत परीक्षणकै रूपमा बुझ्नुहोस्। यसबाट मात्र
        घरको निर्माण-सुरक्षा प्रमाणित भएको दाबी नगरौँ। परिवारले सुनेका कुरा
        पहिले लेख्नुहोस्। मूल स्क्रिप्टमा भएको बुँदासँग मिल्ने कुरा मात्र राखेर
        बाँकी अनुमान हटाउनुहोस्।
      </p>
    </section>
  );
}

function Cta() {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-16">
      <div className="rounded-xl border border-border bg-primary px-6 py-10 text-primary-foreground sm:px-10">
        <h2 className="font-display text-2xl font-semibold">
          स्पष्ट निर्णयबाट पनि ऊर्जा आउँछ
        </h2>
        <p className="mt-3 max-w-2xl text-primary-foreground/85">
          यो सरल ज्ञान आवश्यक परिवारसम्म पुर्‍याउन सेयर गर्नुहोस्। अनुमानित अवधि:
          १:१०–२:२०।
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-elevated text-fg hover:bg-elevated/90"
          >
            <Link to="/status">
              <Share2 className="size-4" />
              व्हाट्सएप स्ट्याटस
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary/80"
          >
            <Link to="/steps">
              <ListChecks className="size-4" />
              चार चरण
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border px-4 py-8 text-center text-sm text-muted">
      भूमि ज्ञान · वास्तु परामर्शका लागि जनचेतना सामग्री
    </footer>
  );
}
