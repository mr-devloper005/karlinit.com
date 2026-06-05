import Link from 'next/link'
import { ArrowRight, BadgeCheck, Building2, Search, ShieldCheck, UsersRound } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const steps = [
  { title: 'Search with intent', description: 'Start with a business name, service, category, or location.' },
  { title: 'Compare useful details', description: 'Review services, contact information, business descriptions, and related options.' },
  { title: 'Connect directly', description: 'Visit the company website, call, or email when you find the right fit.' },
]

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f7f8f4] text-[#14231d]">
        <section className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="rounded-3xl border border-black/10 bg-white p-8 shadow-[0_18px_55px_rgba(16,37,28,0.07)] lg:p-12">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#16784a]">{pagesContent.about.badge}</p>
              <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.065em]">About {SITE_CONFIG.name}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#53635b]">{pagesContent.about.description}</p>
              <div className="mt-8 space-y-4 text-base leading-8 text-[#53635b]">{pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/search" className="inline-flex items-center gap-2 rounded-full bg-[#16784a] px-5 py-3 text-sm font-black text-white"><Search className="h-4 w-4" /> Search directory</Link>
                <Link href="/create" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-black">List a business <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </article>
            <aside className="grid gap-4">
              {pagesContent.about.values.map((value, index) => {
                const Icon = [BadgeCheck, ShieldCheck, UsersRound][index] || Building2
                return <div key={value.title} className="rounded-2xl border border-black/10 bg-[#e8f2eb] p-6"><Icon className="h-6 w-6 text-[#16784a]" /><h2 className="mt-4 text-xl font-black tracking-[-0.04em]">{value.title}</h2><p className="mt-3 text-sm leading-7 text-[#53635b]">{value.description}</p></div>
              })}
            </aside>
          </div>

          <section className="mt-8 rounded-3xl bg-[#10251c] p-8 text-white lg:p-12">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#9ed9b7]">How it works</p>
            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {steps.map((step, index) => <div key={step.title} className="rounded-2xl border border-white/12 bg-white/[0.06] p-6"><span className="text-sm font-black text-[#9ed9b7]">0{index + 1}</span><h2 className="mt-4 text-xl font-black">{step.title}</h2><p className="mt-3 text-sm leading-7 text-white/65">{step.description}</p></div>)}
            </div>
          </section>
        </section>
      </main>
    </EditableSiteShell>
  )
}
