import { useLang } from '@/hooks/useLang'
import { translations } from '@/lib/i18n'

const testimonials = {
  es: [
    {
      name: 'Camila Ríos',
      role: 'Compañera de carrera',
      text: 'Tatiana tiene una capacidad especial para combinar lo visual con lo funcional. En los proyectos grupales siempre aportaba ideas que hacían la diferencia, y su atención al detalle se nota en cada cosa que entrega.',
      stars: 5,
    },
    {
      name: 'Sebastián Mora',
      role: 'Compañero de proyecto académico',
      text: 'Trabajar con ella fue muy buena experiencia. Es responsable, cumple con los tiempos y cuando se compromete con algo, lo hace bien. Además tiene buen ojo para el diseño, lo que le da un plus a cualquier proyecto.',
      stars: 5,
    },
    {
      name: 'Laura Quintero',
      role: 'Compañera de semestre',
      text: 'Lo que más me llama la atención de Tatiana es que no se queda solo con lo que le enseñan en clase. Siempre está explorando cosas nuevas y eso se refleja en la calidad de su trabajo.',
      stars: 5,
    },
  ],
  en: [
    {
      name: 'Camila Ríos',
      role: 'Classmate',
      text: 'Tatiana has a special ability to combine visual design with functionality. In group projects she always brought ideas that made a difference, and her attention to detail shows in everything she delivers.',
      stars: 5,
    },
    {
      name: 'Sebastián Mora',
      role: 'Academic project partner',
      text: 'Working with her was a great experience. She is responsible, meets deadlines, and when she commits to something, she does it well. She also has a great eye for design, which adds value to any project.',
      stars: 5,
    },
    {
      name: 'Laura Quintero',
      role: 'Semester classmate',
      text: "What stands out most about Tatiana is that she doesn't stop at what's taught in class. She's always exploring new things and that shows in the quality of her work.",
      stars: 5,
    },
  ],
}

export default function Testimonials() {
  const { lang } = useLang()
  const t = translations[lang].testimonials
  const items = testimonials[lang]

  return (
    <section id="testimonials" className="py-24 bg-[#fdf6f0] dark:bg-[#1c1b29]">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <div className="w-10 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.name}
              className="bg-white dark:bg-[#252336] border border-gray-100 dark:border-white/10 rounded-2xl p-6 shadow-sm flex flex-col gap-4"
            >
              {/* Estrellas */}
              <div className="flex gap-0.5">
                {Array.from({ length: item.stars }).map((_, i) => (
                  <span key={i} className="text-pink-400 text-sm">★</span>
                ))}
              </div>

              {/* Texto */}
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed italic">
                &ldquo;{item.text}&rdquo;
              </p>

              {/* Autor */}
              <div className="flex items-center gap-3 mt-auto pt-2 border-t border-gray-100 dark:border-white/10">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 dark:from-pink-900/50 dark:to-purple-900/50 flex items-center justify-center text-sm font-bold text-pink-600 dark:text-pink-300 flex-shrink-0">
                  {item.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-700 dark:text-white">{item.name}</div>
                  <div className="text-xs text-gray-400">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
