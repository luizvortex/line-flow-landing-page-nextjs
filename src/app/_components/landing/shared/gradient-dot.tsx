interface GradientDotProps {
  size?: number;
  color?: string;
  opacity?: number;
  className?: string;
}

export function GradientDot({
  size = 600,
  color = "#77aca2",
  opacity = 0.08,
  className = "",
}: GradientDotProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute rounded-full pointer-events-none blur-3xl ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}, transparent 70%)`,
        opacity,
      }}
    />
  );
}
