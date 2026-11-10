import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, CalendarDays, ChartNoAxesCombined, Clapperboard, LayoutDashboard } from "lucide-react";
import MarlowDashboardPreview from "../../components/MarlowDashboardPreview";

const demoUrl = "https://marlow-creative-studio-demo.vercel.app/";

export const metadata: Metadata = {
  title: "Marlow — Creative Campaign Management Platform | Layerpilot Studio",
  description: "Explore Marlow, an independent interactive demo for creating content, scheduling campaigns, and reviewing marketing performance in one workspace."
};

const workflows = [
  {
    icon: Clapperboard,
    title: "Create a campaign creative",
    description: "A guided product-link workflow moves through product, style, and launch steps, with a browser-rendered preview."
  },
  {
    icon: CalendarDays,
    title: "Plan the content calendar",
    description: "Browse the weekly content board, filter posts by status, and add or edit scheduled content."
  },
  {
    icon: ChartNoAxesCombined,
    title: "Review campaign performance",
    description: "Explore campaign status and date ranges alongside sample spend, impressions, clicks, conversions, and returns."
  }
];

export default function MarlowCaseStudy() {
  return (
    <main className="min-h-screen bg-[#f5f6f8] pb-20">
      <header className="border-b border-black/10 bg-white">
        <div className="wrap flex h-[72px] items-center justify-between">
          <a href="/#work" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 transition hover:text-[#10141d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4">
            <ArrowLeft size={15} /> Back to selected work
          </a>
          <span className="text-xs font-extrabold tracking-tight">LAYERPILOT <span className="ml-1 text-[9px] tracking-[.2em] text-slate-400">STUDIO</span></span>
        </div>
      </header>

      <section className="wrap pt-14 sm:pt-20">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-blue-600/20 bg-blue-50 px-3 py-1.5 text-[9px] font-bold tracking-[.16em] text-blue-700">INDEPENDENT PRODUCT DEMO</span>
          <p className="eyebrow mt-7 text-blue-600">Creative Campaign Management Platform</p>
          <h1 className="mt-3 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">Marlow</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
            An interactive creative operations platform designed to manage content creation, schedule campaigns and track marketing performance through a unified workspace.
          </p>
          <p className="mt-3 text-xs leading-6 text-slate-500">A self-initiated demonstration using synthetic data for the fictional fashion brand Atelier North.</p>
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#4D7CFE] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
            Explore Live Demo <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="mt-10 sm:mt-14">
          <MarlowDashboardPreview />
        </div>
      </section>

      <section className="wrap mt-20 grid gap-12 border-t border-black/10 pt-12 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="eyebrow text-blue-600">Product overview</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">From creative idea to campaign review.</h2>
        </div>
        <div className="space-y-5 text-sm leading-7 text-slate-600">
          <p>
            Marlow is a product demo for coordinating creative production, content scheduling, and campaign reporting from a shared workspace. The sample account, Atelier North, presents fictional fashion content and synthetic campaign data.
          </p>
          <p>
            The product challenge it explores is keeping those connected tasks visible together: what is being created, when it is scheduled, and how sample campaigns are performing. The demo presents them through Studio, Create, Calendar, and Performance areas.
          </p>
        </div>
      </section>

      <section className="wrap mt-16">
        <p className="eyebrow text-blue-600">Key product workflows</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight">A connected campaign flow.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {workflows.map(({ icon: Icon, title, description }) => (
            <article key={title} className="rounded-2xl border border-black/10 bg-white p-6">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600"><Icon size={19} /></div>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-3 text-[13px] leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-black/10 bg-white p-6">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600"><LayoutDashboard size={19} /></div>
            <h3 className="mt-5 text-lg font-bold">See the studio at a glance</h3>
            <p className="mt-3 text-[13px] leading-6 text-slate-600">The dashboard brings weekly posts, drafts, campaign spend, queued budget, the current week, creative pipeline, and upcoming posts into one view.</p>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white p-6">
            <p className="eyebrow text-blue-600">Frontend implementation highlights</p>
            <h3 className="mt-4 text-lg font-bold">Observable product behavior</h3>
            <ul className="mt-3 space-y-2 text-[13px] leading-6 text-slate-600">
              <li>• A staged creative builder with product, style, and launch steps.</li>
              <li>• A weekly content board with status filters and post actions.</li>
              <li>• Campaign reporting with status filters, date ranges, and selectable metrics.</li>
              <li>• Synthetic sample data clearly framed around Atelier North.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="wrap mt-16 grid gap-8 rounded-3xl bg-[#111927] p-7 text-white sm:p-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow text-blue-300">Technology stack</p>
          <h2 className="mt-4 text-2xl font-semibold">Source details are not published with the demo.</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            The Marlow source repository was not provided, and the live demo does not identify its implementation stack. No technologies are listed here without repository verification.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[.04] p-6">
          <p className="text-sm font-semibold">Try the interactive product</p>
          <p className="mt-2 text-xs leading-5 text-slate-400">Explore the Studio dashboard, creative flow, weekly calendar, and campaign performance views.</p>
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-[#10141d] transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111927]">
            Open Marlow demo <ArrowUpRight size={15} />
          </a>
        </div>
      </section>

      <div className="wrap mt-10">
        <a href="/#work" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 transition hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4">
          <ArrowLeft size={14} /> Back to selected work
        </a>
      </div>
    </main>
  );
}
