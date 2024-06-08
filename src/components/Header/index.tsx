import Link from 'next/link';
import { ContainerHeader } from './styled';

export default function Header() {
  return (
    <ContainerHeader>
      <Link href="/">Blog Next</Link>
    </ContainerHeader>
  );
}
