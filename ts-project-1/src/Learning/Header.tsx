type HeadingProps = {
  children: string;
};

export const Header = (props: HeadingProps) => {
  return <h1>{props.children}</h1>;
};
