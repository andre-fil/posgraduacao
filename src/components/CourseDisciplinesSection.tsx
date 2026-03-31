"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Discipline = {
  name: string;
  workload?: number;
};

export function CourseDisciplinesSection({
  disciplines,
}: {
  disciplines: Discipline[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  const totalWorkload = useMemo(() => {
    const sum = disciplines.reduce((acc, d) => acc + (d.workload ?? 0), 0);
    return sum > 0 ? sum : null;
  }, [disciplines]);

  return (
    <section className="mt-6 rounded-2xl border border-white/10 bg-glass/8 p-6 shadow-lg shadow-black/20 backdrop-blur sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-sm font-semibold tracking-[0.25em] text-white/80">
            DISCIPLINAS
          </h2>
          <p className="mt-3 text-sm text-white/70">
            Mais de <span className="font-semibold text-white">{disciplines.length}</span>{" "}
            disciplinas
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {totalWorkload ? (
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
              Carga horária total:{" "}
              <span className="font-semibold text-white">{totalWorkload}h</span>
            </span>
          ) : null}

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/90 shadow-sm shadow-black/10 transition hover:scale-[1.02] hover:border-white/25 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
          >
            Ver grade completa
          </button>
        </div>
      </div>

      <motion.div
        className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.06 } },
        }}
      >
        {disciplines.map((d) => (
          <motion.div
            key={d.name}
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
            }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 0 1px rgba(59,130,246,0.22), 0 18px 40px rgba(0,0,0,0.45)",
            }}
            className="group rounded-xl border border-white/10 bg-white/5 p-5 transition"
          >
            <div className="flex items-start gap-4">
              <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-accent">
                <BookIcon />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold leading-6 text-white/90">
                  {d.name}
                </p>
                {typeof d.workload === "number" ? (
                  <p className="mt-2 text-xs text-white/65">
                    Carga horária:{" "}
                    <span className="font-semibold text-white/80">
                      {d.workload}h
                    </span>
                  </p>
                ) : (
                  <p className="mt-2 text-xs text-white/50">Carga horária: —</p>
                )}
              </div>
              <span className="hidden text-white/30 transition group-hover:text-white/45 sm:inline">
                <CapIcon />
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/60"
              aria-label="Fechar modal"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0e]/80 shadow-2xl shadow-black/60 backdrop-blur"
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-between gap-4 border-b border-white/10 p-5">
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-[0.35em] text-white/60">
                    GRADE COMPLETA
                  </p>
                  <p className="mt-1 truncate text-sm font-semibold text-white/90">
                    {disciplines.length} disciplinas
                    {totalWorkload ? ` • ${totalWorkload}h` : ""}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 transition hover:border-white/20 hover:bg-white/10"
                >
                  Fechar
                </button>
              </div>

              <div className="max-h-[70vh] overflow-auto p-5">
                <div className="grid grid-cols-1 gap-3">
                  {disciplines.map((d) => (
                    <div
                      key={`modal-${d.name}`}
                      className="rounded-xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-sm font-semibold text-white/90">
                          {d.name}
                        </p>
                        {typeof d.workload === "number" ? (
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                            {d.workload}h
                          </span>
                        ) : (
                          <span className="text-xs text-white/45">—</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

function BookIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M4.5 19.5V6.5C4.5 5.67157 5.17157 5 6 5H18C18.8284 5 19.5 5.67157 19.5 6.5V19.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M7 8H17"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M7 11H15"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M6.5 19.5H19.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CapIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M3 8.5L12 4L21 8.5L12 13L3 8.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M7 11V16C7 16 9 18 12 18C15 18 17 16 17 16V11"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M21 8.5V15"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

