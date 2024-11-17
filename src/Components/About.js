import { gsap } from "gsap";
import { useRef } from "react";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";

const About = () => {
  const titleNumer = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(
      titleNumer.current,
      {
        opacity: 0,
        duration: 3,
        x: -1000,
        scrollTrigger: {
          trigger: titleNumer.current,
          toggleActions: "play  pause none none",
        },
      },
      {
        x: 0,
      }
    );
  }, []);

  return (
    <section className="containerAbout">
      <div ref={titleNumer} className="titleSection">
        <div id="about" className="titleandNumber">
          <span>.02</span>
          <p>{t("text.header.two")}</p>
        </div>
        <div></div>
      </div>
      <article className="containertextAndPhoto">
        <div>
          <p className="textAbout">{t("text.aboutme")}</p>
          <p className="textAbout">{t("text.technology")}</p>
          <div className="skills">
            <ul>
              <li>EJS</li>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>Python</li>
            </ul>
          </div>
        </div>
        <div>
          <img
            className="PhotoProfile"
            src="/assets/reymel.jpg"
            alt="la fotito"
          />
        </div>
      </article>
    </section>
  );
};

export default About;
