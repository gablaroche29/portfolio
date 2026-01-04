import SectionHeader from "./SectionHeader";

const events = [
  { date: '2025.10', title: 'Global Game Jam', role: 'Lead Programmer', result: 'Top 3 Finalist' },
  { date: '2025.06', title: 'React Summit', role: 'Attendee', result: 'Workshop: Advanced Patterns' },
  { date: '2024.12', title: 'Internal Hackathon', role: 'Fullstack Dev', result: 'First Place' },
];

export default function EventLog() {
  return (
    <section id="events" className="mx-auto max-w-content px-6 py-20 border-b border-text/20">
      <SectionHeader title="03_Activity_Log" />
      
      <div className="mt-8 space-y-0 border-l border-text/20 ml-4">
        {events.map((event, i) => (
          <div key={i} className="relative pl-8 pb-12 group">
            <div className="absolute -left-1.25 top-1 w-2 h-2 bg-bg border border-text group-hover:bg-text transition-colors" />
            
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
              <span className="font-mono text-xs opacity-50 tracking-tighter">{event.date}</span>
              <div className="space-y-1">
                <h3 className="text-xl font-bold uppercase tracking-tight group-hover:italic transition-all">
                  {event.title}
                </h3>
                <p className="text-sm font-mono opacity-70">
                  {`> ROLE: ${event.role} // RESULT: ${event.result}`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}