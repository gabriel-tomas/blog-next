import { useRouter } from 'next/router';

export default function Username() {
  const router = useRouter();

  return <h1>Username do usuario {router.query.username}</h1>;
}
