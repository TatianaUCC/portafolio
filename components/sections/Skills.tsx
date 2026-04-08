import { skillCategories } from '@/data/portfolio'

const categoryIcons: Record<string, string> = {
  Frontend: '🎨',
  Backend: '⚙️',
  Herramientas: '🛠️',
}

// Convertir nivel numérico a puntos (1-5)
function getDots(level: number) {
  const filled = Math.round((level / 100) * 5)
  return Array.from({ length: 5 }, (_, i) => i < filled)
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#fdf6f0]">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Mis Habilidades
          </h2>
          <div className="w-10 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-5"
            >
              {/* Header de la card */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center text-lg">
                  {categoryIcons[cat.title]}
                </div>
                <h3 className="font-bold text-gray-800">{cat.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-col gap-3">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{skill.name}</span>
                    {/* Puntos de nivel */}
                    <div className="flex items-center gap-1">
                      {getDots(skill.level).map((filled, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            filled
                              ? 'bg-gradient-to-r from-pink-400 to-purple-400'
                              : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
