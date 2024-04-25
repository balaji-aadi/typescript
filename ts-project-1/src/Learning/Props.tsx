type greetProps = {
  name: string;
  objs: {
    first: string;
    last: string;
  };
  arrList: {
    id?: number;
    first: string;
    last: string;
  }[];
};

export const Props = (props: greetProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>Hello my name is {props.name}</span>
      <span>
        {props.objs.first} {props.objs.last}
      </span>
      <span>
        {props.arrList.map((item) => (
          <span key={item.id}>
            {item.first} {item.last}
          </span>
        ))}
      </span>
    </div>
  );
};
