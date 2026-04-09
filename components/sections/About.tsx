import Image from 'next/image'
import { personalInfo, interests } from '@/data/portfolio'

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#fdf6f0] dark:bg-[#1c1b29]">
      <div className="max-w-5xl mx-auto px-8">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Sobre Mí</h2>
          <div className="w-10 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT: foto + card nombre */}
          <div className="flex flex-col items-center gap-4">
            {/* Foto grande */}
            <div className="w-64 h-72 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/perfil.jpg"
                alt="Tatiana Torres"
                width={256}
                height={288}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Card nombre */}
            <div className="bg-white dark:bg-[#252336] rounded-xl p-4 shadow-sm border border-gray-100 dark:border-white/10 flex items-center gap-3 w-64">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/images/perfil.jpg"
                  alt="Tatiana Torres Gomez"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <div className="font-semibold text-gray-700 text-sm">Tatiana Torres Gomez</div>
                <div className="text-gray-400 text-xs mt-0.5">Estudiante de Ing. Software</div>
              </div>
            </div>
          </div>

          {/* RIGHT: bio + intereses */}
          <div className="flex flex-col gap-5">
            <p className="text-gray-500 text-sm leading-relaxed">{personalInfo.bio1}</p>
            <p className="text-gray-500 text-sm leading-relaxed">{personalInfo.bio2}</p>
            <p className="text-gray-500 text-sm leading-relaxed">{personalInfo.bio3}</p>

            <div className="flex flex-col gap-3 mt-2">
              {interests.map((item) => (
                <div
                  key={item.title}
                  className="bg-white dark:bg-[#252336] rounded-xl p-4 shadow-sm border border-gray-100 dark:border-white/10 flex items-start gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700 text-sm">{item.title}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}


