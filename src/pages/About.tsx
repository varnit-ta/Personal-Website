import { useState, useEffect, useRef } from "react";
import "../styles/About.css";
import profileImage from "../assets/profileImage.jpeg";

const About = () => {
  const [showImage, setShowImage] = useState(false);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current && tooltipRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const tooltipHeight = tooltipRef.current.offsetHeight;
        const tooltipWidth = tooltipRef.current.offsetWidth;

        setImagePosition({
          x: e.clientX - containerRect.left - 40 - tooltipWidth * 1,
          y: e.clientY - containerRect.top - tooltipHeight / 2,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="page" ref={containerRef}>
      <div style={{ zIndex: 1 }} className="about">
        <p>
          Hey, I'm{" "}
          <a
            href="#"
            onMouseEnter={() => setShowImage(true)}
            onMouseLeave={() => setShowImage(false)}
            aria-describedby="tooltip"
          >
            Varnit Singh
          </a>
          , a full stack web developer and a deep learning enthusiast currently studying at VIT Vellore
        </p>
      </div>

      <div
        className={`tooltip ${showImage ? "show" : ""}`}
        ref={tooltipRef}
        style={{
          position: "absolute",
          left: imagePosition.x,
          top: imagePosition.y,
        }}
      >
        <img
          src={profileImage}
          alt="Profile"
          style={{
            borderRadius: "1%",
            maxWidth: "600px",
            maxHeight: "600px",
            padding: 0,
            margin: 0,
            transition: "opacity 0.4s ease-in-out",
            opacity: showImage ? 1 : 0,
          }}
        />
      </div>
    </div>
  );
};

export default About;
