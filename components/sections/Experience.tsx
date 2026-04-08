import { timeline } from '@/data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#fdf6f0] dark:bg-[#0f0f1a]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Mi Trayectoria
          </h2>
          <div className="w-10 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-3 rounded-full" />
        </div>

        <div className="relative">
          {/* Línea central desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-pink-200 dark:bg-pink-900 -translate-x-1/2 hidden md:block" />
          {/* Línea izquierda mobile */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-pink-200 dark:bg-pink-900 md:hidden" />

          <div className="flex flex-col gap-4 md:gap-10">
            {timeline.map((item) => (
              <div key={item.id}>

                {/* MOBILE */}
                <div className="flex items-start gap-3 md:hidden pl-8 relative">
                  <div className="absolute left-[9px] top-4 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 ring-2 ring-white dark:ring-[#0f0f1a] flex-shrink-0" />
                  <div className="bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-white/10 rounded-2xl p-4 shadow-sm w-full">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{item.icon}</span>
                        <h3 className="font-bold text-gray-800 dark:text-white text-sm">{item.title}</h3>
                      </div>
                      <span className="text-xs text-pink-400 font-medium whitespace-nowrap ml-2">{item.period}</span>
                    </div>
                    <p className="text-gray-400 dark:text-gray-400 text-xs leading-relaxed mt-1">{item.description}</p>
                  </div>
                </div>

                {/* DESKTOP */}
                <div className={`hidden md:flex items-start gap-6 ${item.side === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className="w-[calc(50%-2rem)]">
                    <div className="bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-white/10 rounded-2xl p-5 shadow-sm">
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/40 dark:to-purple-900/40 flex items-center justify-center text-base">
                          {item.icon}
                        </div>
                        <h3 className="font-bold text-gray-800 dark:text-white text-sm">{item.title}</h3>
                      </div>
                      <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-1 w-16 flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 mt-5 ring-2 ring-white dark:ring-[#0f0f1a]" />
                    <span className="text-xs text-pink-400 whitespace-nowrap">{item.period}</span>
                  </div>

                  <div className="w-[calc(50%-2rem)]" />
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
