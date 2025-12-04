"use client"

interface FooterProps {
  t: Record<string, any>
}

export function Footer({ t }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background dark:bg-neutral-950 text-foreground py-16 md:py-20 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-light to-secondary flex items-center justify-center text-white font-bold">
                O
              </div>
              <span className="font-bold text-lg">Omimix</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {typeof t.footer.company === "string"
                ? "Leading manufacturer of innovative plastic additives"
                : t.footer.company}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#products" className="text-muted-foreground hover:text-primary-light transition-colors">
                  {t.common.products}
                </a>
              </li>
              <li>
                <a href="#sectors" className="text-muted-foreground hover:text-primary-light transition-colors">
                  {t.common.sectors}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary-light transition-colors">
                  {t.common.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">{t.contact.address}</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <a href="mailto:Mishalalmoisheer@omimix.sa" className="hover:text-primary-light transition-colors">
                  Mishalalmoisheer@omimix.sa
                </a>
              </p>
              <p>
                <a href="mailto:omaralminshaz@omimix.sa" className="hover:text-primary-light transition-colors">
                  omaralminshaz@omimix.sa
                </a>
              </p>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary-light transition-colors">
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary-light transition-colors">
                  {t.footer.terms}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} Omimix. {t.footer.rights}.
          </p>
        </div>
      </div>
    </footer>
  )
}
