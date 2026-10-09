
import type { ReactNode } from 'react';
import './CubeFlipButton.css';

type CubeFlipButtonProps = {
  children: ReactNode;
  selected: boolean;
  onClick: () => void;
  className?: string;
};

export default function CubeFlipButton({
  children,
  selected,
  onClick,
  className = '',
}: CubeFlipButtonProps) {
  return (
    <button
      type="button"
      className={[
        'cube-flip',
        selected ? 'is-selected' : '',
        className,
      ].join(' ')}
      onClick={onClick}
      aria-pressed={selected}
    >
      <span className="cube-flip__inner">
        <span className="cube-flip__face cube-flip__front">
          {children}
        </span>

        <span
          className="cube-flip__face cube-flip__back"
          aria-hidden="true"
        >
          {children}
        </span>
      </span>
    </button>
  );
}