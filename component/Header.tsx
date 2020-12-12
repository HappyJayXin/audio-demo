export enum Sizes{
  small = 'small',
  large = 'large'
}

interface Props {
  text?: string;
  size: Sizes;
}

const Header = ({ text, size }: Props) => {
  return (
    <div>
      <h1>{text}</h1>
      <h2>{size}</h2>
    </div>
  )
}

export default Header;
