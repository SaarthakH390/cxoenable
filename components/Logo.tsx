import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex flex-col items-start group">
      <div className="flex items-baseline gap-0.5">
        <span className="font-sans font-medium text-navy text-xl tracking-tight">
          CXO
        </span>
        <span className="font-serif font-semibold text-navy text-xl italic">
          Enable
        </span>
      </div>
      <div className="flex items-center gap-3 mt-1">
        <span className="h-px w-4 bg-gray-300" />
        <span className="font-sans font-medium text-navy text-[10px] tracking-[0.2em] uppercase">
          Advisors
        </span>
        <span className="h-px w-4 bg-gray-300" />
      </div>
    </Link>
  );
}

export function LogoMark() {
  return (
    <div className="relative w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
      <div className="relative w-6 h-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-1.5 h-6 bg-white rounded-sm" />
        </div>
        <div className="absolute inset-0 flex items-center justify-end">
          <div className="w-3 h-1 bg-white rounded-sm translate-y-[-3px]" />
          <div className="w-3 h-1 bg-white rounded-sm translate-y-[3px]" />
          <div className="w-3 h-1 bg-white rounded-sm" />
        </div>
      </div>
    </div>
  );
}
