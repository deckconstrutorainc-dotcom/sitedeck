export default function SectionLabel({
  numero,
  children,
  tom = "escuro",
}: {
  numero: string;
  children: string;
  tom?: "escuro" | "claro";
}) {
  const cor = tom === "claro" ? "text-white/50" : "text-deck-grey";
  const linha = tom === "claro" ? "bg-white/15" : "bg-deck-line";

  return (
    <div className="flex items-center gap-4">
      <span className={`eyebrow ${cor}`}>
        {numero} / {children}
      </span>
      <span className={`h-px flex-1 ${linha}`} />
    </div>
  );
}
