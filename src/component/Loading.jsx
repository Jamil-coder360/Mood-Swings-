import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import loader from "../assets/Loader-cat.lottie";
const Loading = () => {
  return (
       <div className="flex justify-center items-center h-screen bg-black">
      <DotLottieReact
        src={loader}
        loop
        autoplay
        style={{ width: "200px" }}
      />
    </div>
  );
};

export default Loading;