import { ReactNode } from "react";
import SpotifyUI from "./ui/spotify";

interface _AppResult {
  name: string;
  ui: () => ReactNode;
  error: boolean;
}

export type AppResult = Partial<_AppResult>;

export function handleSearch(input: string): Partial<AppResult> {
  console.log(input);
  switch (input) {
    case "my most listened song":
      return {
        name: "Spotify",
        ui: SpotifyUI,
      };

    default:
      return {
        name: "Error",
      };
  }
}
