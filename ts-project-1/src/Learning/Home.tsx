type statusProps = {
  status: "Loading" | "Pending" | "Success";
};

export const Home = (props: statusProps) => {
  return <div> {props.status} </div>;
};
