import { timeline } from '@/data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#fdf6f0]">
      <div className="max-w-4xl mx-auto px-8">
        {/* Title arriba */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Mi Trayectoria
          </h2>
          <div className="w-10 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-3 rounded-full" />
        </div>

        {/* Timeline items */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-pink-200 -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-10">
            {timeline.map((item) => (
              <div
                key={item.id}
                className={`relative flex md:items-start gap-6 ${
                  item.side === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* Card */}
                <div className="md:w-[calc(50%-2rem)] w-full">
                  <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center text-base">
                        {item.icon}
                      </div>
                      <h3 className="font-bold text-gray-800 text-sm">{item.title}</h3>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Center dot + period */}
                <div className="hidden md:flex flex-col items-center gap-1 flex-shrink-0 w-16">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 mt-5" />
                  <span className="text-xs text-pink-400 whitespace-nowrap">{item.period}</span>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
