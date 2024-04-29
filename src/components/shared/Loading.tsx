import { ImSpinner9 } from "react-icons/im";

const Loading = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <ImSpinner9 className="text-secondary size-32 animate-spin" />
    </div>
  );
};

export default Loading;
