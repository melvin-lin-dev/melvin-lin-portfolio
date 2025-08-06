import * as LucideIcons from 'lucide-react';
import * as CustomIcons from '@/components/icon/custom';

const iconMap = {
  ...LucideIcons,
  LeetCode: CustomIcons.LeetCodeIcon,
  Codewars: CustomIcons.CodewarsIcon,
};

export const LucideIconMap: Record<string, React.ElementType> = Object.fromEntries(
  Object.entries(iconMap).map(([name, icon]) => [name.toLowerCase(), icon])
);
