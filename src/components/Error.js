import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>OOps !!</h1>
      <h2> something went wrong </h2>
      <h2> error - page {err.statusText}</h2>
    </div>
  );
};

export default Error;
