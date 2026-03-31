import Link from "next/link";
import Image from "next/image";
import { courses } from "@/data/courses";
import { CourseDisciplinesSection } from "@/components/CourseDisciplinesSection";

export const dynamicParams = false;
export const dynamic = "force-static";

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export default function CursoPage({
  params,
}: {
  params: { slug: string };
}) {
  const course = courses.find((c) => c.slug === params.slug);
  const whatsappHref = course
    ? `https://wa.me/558008785129?text=${encodeURIComponent(
        `Olá, tenho interesse na pós em ${course.title}`
      )}`
    : "";

  if (!course) {
    return (
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:py-16">
        <div className="rounded-2xl border border-white/10 bg-glass/8 p-7 shadow-lg shadow-black/20 backdrop-blur sm:p-10">
          <p className="text-xs font-semibold tracking-[0.35em] text-white/70">
            FEMAF DIGITAL
          </p>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Curso não encontrado
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">
            Não encontramos um curso com esse endereço. Verifique o link ou volte
            para a lista de cursos.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md shadow-primary/25 transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              Voltar para o início
            </Link>
            <Link
              href="/#cursos"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:border-white/25 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              Ver cursos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:py-12">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="text-sm text-accent hover:underline">
          Voltar
        </Link>
        <span className="font-mono text-xs text-white/40">/{course.slug}</span>
      </div>

      <section className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-glass/8 shadow-lg shadow-black/20 backdrop-blur">
        <div className="relative aspect-[21/9] w-full">
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <p className="text-xs font-semibold tracking-[0.35em] text-white/70">
              PÓS-GRADUAÇÃO EAD
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
              {course.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-white/10 bg-glass/8 p-6 shadow-lg shadow-black/20 backdrop-blur sm:p-8">
            <h2 className="text-sm font-semibold tracking-[0.25em] text-white/80">
              SOBRE O CURSO
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
              {course.fullDescription}
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-glass/8 p-6 shadow-lg shadow-black/20 backdrop-blur sm:p-8">
            <h2 className="text-sm font-semibold tracking-[0.25em] text-white/80">
              EMENTA
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
              {course.syllabus}
            </p>
          </div>

          <CourseDisciplinesSection disciplines={course.disciplines} />
        </div>

        <aside className="lg:col-span-1">
          <div className="rounded-2xl border border-white/10 bg-glass/8 p-6 shadow-lg shadow-black/20 backdrop-blur sm:p-8">
            <h2 className="text-sm font-semibold tracking-[0.25em] text-white/80">
              INVESTIMENTO
            </h2>
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs text-white/60">Preço</p>
              <p className="mt-1 text-2xl font-semibold tracking-tight text-white">
                {course.price}
              </p>
              <p className="mt-2 text-xs leading-5 text-white/55">
                Condições e disponibilidade podem variar.
              </p>
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-white shadow-md shadow-primary/25 transition hover:bg-primary/90 hover:shadow-primary/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              Matricular via WhatsApp
            </a>

            <p className="mt-4 text-xs leading-5 text-white/55">
              Você será direcionado para o WhatsApp com a mensagem pronta.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}

