import { Activity, CalendarDays, Clapperboard, LayoutDashboard } from "lucide-react";

const week = [
  ["Mon", "9", "1 post"],
  ["Tue", "10", "1 post"],
  ["Wed", "11", "1 post"],
  ["Thu", "12", "1 post"],
  ["Fri", "13", "Empty"],
  ["Sat", "14", "1 post"],
  ["Sun", "15", "Empty"]
];

const pipeline = [
  ["Coastal Linen Shirt", "Studio light, Lookbook · 2 days ago", "ready"],
  ["Charcoal Wool Coat", "Editorial · Yesterday", "ready"],
  ["Ivory Slip Dress", "Street · Today", "draft"]
];

const upcoming = [
  ["Coastal Linen Shirt", "Tue, Nov 10 · 11:00 · Reel"],
  ["Charcoal Wool Coat", "Wed, Nov 11 · 16:00 · Feed"],
  ["Tan Leather Tote", "Thu, Nov 12 · 13:15 · Story"]
];

export default function MarlowDashboardPreview() {
  return (
    <figure
      role="img"
      aria-label="Marlow Studio dashboard preview for fictional fashion brand Atelier North, showing weekly statistics, its content calendar, creative pipeline, and upcoming campaigns."
      className="overflow-hidden rounded-2xl border border-white/10 bg-[#111927] p-2.5 shadow-2xl sm:p-3"
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-2 pb-2.5 text-[9px] text-slate-400 sm:gap-2 sm:text-[10px]">
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-red-400" />
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-yellow-400" />
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-green-400" />
        <span className="ml-1 rounded bg-white/5 px-2.5 py-1 sm:ml-2 sm:px-3">marlow.studio /</span>
        <span className="ml-auto hidden tracking-[.14em] text-slate-500 sm:block">LIVE PRODUCT PREVIEW</span>
      </div>

      <div aria-hidden="true" className="bg-[#f4f3ef] p-3 text-[#191817] transition-transform duration-500 group-hover:scale-[1.006] sm:p-4 md:p-5">
        <div className="flex items-center justify-between border-b border-black/[.07] pb-2.5">
          <div className="font-serif text-base font-semibold sm:text-lg">Marlow</div>
          <div className="flex items-center gap-1.5 text-[8px] font-medium text-[#64625e] sm:gap-3 sm:text-[9px]">
            <span className="flex items-center gap-1 text-[#294a9b]"><LayoutDashboard size={12} /> Studio</span>
            <span className="hidden items-center gap-1 sm:flex"><Clapperboard size={12} /> Create</span>
            <span className="flex items-center gap-1"><CalendarDays size={12} /> Calendar</span>
            <span className="hidden items-center gap-1 sm:flex"><Activity size={12} /> Performance</span>
          </div>
        </div>

        <div className="flex items-end justify-between gap-2 py-3 sm:py-4">
          <div>
            <p className="text-[8px] font-semibold uppercase tracking-[.17em] text-[#77736d] sm:text-[9px]">Studio · Atelier North</p>
            <h3 className="mt-1 font-serif text-xl leading-none tracking-tight sm:text-2xl md:text-3xl">Your week at a glance</h3>
          </div>
          <span className="shrink-0 rounded-lg bg-[#294a9b] px-2.5 py-2 text-[8px] font-semibold text-white sm:px-3 sm:text-[9px]">New creative <span aria-hidden="true">→</span></span>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            ["Posts this week", "5", "On the current board"],
            ["Drafts", "1", "Not on the schedule yet"],
            ["Spend, 30 days", "$3,890", "Campaigns that already started"],
            ["Queued budget", "$0", "Scheduled, not delivering"]
          ].map(([label, value, note]) => (
            <div key={label} className="min-w-0 rounded-lg border border-black/[.07] bg-white p-2.5 sm:p-3">
              <p className="truncate text-[8px] text-[#77736d] sm:text-[9px]">{label}</p>
              <p className="mt-1 font-serif text-xl leading-none sm:text-2xl">{value}</p>
              <p className="mt-1 truncate text-[7px] text-[#77736d] sm:text-[8px]">{note}</p>
            </div>
          ))}
        </div>

        <div className="mt-2.5 rounded-lg border border-black/[.07] bg-white p-2.5 sm:mt-3 sm:p-3">
          <div className="flex items-center justify-between">
            <h4 className="text-[9px] font-semibold sm:text-[10px]">This week</h4>
            <span className="text-[7px] text-[#77736d] sm:text-[8px]">Nov 9 – Nov 15 · Open calendar</span>
          </div>
          <div className="mt-2 grid grid-cols-7 gap-1">
            {week.map(([day, date, posts]) => (
              <div key={day} className="min-w-0 rounded-md bg-[#f7f6f3] px-1 py-1.5 text-center sm:px-1.5">
                <p className="text-[7px] text-[#77736d] sm:text-[8px]">{day}</p>
                <p className="mt-0.5 text-[9px] font-semibold sm:text-[10px]">{date}</p>
                <p className={`mt-1 truncate text-[6px] sm:text-[7px] ${posts === "Empty" ? "text-[#99958e]" : "text-[#294a9b]"}`}>{posts}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-2.5 grid gap-2 sm:mt-3 sm:grid-cols-2">
          <div className="rounded-lg border border-black/[.07] bg-white p-2.5 sm:p-3">
            <div className="mb-1.5 flex items-center justify-between">
              <h4 className="text-[9px] font-semibold sm:text-[10px]">Creative pipeline</h4>
              <span className="text-[7px] text-[#77736d] sm:text-[8px]">3 films</span>
            </div>
            {pipeline.map(([name, detail, status]) => (
              <div key={name} className="flex items-center gap-1.5 border-t border-black/[.05] py-1.5">
                <span aria-hidden="true" className="h-5 w-5 shrink-0 rounded bg-[#eeeae2]" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[7px] font-medium sm:text-[8px]">{name}</p>
                  <p className="truncate text-[6px] text-[#77736d] sm:text-[7px]">{detail}</p>
                </div>
                <span className="text-[6px] text-[#77736d] sm:text-[7px]">{status}</span>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-black/[.07] bg-white p-2.5 sm:p-3">
            <h4 className="mb-1.5 text-[9px] font-semibold sm:text-[10px]">Coming up</h4>
            {upcoming.map(([name, schedule]) => (
              <div key={name} className="border-t border-black/[.05] py-1.5">
                <p className="truncate text-[7px] font-medium sm:text-[8px]">{name}</p>
                <p className="truncate text-[6px] text-[#77736d] sm:text-[7px]">{schedule}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </figure>
  );
}
