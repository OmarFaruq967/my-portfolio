import React from "react";
import Heading from "../Shared/Heading";
import WorkItem from "../Shared/WorkItem";
import learn from "../../../public/Images/Portfolio/Learn-Hub---learn-hub-edu.netlify.jpg";
import Test from "../../../public/Images/Portfolio/Taste-of-Home---tasteofhomee.netlify.jpg";
import Toy from "../../../public/Images/Portfolio/Toy-Land---toylandtoy.netlify.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Portfolio = () => {
  return (
    <div id="Portfolio" className="px-5 md:px-20 py-5 md:my-10">
      <div className="flex mx-auto justify-center">
        <Heading title={"Some websites i have designed"} />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="grid md:grid-cols-3 gap-10"
      >
        <WorkItem
          image={learn}
          title="Learn Hub"
          description="Make user-friendly dashboard for the User, Instructor & Admin to understand the user design flow"
          GitHub="https://github.com/OmarFaruq967/learnHub-client-side.git"
          LiveWebsite="https://learn-hub-edu.netlify.app/"
        />
        <WorkItem
          image={Test}
          title="Test of Home"
          description="Make a fully responsive and dynamic website with advance features,
             Use the Protective Routes to secure user data"
          GitHub="https://github.com/OmarFaruq967/chef-client.git"
          LiveWebsite="https://tasteofhomee.netlify.app"
        />
        <WorkItem
          image={Toy}
          title="Toy Land"
          description="Make a fully responsive and dynamic website with advance features"
          GitHub="https://github.com/OmarFaruq967/toy-land-client-side.git"
          LiveWebsite="https://toylandtoy.netlify.app/"
        />
      </div>
    </div>
  );
};

export default Portfolio;
