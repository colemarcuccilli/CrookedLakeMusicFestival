import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({ label, error, className, id, ...props }: InputProps) {
  return (
    <div className="space-y-1.5">
      {label && <label htmlFor={id} className="block text-sm font-semibold text-lake-950">{label}</label>}
      <input
        id={id}
        className={cn(
          'w-full px-4 py-3 rounded-xl border-2 border-lake-100 bg-white text-lake-950 placeholder:text-sand-800/40',
          'focus:outline-none focus:border-lake focus:ring-2 focus:ring-lake/20 transition-all duration-200',
          error && 'border-pink focus:border-pink focus:ring-pink/20',
          className,
        )}
        {...props}
      />
      {error && <p className="text-sm text-pink">{error}</p>}
    </div>
  );
}
