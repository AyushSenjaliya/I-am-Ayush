const educationList = [
  {
    degree: "Masters of Business Administration (MBA)",
    institution: "Parul University",
    period: "July 2024 — Present",
  },
  {
    degree: "B.Sc. in Information Technology",
    institution: "Sarvajanik University (CGPA 8.45 / 10)",
    period: "2021 — 2024",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-[var(--bg)] border-b border-[var(--line)]">
      <div className="max-w-[1080px] mx-auto px-6">
        
        {/* Header */}
        <div className="space-y-3 mb-12">
          <div className="section-eyebrow">ACADEMIC BACKGROUND</div>
          <h2 className="section-title">Education</h2>
        </div>

        {/* Simple Stacked Rows with Hairline Dividers */}
        <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {educationList.map((item, idx) => (
            <div
              key={idx}
              className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              <div>
                <h3 className="font-display font-bold text-lg text-[var(--text)]">
                  {item.degree}
                </h3>
                <div className="font-body text-sm text-[var(--muted)]">
                  {item.institution}
                </div>
              </div>

              <div className="font-mono text-xs font-bold text-[var(--gold)]">
                {item.period}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EducationSection;
