export default function Eyebrow({
  children,
  tom = "escuro",
}: {
  children: string;
  tom?: "escuro" | "claro";
}) {
  const cor = tom === "claro" ? "text-deck-accent" : "text-deck-navy";
  const linha = tom === "claro" ? "bg-white/15" : "bg-deck-navy/15";

  return (
    <div className="flex items-center gap-4">
      <span className={`eyebrow ${cor}`}>{children}</span>
      <span className={`h-px flex-1 ${linha}`} />
    </div>
  );
}
