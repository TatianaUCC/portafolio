'use client'

import { useLang } from '@/hooks/useLang'
import { translations } from '@/lib/i18n'
import { skillCategories } from '@/data/portfolio'

const techIcons: Record<string, string> = {
  'HTML / CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Tailwind': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Bases de datos': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'APIs/REST': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  'Blender': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg',
  'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
}

const categoryIconsMap: Record<string, string> = { Frontend: '🎨', Backend: '⚙️', Herramientas: '🛠️' }

const categoriesEN = [
  { title: 'Frontend', skills: [{ name: 'HTML / CSS' }, { name: 'JavaScript' }, { name: 'React' }, { name: 'Tailwind' }] },
  { title: 'Backend', skills: [{ name: 'Node.js' }, { name: 'Bases de datos' }, { name: 'APIs/REST' }] },
  { title: 'Tools', skills: [{ name: 'Git' }, { name: 'Figma' }, { name: 'Blender' }, { name: 'VS Code' }] },
]

export default function Skills() {
  const { lang } = useLang()
  const t = translations[lang].skills
  const cats = lang === 'es' ? skillCategories : categoriesEN

  return (
    <section id="skills" className="py-24 bg-[#fdf6f0] dark:bg-[#0f0f1a]">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">{t.title}</h2>
          <div className="w-10 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-3 rounded-full" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cats.map((cat) => (
            <div key={cat.title} className="bg-white dark:bg-[#252336] border border-gray-100 dark:border-white/10 rounded-2xl p-6 shadow-sm flex flex-col gap-5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/40 dark:to-purple-900/40 flex items-center justify-center text-lg">
                  {categoryIconsMap[cat.title] ?? '🛠️'}
                </div>
                <h3 className="font-bold text-gray-800 dark:text-white">{cat.title}</h3>
              </div>
              <div className="flex flex-col gap-3">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                    <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">{skill.name}</span>
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                      {techIcons[skill.name]
                        ? <img src={techIcons[skill.name]} alt={skill.name} width={28} height={28} className="object-contain" />
                        : <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-pink-100 to-purple-100" />}
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
