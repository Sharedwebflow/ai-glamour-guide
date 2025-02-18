
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/80 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-4 inline-block rounded-xl bg-rose-100 p-3">
          <Icon className="h-6 w-6 text-rose-500" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
