export default function Home() {
  const faqs = [
    {
      q: 'How does the AI categorization work?',
      a: 'We use OpenAI to analyze each transaction description and amount, then map it to IRS Schedule C categories like advertising, travel, home office, and software — with a confidence score so you know what to review.'
    },
    {
      q: 'Is my bank data secure?',
      a: 'Bank connections use Plaid, the same technology trusted by Venmo and Robinhood. We never store your credentials and use read-only access to transaction data.'
    },
    {
      q: 'Can I export for my accountant or tax software?',
      a: 'Yes. Export a clean CSV or PDF tax summary grouped by deduction category, ready to hand off to your CPA or import into TurboTax Self-Employed.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Freelancers &amp; Contractors
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Leaving Tax Deductions<br className="hidden sm:block" /> on the Table
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          TaxSort connects to your bank and cards, then uses AI to automatically sort every expense into the right tax-deductible category — with confidence scores so you review only what matters.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Saving on Taxes — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No credit card required for trial.</p>

        <div className="mt-16 grid grid-cols-3 gap-6 text-center">
          {[['AI Categorization', 'OpenAI-powered sorting into IRS categories'],['Bank Sync', 'Plaid-secured read-only connection'],['Tax Reports', 'Export CSV or PDF for your CPA']].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-[#58a6ff] font-semibold text-sm mb-1">{title}</div>
              <div className="text-[#8b949e] text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {['Unlimited bank &amp; card connections','AI expense categorization with confidence scores','Receipt OCR matching','IRS Schedule C category mapping','CSV &amp; PDF tax report export','Priority email support'].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span dangerouslySetInnerHTML={{ __html: f }} />
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} TaxSort. Built for freelancers.
      </footer>
    </main>
  )
}
