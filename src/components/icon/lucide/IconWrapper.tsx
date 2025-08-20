import { getLucideIcon } from "@/lib/utils/lucide-icon/lucide-icon";

type Props = {
  name: string;
  className?: string;
};

export function IconWrapper({ name, className }: Props) {
  const Icon = getLucideIcon(name);
  return <Icon className={className} />;
}