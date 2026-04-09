'use client'

import Image from 'next/image'
import { personalInfo, interests } from '@/data/portfolio'
import { useLang } from '@/hooks/useLang'
import { translations } from '@/lib/i18n'

const interestsEN = [
  { icon: '💻', title: 'Development', desc: 'Building web applications with clean code.' },
  { icon: '🎨', title: 'UI Design', desc: 'Exploring visual interfaces and user experiences.' },
  { icon: '🎮', title: 'Video Games', desc: 'Developing interactive narratives and 3D worlds with style.' },
]

export default function About() {
  const { lang } = useLang()
  const t = translations[lang].about
  const items = lang === 'es' ? interests : interestsEN

  return (
    <section id="about" className="py-24 bg-[#fdf6f0] dark:bg-[#0f0f1a]">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <div className="w-10 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col items-center gap-4">
            <div className="w-64 h-72 rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/perfil.jpg" alt="Tatiana Torres" width={256} height={288} className="object-cover w-full h-full" />
            </div>
            <div className="bg-white dark:bg-[#252336] rounded-xl p-4 shadow-sm border border-gray-100 dark:border-white/10 flex items-center gap-3 w-64">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <Image src="/images/perfil.jpg" alt="Tatiana Torres Gomez" width={40} height={40} className="object-cover w-full h-full" />
              </div>
              <div>
                <div className="font-semibold text-gray-700 dark:text-white text-sm">Tatiana Torres Gomez</div>
                <div className="text-gray-400 text-xs mt-0.5">{t.role}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{personalInfo.bio1}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{personalInfo.bio2}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{personalInfo.bio3}</p>

            <div className="flex flex-col gap-3 mt-2">
              {items.map((item) => (
                <div key={item.title} className="bg-white dark:bg-[#252336] rounded-xl p-4 shadow-sm border border-gray-100 dark:border-white/10 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/40 dark:to-purple-900/40 flex items-center justify-center text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700 dark:text-white text-sm">{item.title}</div>
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
