import type { Instructor } from "@/types"

interface InstructorCardsProps {
  instructors: Instructor[]
}

export function InstructorCards({ instructors }: InstructorCardsProps) {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-screen-lg px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
            講師紹介
          </h2>
          <p className="mt-3 text-sm text-gray-600">
            実務経験豊富な講師陣が、初心者を徹底的にサポートします。
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {instructors.map((instructor) => (
            <article
              key={instructor.id}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <div
                className="h-20 w-20 rounded-full bg-accent/10"
                aria-hidden
              />
              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                {instructor.name}
              </h3>
              <p className="text-xs font-semibold text-accent">
                {instructor.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {instructor.bio}
              </p>
              {instructor.specialty ? (
                <p className="mt-3 text-xs font-semibold text-gray-500">
                  専門領域：{instructor.specialty}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
