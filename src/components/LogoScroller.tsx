import { clients } from "@/lib/company";
import { useDict, useLang } from "@/lib/i18n";

/**
 * Client logo marquee.
 *
 * Adapted from the airline scroller: the circular `h-14 w-14 object-cover`
 * crop was replaced with a fixed-height `object-contain` fit, because these
 * marks are wide wordmarks (Elsewedy is 3:1) and a circular crop would slice
 * them. `w-max` on the track is required -- without it the flex track inherits
 * the container width and `translateX(-50%)` no longer lands on the seam, so
 * the loop visibly jumps.
 */
export default function LogoScroller() {
  const d = useDict();
  const lang = useLang();
  const track = [...clients, ...clients];

  return (
    <section className="mt-16 border-y border-border bg-card py-14">
      <div className="mx-auto max-w-7xl px-6">
        <p className="eyebrow text-center">{d.home.clients.eyebrow}</p>
        <h2 className="mt-3 text-center text-2xl font-black tracking-tight md:text-3xl">
          {d.home.clients.title}
        </h2>
      </div>

      <div
        dir="ltr"
        className="mt-10 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]"
      >
        <ul className="animate-marquee flex w-max items-center">
          {track.map((c, index) => (
            <li
              key={c.key + "-" + index}
              aria-hidden={index >= clients.length ? true : undefined}
              className="mx-8 flex h-16 w-40 flex-shrink-0 items-center justify-center md:mx-12 md:w-48"
            >
              <img
                src={c.logo}
                alt={lang === "ar" ? c.nameAr : c.name}
                width={600}
                height={200}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-contain opacity-65 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </div>

      <p className="mx-auto mt-8 max-w-3xl px-6 text-center text-sm text-muted-foreground">
        {d.home.clients.note}
      </p>
    </section>
  );
}
