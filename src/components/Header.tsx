import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-center px-5">
        <Link href="/" className="flex items-center gap-3.5 sm:gap-4">
          <span className="relative h-11 w-11 overflow-hidden rounded-xl sm:h-14 sm:w-14">
            <Image
              src="/logo-femaf.png"
              alt="FEMAF"
              fill
              sizes="(max-width: 640px) 44px, 56px"
              className="object-contain p-0.5 sm:p-1"
              priority
            />
          </span>

          <span className="text-base font-semibold tracking-[0.22em] text-white/90 hover:text-white sm:text-lg sm:tracking-[0.25em]">
            FEMAF DIGITAL
          </span>
        </Link>
      </div>
    </header>
  );
}
