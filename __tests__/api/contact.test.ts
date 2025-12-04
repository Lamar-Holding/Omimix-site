describe("Contact API Route", () => {
  it("should validate required fields", async () => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "", email: "" }),
    })

    expect(response.status).toBe(400)
    const data = await response.json()
    expect(data.error).toBeDefined()
  })

  it("should validate email format", async () => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "John Doe",
        email: "invalid-email",
        message: "Test",
      }),
    })

    expect(response.status).toBe(400)
    const data = await response.json()
    expect(data.error).toContain("Invalid")
  })

  it("should accept valid contact form submission", async () => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "John Doe",
        email: "john@example.com",
        message: "Test message",
        product: "filler",
      }),
    })

    expect(response.status).toBe(200)
    const data = await response.json()
    expect(data.success).toBe(true)
  })

  it("should block honeypot submissions silently", async () => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Spam Bot",
        email: "spam@bot.com",
        message: "Spam",
        honeypot: "filled",
      }),
    })

    expect(response.status).toBe(200)
  })

  it("should apply rate limiting per email", async () => {
    const email = "test@example.com"

    // Make 5 requests
    for (let i = 0; i < 5; i++) {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "User",
          email,
          message: `Message ${i}`,
        }),
      })
    }

    // 6th request should be rate limited
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "User",
        email,
        message: "Message 6",
      }),
    })

    expect(response.status).toBe(429)
  })
})
