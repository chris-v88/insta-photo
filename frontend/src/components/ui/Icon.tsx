import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type IconProps = {
  name: string;
  size?: number;
  color?: string;
  className?: string;
};

const Icon = (props: IconProps) => {
  const { name, size = 24, color = 'currentColor', className = '' } = props;
  // Convert kebab-case or lowercase to PascalCase
  const iconKey = name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  const LucideIcon: LucideIcon = (Icons as any)[iconKey];

  if (!LucideIcon) return null;

  return <LucideIcon size={size} color={color} className={className} />;
};

export default Icon;
