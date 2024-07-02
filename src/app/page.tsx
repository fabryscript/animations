import HomeCard, { HomeCardProps } from "@/components/home-card";

const animations: HomeCardProps[] = [
  {
    title: "Dynamic Search Bar",
    description: "Search bar animation in dynamic island style.",
    href: "/dsb",
    imageUrl: "/dsb/cover.png",
  },
  {
    title: "3D Blocks",
    description: "Draggable, physics-powered 3d blocks",
    href: "/3d-blocks",
    imageUrl: "/3d-blocks/cover.png",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <div className="grid grid-cols-4 gap-4">
        {animations.map((props) => (
          <HomeCard key={props.title} {...props} />
        ))}
      </div>
    </main>
  );
}
