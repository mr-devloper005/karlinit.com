'use client'

import { BadgeCheck, Building2, Mail, MessageSquareText } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const lanes = [
  { icon: Building2, title: 'Add or update a business', body: 'Get help publishing a new profile or correcting information on an existing listing.' },
  { icon: BadgeCheck, title: 'Listing quality and accuracy', body: 'Report inaccurate details or ask how to make a business profile more useful.' },
  { icon: MessageSquareText, title: 'Partnership and support', body: 'Discuss directory partnerships, category coverage, or a larger business onboarding need.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f7f8f4] text-[#14231d]">
        <section className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#16784a]">{pagesContent.contact.eyebrow}</p>
              <h1 className="mt-4 max-w-xl text-5xl font-black leading-[0.98] tracking-[-0.065em]">{pagesContent.contact.title}</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#53635b]">{pagesContent.contact.description}</p>
              <div className="mt-8 grid gap-4">
                {lanes.map((lane) => <div key={lane.title} className="rounded-2xl border border-black/10 bg-[#e8f2eb] p-5"><lane.icon className="h-5 w-5 text-[#16784a]" /><h2 className="mt-3 text-lg font-black">{lane.title}</h2><p className="mt-2 text-sm leading-7 text-[#53635b]">{lane.body}</p></div>)}
              </div>

            </div>
            <div>
              <h2 className="mb-4 text-2xl font-black tracking-[-0.04em]">{pagesContent.contact.formTitle}</h2>
              <EditableContactLeadForm />
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
