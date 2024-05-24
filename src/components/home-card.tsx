import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface HomeCardProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

export default function HomeCard({
  description,
  href,
  imageUrl,
  title,
}: HomeCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex h-[250px] items-end justify-between overflow-hidden rounded-2xl bg-neutral-700 transition-all hover:scale-105"
    >
      <Image
        src={imageUrl}
        alt={title}
        className="absolute inset-0 h-auto w-full bg-cover"
        width={200}
        height={200}
        unoptimized
      />
      <div className="relative z-10 flex w-full flex-col gap-1 rounded-bl-2xl rounded-br-2xl bg-neutral-800 p-4 text-neutral-100 transition-colors group-hover:bg-neutral-700">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-lg opacity-80">{description}</p>
      </div>
    </Link>
  );
}
