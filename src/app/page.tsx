import Link from "next/link";
import { CoursesSection } from "@/components/CoursesSection";
import { courses } from "@/data/courses";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:py-16">
        <section className="fade-in-up">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-glass/8 shadow-lg shadow-black/20 backdrop-blur">
            {/* Proporção alvo: 1920×600 — no mobile um pouco mais alta para caber o conteúdo */}
            <div className="relative aspect-[4/3] w-full sm:aspect-[2/1] lg:aspect-[1920/600]">
              <div
                className="absolute inset-0 bg-[radial-gradient(800px_circle_at_20%_40%,rgba(59,130,246,0.25),transparent_50%),radial-gradient(600px_circle_at_85%_20%,rgba(30,58,138,0.35),transparent_45%),linear-gradient(115deg,rgba(15,23,42,0.92),rgba(15,23,42,0.75))]"
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent"
                aria-hidden
              />
              <div className="relative flex h-full min-h-[11rem] flex-col justify-end gap-6 p-7 sm:min-h-0 sm:flex-row sm:items-end sm:justify-between sm:p-10">
                <div className="max-w-2xl">
                  <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    Pós-graduação EAD FEMAF
                  </h1>
                  <p className="mt-4 text-sm leading-6 text-white/80 sm:text-base">
                    Avance na sua carreira com especializações de alto nível
                  </p>
                </div>

                <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="https://wa.me/558008785129"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md shadow-primary/25 transition hover:bg-primary/90 hover:shadow-primary/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                  >
                    Falar no WhatsApp
                  </a>
                  <Link
                    href="#cursos"
                    className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm transition hover:border-white/25 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                  >
                    Ver cursos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CoursesSection courses={courses} />
    </div>
  );
}
