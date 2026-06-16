import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  light?: boolean;
}

export function Logo({ light = false }: LogoProps) {
  return (
    <Link href="/" className="flex items-center">
      <div className="relative h-10 w-52">
        <Image
          src="/ChatGPT_Image_Jun_16,_2026,_04_32_00_PM.png"
          alt="CXO Enable Advisors"
          fill
          className={`object-contain object-left transition-all ${light ? 'brightness-0 invert' : ''}`}
          priority
        />
      </div>
    </Link>
  );
}

export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/image.png"
        alt="CXO Enable Advisors mark"
        fill
        className="object-contain"
      />
    </div>
  );
}
