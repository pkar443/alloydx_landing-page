import { content } from "@/content/landing";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              {content.nav.logo}
            </h3>
            <p className="text-slate-400 text-sm mb-6 max-w-xs">
              AI-first radiology platform helping clinicians deliver faster, more consistent diagnoses.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Mail className="w-4 h-4" />
                <span>{content.footer.contact.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Phone className="w-4 h-4" />
                <span>{content.footer.contact.phone}</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{content.footer.contact.address}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{content.footer.company.title}</h4>
            <ul className="space-y-2">
              {content.footer.company.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{content.footer.product.title}</h4>
            <ul className="space-y-2">
              {content.footer.product.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{content.footer.resources.title}</h4>
            <ul className="space-y-2">
              {content.footer.resources.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{content.footer.legal.title}</h4>
            <ul className="space-y-2">
              {content.footer.legal.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800">
          <p className="text-center text-slate-500 text-sm">
            {content.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
