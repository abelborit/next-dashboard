import type { Metadata } from 'next';
import { CartCounter } from '@/app/shopping-cart/components';

interface CounterPageProps {
  value?: number;
}

export const metadata: Metadata = {
  description: 'Este es el Counter Page',
  title: 'Counter Page',
};

export default function CounterPage({ value = 10 }: CounterPageProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito de compras</span>

      <CartCounter value={value} />
    </div>
  );
}
