import "src/components/button/Button.scss";

interface ComponentProps {
  value: string | number;
  className: string;
  onClick: () => void;
}

const Button = ({ value, className, onClick }: ComponentProps): JSX.Element => {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
