import {
  Binary,
  Box,
  Boxes,
  Cable,
  Code,
  Cog,
  Container,
  Cpu,
  Crosshair,
  Factory,
  Fan,
  Hash,
  ListOrdered,
  Network,
  Radar,
  Timer,
  ToggleLeft,
  Wind,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Binary,
  Box,
  Boxes,
  Cable,
  Code,
  Cog,
  Container,
  Cpu,
  Crosshair,
  Factory,
  Fan,
  Hash,
  ListOrdered,
  Network,
  Radar,
  Timer,
  ToggleLeft,
  Wind,
  Wrench,
  Zap,
};

export default function ModuleIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? Cpu;
  return <Icon className={className} />;
}
