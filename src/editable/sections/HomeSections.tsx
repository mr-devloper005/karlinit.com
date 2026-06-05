import Link from 'next/link'
import { ArrowRight, BadgeCheck, Building2, CheckCircle2, MapPin, Search, ShieldCheck, Sparkles, Store } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { getEditableCategory, getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const categories = ['Home services', 'Professional services', 'Health & wellness', 'Food & hospitality', 'Retail & shopping', 'Automotive']

function BusinessCard({ post, href, featured = false }: { post: SitePost; href: string; featured?: boolean }) {
  return (
    <Link href={href} className={`group block rounded-2xl border border-black/10 bg-white p-5 shadow-[0_10px_32px_rgba(16,37,28,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(16,37,28,0.12)] ${featured ? 'md:col-span-2' : ''}`}>
      <div className={`grid gap-5 ${featured ? 'sm:grid-cols-[180px_1fr]' : ''}`}>
        <div className={`relative overflow-hidden rounded-xl bg-[#edf1ed] ${featured ? 'min-h-44' : 'aspect-[16/10]'}`}>
          <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#16784a] shadow-sm"><BadgeCheck className="h-3 w-3" /> Listed business</span>
        </div>
        <div className="min-w-0">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#16784a]">{getEditableCategory(post)}</p>
          <h3 className="mt-2 line-clamp-2 text-xl font-black leading-tight tracking-[-0.04em] text-[#14231d]">{post.title}</h3>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#607067]">{getEditableExcerpt(post, 145) || 'Explore services, business details, and direct contact options.'}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#14231d]">View profile <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
        </div>
      </div>
    </Link>
  )
}

export function EditableHomeHero({ primaryRoute }: HomeSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#f2f6f1]">
      <div className="absolute -left-20 bottom-0 h-44 w-[38%] rounded-tr-[7rem] bg-[#dff2e7]" />
      <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#c8e8d5]" />
      <div className="relative mx-auto max-w-[1180px] px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-[#16784a]">{pagesContent.home.hero.badge}</p>
        <h1 className="mx-auto mt-5 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.065em] text-[#14231d] sm:text-6xl lg:text-7xl">{pagesContent.home.hero.title.join(' ')}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#53635b] sm:text-lg">{pagesContent.home.hero.description}</p>
        <form action="/search" className="mx-auto mt-9 flex max-w-3xl gap-2 rounded-2xl border border-black/10 bg-white p-2 shadow-[0_18px_55px_rgba(16,37,28,0.14)]">
          <label className="flex min-w-0 flex-1 items-center gap-3 px-3">
            <Search className="h-5 w-5 text-[#16784a]" />
            <input name="q" placeholder="Search business, category, or service" className="min-w-0 flex-1 bg-transparent py-3 text-sm font-bold outline-none sm:text-base" />
          </label>
          <button className="rounded-xl bg-[#16784a] px-5 py-3 text-sm font-black text-white sm:px-8">Search</button>
        </form>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link href={primaryRoute} className={dc.button.primary}>Browse all businesses <ArrowRight className="h-4 w-4" /></Link>
          <Link href="/create" className={dc.button.secondary}>List your business</Link>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#16784a]">Popular right now</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.05em] text-[#14231d]">Businesses people are exploring</h2>
          </div>
          <Link href={primaryRoute} className="inline-flex items-center gap-2 text-sm font-black text-[#16784a]">See directory <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 6).map((post, index) => <BusinessCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} featured={index === 0} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryRoute }: HomeSectionProps) {
  return (
    <section className="border-y border-black/10 bg-[#10251c] text-white">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#9ed9b7]">Browse by category</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.055em] sm:text-5xl">Start with what you need. We will help with who to call.</h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/65">Explore practical categories designed around the services customers search for most.</p>
          <Link href={primaryRoute} className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#dff2e7] px-5 py-3 text-sm font-black text-[#10251c]">Explore categories <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {categories.map((category, index) => (
            <Link key={category} href={`/search?category=${encodeURIComponent(category)}`} className="group flex items-center gap-4 rounded-2xl border border-white/12 bg-white/[0.06] p-4 transition hover:bg-white/[0.12]">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">{index % 2 ? <Store className="h-5 w-5" /> : <Building2 className="h-5 w-5" />}</span>
              <span className="font-black">{category}</span>
              <ArrowRight className="ml-auto h-4 w-4 opacity-50 transition group-hover:translate-x-1 group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const pool = timeSections.flatMap((section) => section.posts).length ? timeSections.flatMap((section) => section.posts) : posts.slice(6)
  return (
    <section className="bg-[#f7f8f4]">
      <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl bg-[#dff2e7] p-7 sm:p-9">
            <Sparkles className="h-7 w-7 text-[#16784a]" />
            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.055em] text-[#14231d]">A directory built for useful decisions.</h2>
            <p className="mt-5 text-base leading-8 text-[#53635b]">Business profiles put service details, location, contact paths, and supporting information in one consistent place.</p>
            <div className="mt-7 grid gap-3 text-sm font-bold text-[#244537]">
              {['Compare businesses more easily', 'Contact providers directly', 'Discover related local options'].map((text) => <span key={text} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#16784a]" /> {text}</span>)}
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {pool.slice(0, 4).map((post) => <BusinessCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-3xl border border-black/10 bg-[#f2f6f1] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#16784a]"><ShieldCheck className="h-4 w-4" /> Grow your visibility</div>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.055em] text-[#14231d]">Make it easier for customers to choose your business.</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#53635b]">Create a detailed listing, explain your services clearly, and give customers a direct path to contact you.</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link href="/create" className={dc.button.primary}>Add your business</Link>
            <Link href="/contact" className={dc.button.secondary}>Talk to support</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
