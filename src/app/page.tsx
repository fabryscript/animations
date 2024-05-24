import HomeCard, { HomeCardProps } from "@/components/home-card";

const animations: HomeCardProps[] = [
  {
    title: "Dynamic Search Bar",
    description: "Search bar animation in dynamic island style.",
    href: "/dsb",
    imageUrl: "/dsc/cover.png",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex max-w-[1440px] flex-col gap-8 py-8">
      <div className="flex flex-col gap-1 text-center text-neutral-200">
        <h1 className="text-4xl font-bold">
          Collection of cool web animations
        </h1>
        <p className="text-xl">done with Framer Motion + React</p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {animations.map((props) => (
          <HomeCard key={props.title} {...props} />
        ))}
      </div>
    </main>
  );
}
