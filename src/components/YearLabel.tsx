type Size = "lg" | "sm";

export default function YearLabel({
  year,
  size = "lg",
}: {
  year: number | string;
  size?: Size;
}) {
  const sizeClass = size === "lg" ? "text-4xl md:text-[42px]" : "text-xl";

  return (
    <span
      className={`block font-normal leading-none tabular-nums text-purple ${sizeClass}`}
    >
      {year}
    </span>
  );
}