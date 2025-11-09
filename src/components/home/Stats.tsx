import type { Stat } from "@/types"

interface StatsProps {
  stats: Stat[]
}

export function Stats({ stats }: StatsProps) {
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="mx-auto max-w-screen-lg px-4 md:px-6">
        <h2 className="text-center text-2xl font-semibold text-gray-900 md:text-3xl">
          多くの方に選ばれています
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white p-6 text-center shadow-sm"
            >
              <p className="text-3xl font-bold text-accent md:text-4xl">
                {stat.value}
                {stat.unit ? (
                  <span className="ml-1 text-base font-semibold">
                    {stat.unit}
                  </span>
                ) : null}
              </p>
              <p className="mt-2 text-sm font-semibold text-gray-800">
                {stat.label}
              </p>
              {stat.description ? (
                <p className="mt-1 text-xs text-gray-500">{stat.description}</p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
