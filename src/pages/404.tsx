import { Link } from "react-router-dom";
import { VscDebugDisconnect } from "react-icons/vsc";

const NotFoundPage = () => {
  return (
    <div className="h-svh flex items-center flex-col justify-center bg-foreground">
      <VscDebugDisconnect className="text-[10rem] text-accent" />
      <h1 className="text-white text-4xl [word-spacing:5px] mt-10 mb-16 uppercase">
        404 Page Not Found!
      </h1>
      <Link className="text-lg text-white btn bg-accent" to="/">
        Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
