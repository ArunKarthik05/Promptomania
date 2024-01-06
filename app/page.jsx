import React from "react";
import Feed from "@components/Feed";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Unleash Your Creativity <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          Your One-Stop-Hub for
        </span>
        <br className="max-md:hidden" />
        <span className="orange_gradient"> Ready To Use Prompts</span>
      </h1>
      <p className="desc text-center">
        "Elevate your creativity with our open-source prompt haven! Dive into a
        world of endless inspiration, where diverse minds collide to share
        ready-to-use prompts. Fuel your imagination and join the global
        community shaping stories, ideas, and art together!"
      </p>

      {/* {Feed} */}
      <Feed />
    </section>
  );
};

export default Home;
