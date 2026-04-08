import { timeline } from '@/data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#fdf6f0]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Mi Trayectoria
          </h2>
          <div className="w-10 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-3 rounded-full" />
        </div>

        {/* Timeline — una sola columna con línea a la izquierda */}
        <div className="relative">
          {/* Línea vertical */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-pink-200" />

          <div className="flex flex-col gap-6">
            {timeline.map((item) => (
              <div key={item.id} className="relative flex items-start gap-5 pl-12">
                {/* Punto en la línea */}
                <div className="absolute left-[11px] top-5 w-3 h-3 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex-shrink-0 ring-2 ring-white" />

                {/* Card */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 w-full">
                  <div className="flex items-center gap-2.5 mb-1">
                    <span className="text-xl">{item.icon}</span>
                    <h3 className="font-bold text-gray-800 text-sm">{item.title}</h3>
                  </div>
                  <span className="text-xs text-pink-400 font-medium">{item.period}</span>
                  <p className="text-gray-400 text-xs leading-relaxed mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
