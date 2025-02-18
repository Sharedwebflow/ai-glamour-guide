
interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

export function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="relative flex flex-col items-center p-6 text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
        <span className="text-xl font-semibold text-rose-500">{number}</span>
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
