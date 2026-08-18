type IconProps = {
  className?: string;
};

// A small set of hand-drawn, stroke-based icons so the site doesn't
// depend on an external icon package. All use `currentColor`.

export function BuildingMarkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M4 20V9l8-5 8 5v11" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8 20v-6h8v6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M4 12h16" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.6 10.8c1.3 2.6 3.4 4.7 6 6l2-2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1v3.4c0 .6-.4 1-1 1C10.6 20.6 3.4 13.4 3.4 4.9c0-.6.4-1 1-1H8c.5 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1.1l-2 2.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5a8.4 8.4 0 0 0-7.2 12.7L3.5 20.5l4.5-1.2A8.4 8.4 0 1 0 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8.7 8.3c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.4.2.4.6 1.5.7 1.6.1.1.1.3 0 .5-.1.2-.2.3-.3.5-.2.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.7-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.2.1 1.5.7 1.8.8.3.1.5.2.5.3 0 .2 0 .9-.3 1.3-.4.5-1.3 1-2.3.7-1.9-.5-3.7-1.6-5.1-3-1.1-1.1-1.9-2.2-2.4-3.4-.4-1-.2-1.9.2-2.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function CheckCircleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 12.5l2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5 5 6v5.4c0 4.4 3 7.9 7 9.1 4-1.2 7-4.7 7-9.1V6l-7-2.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 12.2l2.1 2.1L15.5 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7v5.3l3.6 2.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TagIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M11.4 3.6 20 4l.4 8.6-9.2 9.2a1.4 1.4 0 0 1-2 0l-6.9-6.9a1.4 1.4 0 0 1 0-2l9.1-9.3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="15.6" cy="8.4" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="9" cy="8.5" r="2.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.8 19c.6-2.8 2.7-4.4 5.2-4.4s4.6 1.6 5.2 4.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M15.2 6.4a2.6 2.6 0 0 1 0 5.1M16.6 14.8c2 .3 3.5 1.7 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function SlabIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="6" width="17" height="4.5" rx="0.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 10.5V20M12 10.5V20M18 10.5V20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function ColumnIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 5h14M5 19h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="9" y="5" width="6" height="14" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function BeamIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="10" width="17" height="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 14v5M18 14v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function FoundationIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 19h16M5 19V9.5l3-3h8l3 3V19" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 19v-6h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function PlywoodIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="6.5" width="15" height="11" rx="0.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5.5 8.5h11M5.5 11h11M5.5 13.5h11M5.5 16h11" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <path d="M18.5 8.5 21 6.5M18.5 17 21 15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function MsPlateIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="7.5" width="14" height="9" stroke="currentColor" strokeWidth="1.6" />
      <rect x="6.5" y="5" width="14" height="9" stroke="currentColor" strokeWidth="1.6" opacity="0.55" />
    </svg>
  );
}

export function PropIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="9" y="3" width="6" height="3" stroke="currentColor" strokeWidth="1.4" />
      <rect x="9" y="18" width="6" height="3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9 10h6M9 14h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function ScaffoldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 4v16M19 4v16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M5 8h14M5 16h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M5 8l14 8M19 8 5 16" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
    </svg>
  );
}

export function JackIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="8" y="3.5" width="8" height="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 6.5v4" stroke="currentColor" strokeWidth="1.5" />
      <rect x="6.5" y="10.5" width="11" height="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 14v3.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="8" y="17.5" width="8" height="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function TrowelMachineIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="10.5" cy="15.5" r="6.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5 15.5h11" stroke="currentColor" strokeWidth="1.1" opacity="0.6" />
      <rect x="8.2" y="5.6" width="4.8" height="4.4" rx="0.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M13 6.8 18.6 2.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M17 3.3l2.3-1.1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export const equipmentIcons = {
  plywood: PlywoodIcon,
  msPlate: MsPlateIcon,
  prop: PropIcon,
  scaffold: ScaffoldIcon,
  jack: JackIcon,
};

export const serviceIcons = {
  slab: SlabIcon,
  column: ColumnIcon,
  beam: BeamIcon,
  foundation: FoundationIcon,
  trowel: TrowelMachineIcon,
};

export const highlightIcons = {
  shield: ShieldIcon,
  clock: ClockIcon,
  tag: TagIcon,
  users: UsersIcon,
};
