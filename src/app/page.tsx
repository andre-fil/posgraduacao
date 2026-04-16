import Link from "next/link";
import Image from "next/image";
import { CoursesSection } from "@/components/CoursesSection";
import { courses } from "@/data/courses";
import imgCapaEad from "@/app/img/capa-ead-site.png";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:py-16">
        <section className="fade-in-up">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-glass/8 shadow-lg shadow-black/20 backdrop-blur">
            {/* Proporção alvo: 1920×600 — no mobile um pouco mais alta para caber o conteúdo */}
            <div className="relative aspect-[4/3] w-full sm:aspect-[2/1] lg:aspect-[1920/600]">
              <Image
                src={imgCapaEad}
                alt="Pós-graduação EAD FEMAF"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1152px"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-[radial-gradient(980px_circle_at_20%_35%,rgba(0,200,248,0.5),transparent_56%),radial-gradient(760px_circle_at_84%_18%,rgba(0,200,248,0.34),transparent_50%),linear-gradient(120deg,rgba(0,200,248,0.28),rgba(14,116,144,0.08))]"
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-slate-950/18 via-slate-900/4 to-cyan-200/10"
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
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-cyan-600/30 transition hover:brightness-105 hover:shadow-cyan-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
                  >
                    Falar no WhatsApp
                  </a>
                  <Link
                    href="#cursos"
                    className="inline-flex items-center justify-center rounded-xl border border-cyan-200/30 bg-cyan-100/10 px-5 py-3 text-sm font-semibold text-white/95 backdrop-blur-sm transition hover:border-cyan-100/45 hover:bg-cyan-100/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
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
