import { assetPath } from '@/lib/utils'

const GARDEN_APP = 'https://theconvo.vercel.app'

export function ConvoPitch() {
  const gardenHref = GARDEN_APP
  const plantHref = `${GARDEN_APP}?plant=1`
  const frontArt = assetPath('/images/the-convo-front.jpg')
  const fieldArt = assetPath('/images/the-convo-garden.jpg')

  return (
    <main className="relative min-h-svh bg-background text-foreground">
      <section className="relative flex min-h-svh flex-col justify-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${frontArt})` }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center gap-4 px-6 pb-16 pt-24 text-center md:pb-20">
          <p className="font-serif text-2xl leading-tight text-balance md:text-3xl">
            You were walking. You stop at a garden.
          </p>
          <p className="text-sm text-foreground/80 text-pretty md:text-base">
            A memory becomes lighter <em className="italic">when it is shared.</em>
          </p>
          <a
            href={gardenHref}
            className="ink-button mt-2 rounded-full px-6 py-2.5 text-sm font-medium"
          >
            <span className="relative z-10">Enter the garden</span>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">The pause</p>
        <h2 className="mt-3 font-serif text-3xl text-pretty md:text-4xl">This is a small moment.</h2>
        <p className="mt-4 text-sm leading-relaxed text-foreground/80 text-pretty md:text-base">
          Before you plant anything, you arrive. You look at the field. You settle. The walk does not
          ask you to hurry. It asks you to notice that you stopped here, among the grass, with a
          memory still in your pocket.
        </p>
      </section>

      <section className="border-y border-white/40 bg-white/25 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Planting as the moment
          </p>
          <h2 className="mt-3 font-serif text-3xl text-pretty md:text-4xl">You tend a flower.</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/80 text-pretty md:text-base">
            The pause becomes a planting. A song is the soundtrack. A few true sentences are the soil.
            Then a sprout, then a bloom in the grass.
          </p>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ['Song', 'Choose a piece that still holds the moment. Mood can narrow the path.'],
              ['Memory', 'Who were you with, where were you, and what did it make you feel?'],
              ['Sprout', 'Watch it take shape before it blooms.'],
              ['Plant', 'Leave it in the field, anonymous, for the next walker to find.'],
            ].map(([title, body]) => (
              <li key={title} className="glass rounded-2xl p-5">
                <h3 className="relative z-10 font-serif text-xl">{title}</h3>
                <p className="relative z-10 mt-2 text-sm leading-relaxed text-foreground/75">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-16 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${fieldArt})` }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            The field of others
          </p>
          <h2 className="mt-3 font-serif text-3xl text-pretty md:text-4xl">Other walks left blooms here.</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/85 text-pretty md:text-base">
            Wander. Open a flower. Read an anonymous memory. Listen. Each bloom is a song and a
            moment someone was willing to set down.
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center gap-4 px-6 pb-16 pt-8 text-center">
        <p className="max-w-md font-serif text-2xl text-pretty md:text-3xl">
          Step into the garden, or plant one of your own.
        </p>
        <div className="mt-2 flex flex-col items-center gap-3">
          <a href={gardenHref} className="ink-button rounded-full px-6 py-2.5 text-sm font-medium">
            <span className="relative z-10">Enter the garden</span>
          </a>
          <a
            href={plantHref}
            className="glass glass-hover glass-pill px-5 py-2.5 text-sm font-medium text-foreground"
          >
            <span className="relative z-10 font-semibold">Plant a memory</span>
          </a>
        </div>
      </section>

      <footer className="border-t border-white/20 bg-[oklch(0.22_0.04_150)] text-white/80">
        <div className="flex flex-col gap-2 px-6 py-5 text-[13px] tracking-wide sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>The Convo · a memory garden</p>
          <p className="sm:text-right">in development · art from the current garden</p>
        </div>
      </footer>
    </main>
  )
}
