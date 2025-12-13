import type { ReactNode } from "react";

interface LayoutSectionProps {
  bg?: string;
  children: ReactNode;
}

export default function LayoutSection({ bg = "bg-gray-50", children }: LayoutSectionProps) {
  return (
    <section className={`${bg} w-full py-16`}>
      <div className="max-w-6xl mx-auto px-8">
        {children}
      </div>
    </section>
  );
}
