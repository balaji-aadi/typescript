type FunctionType = (name: string) => void;

export const Functions = () => {
  const printName: FunctionType = (name) => {
    console.log(name);
  };

  printName("aadesh");

  return <div></div>;
};
