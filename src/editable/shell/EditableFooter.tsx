'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowUpRight, Mail, MapPin, Search } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const footerVars = { '--editable-footer-bg': '#10251c', '--editable-footer-text': '#ffffff', '--editable-border': 'rgba(255,255,255,0.13)', '--editable-container': '1180px' } as CSSProperties
  const taskLinks = SITE_CONFIG.tasks.filter((task) => task.enabled)
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer style={footerVars} className="border-t border-[var(--editable-border)] bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#dff2e7] text-[#10251c]">
              <img src="/favicon.png?v=20260413" alt={SITE_CONFIG.name} className="h-7 w-7 object-contain" />
            </span>
            <span className="text-lg font-black tracking-[-0.04em]">{SITE_CONFIG.name}</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 opacity-70">{globalContent.footer.description}</p>
          <Link href="/search" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#dff2e7] px-4 py-2.5 text-sm font-black text-[#10251c]"><Search className="h-4 w-4" /> Find a business</Link>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] opacity-55">Explore</h3>
          <div className="mt-4 grid gap-2">
            {taskLinks.map((task) => <Link key={task.key} href={task.route} className="inline-flex items-center gap-2 text-sm font-bold opacity-75 hover:opacity-100">{task.label} <ArrowUpRight className="h-3.5 w-3.5" /></Link>)}
            <Link href="/search" className="text-sm font-bold opacity-75 hover:opacity-100">Search directory</Link>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] opacity-55">Account</h3>
          <div className="mt-4 grid gap-2">
            {[['About', '/about'], ['Contact', '/contact'], ...(session ? [['Add listing', '/create']] : [['Login', '/login'], ['Sign up', '/signup']])].map(([label, href]) => <Link key={href} href={href} className="text-sm font-bold opacity-75 hover:opacity-100">{label}</Link>)}
            {session ? <button type="button" onClick={logout} className="text-left text-sm font-bold opacity-75 hover:opacity-100">Logout {session.name}</button> : null}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] opacity-55">Directory help</h3>
          <div className="mt-4 grid gap-3 text-sm font-bold opacity-75">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Explore local providers</span>
            <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> Update a listing</span>
            <Link href="/contact" className="inline-flex items-center gap-2 hover:opacity-100">Contact support <ArrowUpRight className="h-3.5 w-3.5" /></Link>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--editable-border)] px-4 py-5 text-center text-xs font-bold opacity-55">
        © {year} {SITE_CONFIG.name}. All rights reserved. Clear listings, better decisions.
      </div>
    </footer>
  )
}
