import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center px-6 py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium tracking-[0.28em] text-lime-300/80 uppercase">
            YJ CODE
          </p>

          <h1 className="text-4xl leading-tight font-semibold tracking-tight text-white md:text-6xl">
            Building polished digital products with strong engineering and
            refined design.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            A hybrid portfolio platform presenting brand identity, selected
            works, and technical archives for YJ CODE.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/works"
              className="rounded-full border border-lime-300/30 bg-lime-300/10 px-6 py-3 text-sm font-medium text-lime-200 transition hover:bg-lime-300/20"
            >
              View Works
            </Link>

            <Link
              href="/about"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/80 transition hover:bg-white/5"
            >
              About YJ CODE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
