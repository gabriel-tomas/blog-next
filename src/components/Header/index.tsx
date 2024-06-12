import Link from 'next/link';
import { ContainerHeader } from './styled';

export default function Header() {
  return (
    <ContainerHeader>
      <Link href="/">
        <h1>Blog Next</h1>
      </Link>
    </ContainerHeader>
  );
}
