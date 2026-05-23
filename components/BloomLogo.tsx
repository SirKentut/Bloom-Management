type Props = {
  className?: string;
  monochrome?: boolean;
};

export function BloomLogo({ className, monochrome = false }: Props) {
  const petals = monochrome
    ? ["#d97a85", "#d97a85", "#d97a85", "#d97a85", "#d97a85"]
    : ["#f0c4cb", "#e89ba9", "#d97a85", "#e89ba9", "#f0c4cb"];

  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g transform="translate(20 20)">
        <ellipse cx="0" cy="-10" rx="6" ry="9" fill={petals[0]} />
        <ellipse cx="9.5" cy="-3.1" rx="6" ry="9" fill={petals[1]} transform="rotate(72)" />
        <ellipse cx="5.9" cy="8.1" rx="6" ry="9" fill={petals[2]} transform="rotate(144)" />
        <ellipse cx="-5.9" cy="8.1" rx="6" ry="9" fill={petals[3]} transform="rotate(216)" />
        <ellipse cx="-9.5" cy="-3.1" rx="6" ry="9" fill={petals[4]} transform="rotate(288)" />
        <circle cx="0" cy="0" r="3.5" fill="#2d2a1f" />
      </g>
    </svg>
  );
}
