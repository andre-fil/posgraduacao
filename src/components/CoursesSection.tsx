"use client";

import { useMemo, useState } from "react";
import { CourseCard } from "@/components/CourseCard";
import type { Course, CourseAreaId } from "@/data/courses";
import { courseAreaOptions } from "@/data/courses";

type FilterId = "todas" | CourseAreaId;

const filterLabels: { id: FilterId; label: string }[] = [
  { id: "todas", label: "Todas as áreas" },
  ...courseAreaOptions,
];

export function CoursesSection({ courses }: { courses: Course[] }) {
  const [filter, setFilter] = useState<FilterId>("todas");

  const filtered = useMemo(
    () =>
      filter === "todas"
        ? courses
        : courses.filter((c) => c.area === filter),
    [courses, filter]
  );

  const sectionsWhenAll = useMemo(() => {
    if (filter !== "todas") return null;
    return courseAreaOptions
      .map((opt) => ({
        id: opt.id,
        label: opt.label,
        courses: courses.filter((c) => c.area === opt.id),
      }))
      .filter((s) => s.courses.length > 0);
  }, [courses, filter]);

  return (
    <section id="cursos" className="mt-8 sm:mt-12">
      <div className="flex items-start justify-between gap-3 sm:items-end">
        <div className="min-w-0 flex-1">
          <h2 className="text-sm font-semibold tracking-[0.25em] text-white/80">
            CURSOS
          </h2>
          <p className="mt-0.5 hidden text-xs text-white/45 sm:mt-1 sm:block">
            Filtre por área de conhecimento
          </p>
        </div>
        <p className="shrink-0 pt-0.5 text-right text-[11px] text-white/50 sm:pt-0 sm:text-xs">
          {filter === "todas" ? (
            <>{courses.length} opções</>
          ) : (
            <>
              <span className="tabular-nums sm:hidden">
                {filtered.length}/{courses.length}
              </span>
              <span className="hidden sm:inline">
                {filtered.length} de {courses.length}{" "}
                {filtered.length === 1 ? "curso" : "cursos"}
              </span>
            </>
          )}
        </p>
      </div>

      {/* Mobile: uma linha com scroll horizontal (menos altura → mais espaço para os cards) */}
      <div
        className="relative -mx-1 mt-2 sm:mx-0 sm:mt-4"
        role="group"
        aria-label="Filtrar cursos por área"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-4 bg-gradient-to-r from-[#0a0a0a] to-transparent sm:hidden" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-4 bg-gradient-to-l from-[#0a0a0a] to-transparent sm:hidden" />
        <div className="flex snap-x snap-mandatory gap-2 overflow-x-auto overflow-y-hidden pb-1 pt-0.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:overflow-visible sm:pb-0 sm:pt-0 [&::-webkit-scrollbar]:hidden">
          {filterLabels.map(({ id, label }) => {
            const active = filter === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setFilter(id)}
                aria-pressed={active}
                className={`shrink-0 snap-start whitespace-nowrap rounded-full border px-3 py-2 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 sm:px-3.5 sm:text-sm ${
                  active
                    ? "border-primary/60 bg-primary/25 text-white shadow-sm shadow-primary/15"
                    : "border-white/12 bg-white/5 text-white/75 active:bg-white/15 sm:hover:border-white/20 sm:hover:bg-white/10 sm:hover:text-white"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-6 rounded-xl border border-white/10 bg-white/5 px-4 py-6 text-center text-sm text-white/65 sm:mt-8">
          Nenhum curso nesta área no momento.
        </p>
      ) : filter === "todas" && sectionsWhenAll ? (
        <div className="mt-4 sm:mt-5">
          {sectionsWhenAll.map((section, sectionIdx) => {
            const cardIndexOffset = sectionsWhenAll
              .slice(0, sectionIdx)
              .reduce((n, s) => n + s.courses.length, 0);
            return (
              <section
                key={section.id}
                id={`cursos-${section.id}`}
                aria-labelledby={`heading-${section.id}`}
                className={
                  sectionIdx === 0
                    ? ""
                    : "mt-10 border-t border-white/10 pt-10 sm:mt-12 sm:pt-12"
                }
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
                  <h3
                    id={`heading-${section.id}`}
                    className="shrink-0 text-xs font-semibold tracking-[0.28em] text-white/75 sm:text-sm"
                  >
                    {section.label}
                  </h3>
                  <div
                    className="h-px flex-1 bg-gradient-to-r from-white/20 via-white/10 to-transparent sm:mt-0"
                    aria-hidden
                  />
                </div>
                <div className="mt-4 grid grid-cols-1 gap-5 sm:mt-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                  {section.courses.map((course, j) => {
                    const idx = cardIndexOffset + j;
                    return (
                      <div
                        key={course.slug}
                        className="fade-in-up"
                        style={{
                          animationDelay: `${Math.min(600, idx * 80)}ms`,
                        }}
                      >
                        <CourseCard course={course} />
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        <div className="mt-4 grid grid-cols-1 gap-5 sm:mt-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {filtered.map((course, idx) => (
            <div
              key={course.slug}
              className="fade-in-up"
              style={{ animationDelay: `${Math.min(600, idx * 80)}ms` }}
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
