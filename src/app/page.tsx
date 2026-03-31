import Link from "next/link";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/data/courses";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:py-16">
        <section className="fade-in-up">
          <div className="rounded-2xl border border-white/10 bg-glass/8 p-7 shadow-lg shadow-black/20 backdrop-blur sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold tracking-[0.35em] text-white/70">
                  FEMAF DIGITAL
                </p>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Pós-graduação EAD FEMAF
                </h1>
                <p className="mt-4 text-sm leading-6 text-white/70 sm:text-base">
                  Avance na sua carreira com especializações de alto nível
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
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
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:border-white/25 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                >
                  Ver cursos
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="cursos" className="mt-10 sm:mt-12">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-sm font-semibold tracking-[0.25em] text-white/80">
              CURSOS
            </h2>
            <span className="text-xs text-white/50">{courses.length} opções</span>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, idx) => (
              <div
                key={course.slug}
                className="fade-in-up"
                style={{ animationDelay: `${Math.min(600, idx * 80)}ms` }}
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </section>
    </div>
  );
}
