import { FaSpinner } from "react-icons/fa6";

const PagesFallback = () => {
  return (
    <div className="flex-center h-svh bg-foreground">
      <FaSpinner className="text-3xl text-accent animate-spin" />
    </div>
  );
};

export default PagesFallback;
