import type { ReactNode, CSSProperties } from "react";

interface LayoutSectionProps {
  bg?: string;
  children: ReactNode;
  style?: CSSProperties;
}

export default function LayoutSection({ bg = "bg-gray-50", children, style }: LayoutSectionProps) {
  return (
    <section style={style} className={`${bg} w-full py-16`}>
      <div className="max-w-4xl mx-auto px-4">
        {children}
      </div>
    </section>
  );
}
