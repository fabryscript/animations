import React from "react";
import Image from "next/image";

export default function SpotifyUI() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex items-center gap-4">
        <Image
          src={"/dsb/igor.jpg"}
          alt="Tyler, The Creator IGOR Album's cover"
          width={128}
          height={128}
          className="rounded-2xl shadow-md"
        />
        <div className="flex flex-col gap-4">
          <h5 className="text-2xl font-semibold">EARFQUAKE</h5>
          <p>Tyler, The Creator</p>
        </div>
      </div>
      <div className="relative h-1 w-full rounded-full bg-neutral-200">
        <div className="absolute left-0 h-1 w-2 rounded-full bg-neutral-950"></div>
      </div>
    </div>
  );
}
