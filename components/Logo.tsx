import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  light?: boolean;
}

export function Logo({ light = false }: LogoProps) {
  return (
    <Link href="/" className="flex items-center">
      <div className="relative h-12 w-56">
        <Image
          src={light ? '/Artboard_3_copy.png' : '/Artboard_3.png'}
          alt="CXO Enable Advisors"
          fill
          className="object-contain object-left"
          priority
        />
      </div>
    </Link>
  );
}
