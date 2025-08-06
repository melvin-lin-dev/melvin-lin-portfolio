import { LucideIconMap } from './lucide-icon-map';
import { HelpCircle } from 'lucide-react';

export function getLucideIcon(name: string): React.ElementType {
  return LucideIconMap[name.toLowerCase()] || HelpCircle;
}
