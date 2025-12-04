"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin } from "lucide-react"

interface ContactSectionProps {
  t: Record<string, any>
}

const PRODUCT_OPTIONS = [
  { id: "filler", label: "Plastic Filler / الفيلر البلاستيكي" },
  { id: "colorMasterbatch", label: "Color Masterbatch / الماسترباتش الملونة" },
  { id: "whiteMasterbatch", label: "White Masterbatch / الماسترباتش البيضاء" },
  { id: "blackMasterbatch", label: "Black Masterbatch / الماسترباتش السوداء" },
  { id: "additiveMasterbatch", label: "Additive Masterbatch / الماسترباتش المضافة" },
  { id: "industrial", label: "Industrial / الصناعي" },
  { id: "agricultural", label: "Agricultural / الزراعي" },
  { id: "medical", label: "Medical / الطبي" },
  { id: "packaging", label: "Packaging / التغليف" },
  { id: "consumerGoods", label: "Consumer Goods / المستهلكين" },
  { id: "construction", label: "Construction / البناء" },
]

export function ContactSection({ t }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    product: "",
    honeypot: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Honeypot check
    if (formData.honeypot) {
      setStatus("success")
      setTimeout(() => setStatus("idle"), 5000)
      return
    }

    if (!formData.name.trim() || !formData.email.trim()) {
      setStatus("error")
      setErrorMessage(t.contact.form.emailRequired)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus("error")
      setErrorMessage(t.contact.form.emailInvalid)
      return
    }

    setStatus("loading")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          product: formData.product,
        }),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", message: "", product: "", honeypot: "" })
        setTimeout(() => setStatus("idle"), 5000)
      } else {
        setStatus("error")
        setErrorMessage(t.contact.form.error)
      }
    } catch (error) {
      setStatus("error")
      setErrorMessage(t.contact.form.error)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-background dark:bg-neutral-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.contact.title}</h2>
          <p className="text-lg text-muted-foreground">{t.contact.description}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Contact Info Cards */}
            <div className="text-center p-6 rounded-xl bg-background dark:bg-neutral-700 border border-border hover:border-primary-light transition-all animate-slide-in-up">
              <MapPin className="w-8 h-8 text-primary-light mx-auto mb-3" />
              <h3 className="font-bold mb-2">{t.contact.address}</h3>
              <p className="text-sm text-muted-foreground">Madinah, KSA</p>
            </div>

            <div
              className="text-center p-6 rounded-xl bg-background dark:bg-neutral-700 border border-border hover:border-primary-light transition-all animate-slide-in-up"
              style={{ animationDelay: "100ms" }}
            >
              <Mail className="w-8 h-8 text-primary-light mx-auto mb-3" />
              <h3 className="font-bold mb-2">{t.contact.email}</h3>
              <p className="text-sm text-muted-foreground break-all">
                <a href="mailto:Mishalalmoisheer@omimix.sa" className="hover:text-primary-light">
                  Mishalalmoisheer@omimix.sa
                </a>
              </p>
            </div>

            <div
              className="text-center p-6 rounded-xl bg-background dark:bg-neutral-700 border border-border hover:border-primary-light transition-all animate-slide-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <Mail className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h3 className="font-bold mb-2">{t.contact.email}</h3>
              <p className="text-sm text-muted-foreground break-all">
                <a href="mailto:omaralminshaz@omimix.sa" className="hover:text-primary-light">
                  omaralminshaz@omimix.sa
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-xl bg-background dark:bg-neutral-700 border border-border animate-slide-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  {t.contact.form.name} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background dark:bg-neutral-600 focus:border-primary-light focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  {t.contact.form.email} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background dark:bg-neutral-600 focus:border-primary-light focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Product Selection */}
              <div>
                <label htmlFor="product" className="block text-sm font-semibold mb-2">
                  {t.contact.form.product}
                </label>
                <select
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background dark:bg-neutral-600 focus:border-primary-light focus:outline-none transition-colors"
                >
                  <option value="">Select an option...</option>
                  {PRODUCT_OPTIONS.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background dark:bg-neutral-600 focus:border-primary-light focus:outline-none transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {/* Honeypot Field */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                style={{ display: "none" }}
                autoComplete="off"
              />

              {/* Status Messages */}
              {status === "error" && (
                <div className="p-4 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 border border-red-300 dark:border-red-700">
                  {errorMessage || t.contact.form.error}
                </div>
              )}

              {status === "success" && (
                <div className="p-4 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border border-green-300 dark:border-green-700">
                  {t.contact.form.success}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-8 py-3 bg-gradient-to-r from-primary-light to-secondary rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-primary-light/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 hover:disabled:scale-100"
              >
                {status === "loading" ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </span>
                ) : (
                  t.contact.form.submit
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
