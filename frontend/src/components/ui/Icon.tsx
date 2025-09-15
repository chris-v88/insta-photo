import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type IconProps = {
  name: string;
  size?: number;
  color?: string;
  className?: string;
};

const Icon: React.FC<IconProps> = ({ name, size = 24, color = 'currentColor', className = '' }) => {
  // Convert string to PascalCase for Lucide exports
  const iconKey = name.charAt(0).toUpperCase() + name.slice(1);
  const LucideIcon: LucideIcon = (Icons as any)[iconKey];

  if (!LucideIcon) return null;

  return <LucideIcon size={size} color={color} className={className} />;
};

export default Icon;
