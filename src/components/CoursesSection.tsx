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

  return (
    <section id="cursos" className="mt-10 sm:mt-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-sm font-semibold tracking-[0.25em] text-white/80">
            CURSOS
          </h2>
          <p className="mt-1 text-xs text-white/45">
            Filtre por área de conhecimento
          </p>
        </div>
        <p className="text-xs text-white/50 sm:text-right">
          {filter === "todas" ? (
            <>{courses.length} opções</>
          ) : (
            <>
              {filtered.length} de {courses.length}{" "}
              {filtered.length === 1 ? "curso" : "cursos"}
            </>
          )}
        </p>
      </div>

      <div
        className="mt-4 flex flex-wrap gap-2"
        role="group"
        aria-label="Filtrar cursos por área"
      >
        {filterLabels.map(({ id, label }) => {
          const active = filter === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              aria-pressed={active}
              className={`rounded-full border px-3.5 py-2 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 sm:text-sm ${
                active
                  ? "border-primary/60 bg-primary/25 text-white shadow-sm shadow-primary/15"
                  : "border-white/12 bg-white/5 text-white/75 hover:border-white/20 hover:bg-white/10 hover:text-white"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 rounded-xl border border-white/10 bg-white/5 px-4 py-6 text-center text-sm text-white/65">
          Nenhum curso nesta área no momento.
        </p>
      ) : (
        <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
