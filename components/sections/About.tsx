import Image from 'next/image'
import { personalInfo, interests } from '@/data/portfolio'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white/50">
      <div className="max-w-5xl mx-auto px-8">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-800">Sobre Mí</h2>
          <div className="w-10 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: bio + photo */}
          <div className="flex flex-col gap-5">
            <p className="text-gray-500 text-sm leading-relaxed">{personalInfo.bio1}</p>
            <p className="text-gray-500 text-sm leading-relaxed">{personalInfo.bio2}</p>
            <p className="text-gray-500 text-sm leading-relaxed">{personalInfo.bio3}</p>

            {/* Photo */}
            <div className="mt-4 w-48 h-48 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/profile.jpg"
                alt="Tatiana Torres"
                width={192}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right: interests + profile card */}
          <div className="flex flex-col gap-4">
            {interests.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-start gap-3"
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

            {/* Profile card */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-3 mt-2">
              <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/images/profile.jpg"
                  alt="Tatiana Torres Gomez"
                  width={36}
                  height={36}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <div className="font-semibold text-gray-700 text-sm">Tatiana Torres Gomez</div>
                <div className="text-gray-400 text-xs">Estudiante de Ing. Software...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
