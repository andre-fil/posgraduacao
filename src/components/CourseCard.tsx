import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { whatsappUrl } from "@/lib/whatsapp";

export type CourseCardCourse = {
  slug: string;
  title: string;
  fullDescription: string;
  image?: string | StaticImageData;
};

export function CourseCard({ course }: { course: CourseCardCourse }) {
  const whatsappHref = whatsappUrl(
    `Olá, tenho interesse na pós em ${course.title}`
  );

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-glass/8 shadow-lg shadow-black/20 backdrop-blur transition duration-300 hover:scale-105 hover:border-white/20">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-28 right-8 h-56 w-56 rounded-full bg-primary/25 blur-3xl" />
      </div>

      <div className="relative">
        {course.image ? (
          <div className="relative aspect-[1080/1350] w-full overflow-hidden">
            <Image
              src={course.image}
              alt={course.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center transition duration-300 group-hover:scale-[1.03]"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </div>
        ) : (
          <div className="relative aspect-[21/9] w-full overflow-hidden bg-[radial-gradient(700px_circle_at_20%_20%,rgba(0,200,248,0.35),transparent_55%),linear-gradient(135deg,rgba(2,132,199,0.45),rgba(12,74,110,0.85))]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <p className="absolute inset-x-0 bottom-0 p-5 text-sm font-semibold tracking-tight text-white/95 sm:p-6 sm:text-base">
              {course.title}
            </p>
          </div>
        )}

        <div className="p-5 sm:p-6">
          <h3 className="text-base font-semibold tracking-tight text-white/95 sm:text-lg">
            {course.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-white/65">
            {course.fullDescription}
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#25D366]/25 transition hover:bg-[#20bd5a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/60"
            >
              Matricular
            </a>

            <Link
              href={`/curso/${course.slug}/`}
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/90 shadow-sm shadow-black/10 transition hover:border-white/25 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              Conheça mais
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

