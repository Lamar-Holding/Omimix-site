import { type NextRequest, NextResponse } from "next/server"

// Simple rate limiting using in-memory store (for production, use Redis)
const requestStore: Record<string, number[]> = {}

function isRateLimited(email: string): boolean {
  const now = Date.now()
  const oneHourAgo = now - 3600000 // 1 hour

  if (!requestStore[email]) {
    requestStore[email] = []
  }

  // Clean old requests
  requestStore[email] = requestStore[email].filter((time) => time > oneHourAgo)

  // Check limit (5 requests per hour)
  if (requestStore[email].length >= 5) {
    return true
  }

  requestStore[email].push(now)
  return false
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

async function sendEmailViaNodemailer(to: string, subject: string, html: string): Promise<boolean> {
  // Fallback: Log to console in development
  // In production, integrate with actual email service
  console.log("[Email Service] Would send email:")
  console.log(`To: ${to}`)
  console.log(`Subject: ${subject}`)
  console.log(`HTML: ${html}`)

  // For demo, always return success
  return true
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message, product } = body

    // Validation
    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 })
    }

    if (!validateEmail(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Rate limiting
    if (isRateLimited(email)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 })
    }

    // Recipients
    const recipients = ["Mishalalmoisheer@omimix.sa", "omaralminshaz@omimix.sa"]

    // Email content
    const subject = `Website Contact - ${name}`
    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${product ? `<p><strong>Product/Sector:</strong> ${product}</p>` : ""}
      ${message ? `<p><strong>Message:</strong></p><p>${message.replace(/\n/g, "<br>")}</p>` : ""}
      <p><strong>Submitted from:</strong> Omimix Website</p>
      <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
    `

    // Send to company recipients
    for (const recipient of recipients) {
      await sendEmailViaNodemailer(recipient, subject, html)
    }

    // Send confirmation to user
    const confirmationHtml = `
      <h2>Thank You for Contacting Omimix</h2>
      <p>Dear ${name},</p>
      <p>We have received your message and will get back to you as soon as possible.</p>
      <p>Best regards,<br>The Omimix Team</p>
    `

    await sendEmailViaNodemailer(email, "Thank you for contacting Omimix", confirmationHtml)

    return NextResponse.json({ success: true, message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
