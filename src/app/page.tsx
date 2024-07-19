import type { FC } from "react";
import Home from "@/features/Home";

export const metadata = {
  title: "Yoga Ardika",
  description:
    "Yoga Ardika is a Full-Stack Developer specializing in building (and sometimes designing) amazing and innovative digital experiences.",
};

const Homepage: FC = () => {
  return <Home />;
};

export default Homepage;
