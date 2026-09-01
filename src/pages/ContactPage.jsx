import { useEffect, useState, useRef } from 'react'

import { profile } from '../data/profile.js'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import Toast from '../components/Toast.jsx'
import { Field, Input, Select, Textarea } from '../components/Field.jsx'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import { IconGitHub, IconLinkedIn, IconMail } from '../components/icons.jsx'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || ''

const purposes = ['Internship opportunity', 'Freelance project', 'Collaboration', 'Just saying hello']

const emptyForm = { name: '', email: '', purpose: '', message: '', website: '' }

const MAX_MESSAGE_LENGTH = 5000
const MAX_NAME_LENGTH = 100
const MAX_EMAIL_LENGTH = 254

function validate(form) {
  const errors = {}
  if (!form.name.trim()) {
    errors.name = 'Please add your name.'
  } else if (form.name.trim().length > MAX_NAME_LENGTH) {
    errors.name = `Name is too long (max ${MAX_NAME_LENGTH} characters).`
  }
  if (!form.email.trim()) {
    errors.email = 'Please add your email.'
  } else if (form.email.trim().length > MAX_EMAIL_LENGTH) {
    errors.email = 'Email address is too long.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "That email doesn't look right."
  }
  if (!form.purpose) {
    errors.purpose = 'Pick a purpose.'
  }
  if (!form.message.trim()) {
    errors.message = 'Please add a message.'
  } else if (form.message.trim().length < 20) {
    errors.message = 'Tell me a bit more — at least 20 characters.'
  } else if (form.message.trim().length > MAX_MESSAGE_LENGTH) {
    errors.message = `Message is too long (max ${MAX_MESSAGE_LENGTH} characters).`
  }
  return errors
}

export default function ContactPage() {
  useDocumentMeta({
    title: 'Contact — Adarsha B U',
    description:
      'Contact Adarsha B U about internships, freelance projects, or collaborations in full-stack development, AI applications, and cybersecurity.',
  })

  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const formRef = useRef(null)
  const lastSubmissionRef = useRef(0)

  // Auto-dismiss toast after delay
  useEffect(() => {
    if (!['sent', 'error', 'unconfigured'].includes(status)) return undefined
    const timer = window.setTimeout(() => setStatus('idle'), 8000)
    return () => window.clearTimeout(timer)
  }, [status])

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    setErrors((errs) => ({ ...errs, [key]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    // Basic spam prevention: rate limit submissions
    const now = Date.now()
    if (now - lastSubmissionRef.current < 5000) {
      setStatus('error')
      return
    }
    lastSubmissionRef.current = now

    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    if (form.website) {
      setStatus('sent')
      setForm(emptyForm)
      return
    }

    if (!FORMSPREE_ENDPOINT) {
      setStatus('unconfigured')
      return
    }

    // Prevent duplicate submissions
    if (status === 'sending') return

    setStatus('sending')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}))
        throw new Error(errorData.error || `Request failed with status ${res.status}`)
      }
      setStatus('sent')
      setForm(emptyForm)
      if (formRef.current) formRef.current.reset()
    } catch (err) {
      console.error('Form submission error:', err)
      setStatus('error')
    }
  }

  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    `[Portfolio] ${form.purpose || 'Inquiry'} from ${form.name || 'a visitor'}`,
  )}&body=${encodeURIComponent(form.message || '')}`

  return (
    <>
      <PageHeader
        meta="/contact"
        title="Let's talk."
        lede={FORMSPREE_ENDPOINT
          ? 'Internships, freelance work, collaborations — or just a question. This form sends directly to my inbox.'
          : 'Internships, freelance work, collaborations — or just a question. The form is not configured yet; please use the email link below.'}
      />

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <form ref={formRef} onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Name" htmlFor="name" error={errors.name} hint={`Max ${MAX_NAME_LENGTH} characters`}>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={set('name')}
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    maxLength={MAX_NAME_LENGTH}
                  />
                </Field>
                <Field label="Email" htmlFor="email" error={errors.email}>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={set('email')}
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    maxLength={MAX_EMAIL_LENGTH}
                  />
                </Field>
              </div>

              <Field label="Purpose" htmlFor="purpose" error={errors.purpose}>
                <Select id="purpose" name="purpose" value={form.purpose} onChange={set('purpose')} required options={purposes} />
              </Field>

              <Field label="Message" htmlFor="message" error={errors.message} hint={`Max ${MAX_MESSAGE_LENGTH} characters`}>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={set('message')}
                  required
                  placeholder="What are you building, or what's on your mind?"
                  maxLength={MAX_MESSAGE_LENGTH}
                />
              </Field>

              <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="website">Leave this field empty</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex="-1"
                  autoComplete="off"
                  value={form.website}
                  onChange={set('website')}
                />
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Button type="submit" size="lg" loading={status === 'sending'} disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </Button>
                <a
                  href={mailtoHref}
                  className="inline-flex h-12 items-center gap-2 rounded-md border border-line px-5 text-sm text-muted transition-colors hover:border-gold/50 hover:text-gold"
                >
                  <IconMail className="h-4 w-4" /> Email directly
                </a>
              </div>

              {!FORMSPREE_ENDPOINT && (
                <p className="text-xs text-muted">
                  Note: Formspree endpoint not configured. The "Send message" button will show an error until VITE_FORMSPREE_ENDPOINT is set in your environment.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={120}>
            <aside className="flex flex-col gap-6">
              <div className="rounded-lg border border-line bg-surface p-6">
                <p className="meta text-gold">Direct channels</p>
                <div className="mt-4 flex flex-col gap-4">
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-gold"
                  >
                    <IconMail className="h-4 w-4" /> {profile.email}
                  </a>
                  <a
                    href={profile.socials[1].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-gold"
                  >
                    <IconLinkedIn className="h-4 w-4" /> LinkedIn
                  </a>
                  <a
                    href={profile.socials[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-gold"
                  >
                    <IconGitHub className="h-4 w-4" /> GitHub
                  </a>
                </div>
              </div>

              <div className="rounded-lg border border-line bg-surface p-6">
                <p className="meta text-gold">What I'm looking for</p>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  <li>· Internships — full-stack, AI, or security-leaning</li>
                  <li>· Freelance projects — small to medium builds</li>
                  <li>· Collaborations — open-source or experimental</li>
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      {status === 'sending' && <Toast floating>Sending your message…</Toast>}
      {status === 'sent' && (
        <Toast tone="success" floating>Message sent successfully. Thanks — I'll get back to you soon.</Toast>
      )}
      {status === 'error' && (
        <Toast tone="error" floating>
          The message could not be sent. Please try again or email me directly at {profile.email}.
        </Toast>
      )}
      {status === 'unconfigured' && (
        <Toast tone="error" floating>
          The contact form is not configured yet. Please use "Email directly" to reach me.
        </Toast>
      )}
    </>
  )
}
