import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";

export const CarouselValueContext = createContext<
  [number, Dispatch<SetStateAction<number>>]
>([0, () => {}]);

export function CarouselValueProvider({
  children,
}: PropsWithChildren<unknown>) {
  const state = useState(0);
  return (
    <CarouselValueContext.Provider value={state}>
      {children}
    </CarouselValueContext.Provider>
  );
}
