import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-5">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative h-9 w-9 overflow-hidden rounded-xl">
            <Image
              src="/logo-femaf.png"
              alt="FEMAF"
              fill
              sizes="36px"
              className="object-contain p-1"
              priority
            />
          </span>
        </Link>

        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.25em] text-white/90 hover:text-white"
        >
          FEMAF DIGITAL
        </Link>

        <div className="flex-1" />
      </div>
    </header>
  );
}
