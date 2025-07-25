/* https://nextjs.org/docs/app/api-reference/functions/redirect */
import { RedirectType, redirect } from 'next/navigation';

export default function HomePage() {
  /* "redirect" es de tipo "never", es decir, se utiliza para funciones que nunca retornan un valor, por ejemplo porque lanzan una excepción, en este caso, hace una redirección y no es necesario que retorne algún valor */
  redirect('/dashboard/main/', RedirectType.replace);
}
