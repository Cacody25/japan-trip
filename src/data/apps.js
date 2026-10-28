import {
  CalendarDays,
  Utensils,
  Heart,
  Music,
  Wine,
  Zap,
  Ghost,
  Camera,
  NotebookPen,
  Languages,
  Watch,
  QrCode,
  UtensilsCrossed,
  HandHeart,
  Gift,
  Map as MapIcon,
} from "lucide-react";

// Order is the home-screen layout: Map first, Days second.
export const appIcons = [
  {
    to: "/map",
    label: "Map",
    Icon: MapIcon,
    color: "#4C7FD1",
  },
  {
    to: "/days",
    label: "Days",
    Icon: CalendarDays,
    color: "#E4573D",
  },
  {
    to: "/entry",
    label: "Entry",
    Icon: QrCode,
    color: "#2F6FED",
  },
  {
    to: "/intro",
    label: "Intro!",
    Icon: HandHeart,
    color: "#C4708C",
  },
  {
    to: "/food",
    label: "Food!",
    Icon: Utensils,
    color: "#E4573D",
  },
  {
    to: "/mom-and-pop",
    label: "Mom+Pop",
    Icon: Heart,
    color: "#C4708C",
  },
  {
    to: "/jazz-cafes",
    label: "Jazz",
    Icon: Music,
    color: "#8C7BD8",
  },
  {
    to: "/bars",
    label: "Bars",
    Icon: Wine,
    color: "#8C7BD8",
  },
  {
    to: "/poke",
    label: "Poke!",
    Icon: Zap,
    color: "#F5C842",
  },
  {
    to: "/halloween",
    label: "Halloween!",
    Icon: Ghost,
    color: "#F07A28",
  },
  {
    to: "/check-in",
    label: "Check In!",
    Icon: Camera,
    color: "#7EC8C3",
  },
  {
    to: "/notes",
    label: "Notes",
    Icon: NotebookPen,
    color: "#8FA0B5",
  },
  {
    to: "/translate",
    label: "Phrases",
    Icon: Languages,
    color: "#E0B04A",
  },
  {
    to: "/table",
    label: "Table",
    Icon: UtensilsCrossed,
    color: "#E4573D",
  },
  {
    to: "/watches",
    label: "Watches",
    Icon: Watch,
    color: "#E0B04A",
  },
  {
    to: "/gifts",
    label: "Gifts!",
    Icon: Gift,
    color: "#E2A03F",
  },
];

export const dockApps = appIcons.filter(
  (app) => app.to === "/map" || app.to === "/days" || app.to === "/intro" || app.to === "/poke",
);
