import React from "react";
import { motion } from "framer-motion";
import Curve from "../../components/Layout/Curve/Curve";

const About = () => {
  return (
    <Curve>
      <h1 style={{ margin: "30px 0 30px 20px" }}>About</h1>
      <div style={{ display: "flex" }}>
        <p style={{ margin: "0 20px" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
          corrupti architecto odio aliquam quasi ipsam tempore esse porro
          incidunt quia doloremque culpa vitae itaque quas, atque consectetur
          nesciunt perferendis praesentium. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Facilis corrupti architecto odio aliquam
          quasi ipsam tempore esse porro incidunt quia doloremque culpa vitae
          itaque quas, atque consectetur nesciunt perferendis praesentium. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Facilis corrupti
          architecto odio aliquam quasi ipsam tempore esse porro incidunt quia
          doloremque culpa vitae itaque quas, atque consectetur nesciunt
          perferendis praesentium.
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
          corrupti architecto odio aliquam quasi ipsam tempore esse porro
          incidunt quia doloremque culpa vitae itaque quas, atque consectetur
          nesciunt perferendis praesentium. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Facilis corrupti architecto odio aliquam
          quasi ipsam tempore esse porro incidunt quia doloremque culpa vitae
          itaque quas, atque consectetur nesciunt perferendis.
        </p>
      </div>
    </Curve>
  );
};

export default About;
