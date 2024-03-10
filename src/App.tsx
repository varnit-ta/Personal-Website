import { useEffect, useRef } from "react";
import ReactDOMServer from "react-dom/server";

//Components
import NavBullet from "./components/NavBullet";

//Pages
import About from "./pages/About";
import Skills from "./pages/Skills";
import SocialMedia from "./components/SocialMedia";
import ContactPage from "./pages/ContactPage";
import Projects from "./pages/Projects";

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLUListElement>(null);

  let count = 4;
  let current = 0;
  let animation_state = false;
  let yDown: number | null = null;

  const gotoNum = (index: number) => {
    const pages = pageRef.current;
    const btns = paginationRef.current?.children;

    if (btns) {
      if (index !== current && !animation_state) {
        const preBtn = btns[current] as HTMLLIElement;
        animation_state = true;
        preBtn.classList.remove("active");
        preBtn.classList.add("inactive");
        setTimeout(() => (animation_state = false), 500);
        btns[index].classList.add("active");
        btns[index].classList.remove("inactive");
        const testSlides = pages?.children;

        if (testSlides) {
          for (let i = 0; i < count; i++) {
            const slide = testSlides[i] as HTMLElement;
            slide.style.position = "absolute";
            slide.style.transition = "bottom 0.7s ease-in-out";
            slide.style.bottom = (index - i) * 100 + "%";
          }
          current = index;
        }
      }
    }
  };

  const gotoNext = () => (current < count - 1 ? gotoNum(current + 1) : false);
  const gotoPrev = () => (current > 0 ? gotoNum(current - 1) : false);
  const btnClick = (e: any) => gotoNum(parseInt(e.target.id));

  useEffect(() => {
    const pages = pageRef.current;
    const pagination = paginationRef.current!;
    const navNames = ["ABOUT", "SKILLS", "PROJECTS", "CONTACT"];

    const init = () => {
      const testSlides = pages?.children;
      if (testSlides) {
        count = testSlides.length;
        pagination.innerHTML = "";
        if (count) {
          for (let i = 0; i < count; i++) {
            let navlink = document.createElement("div");
            navlink.classList.add("navLink");

            const bullet = <NavBullet />;
            const bulletString = ReactDOMServer.renderToStaticMarkup(bullet);
            const bulletNode = document
              .createRange()
              .createContextualFragment(bulletString);
            navlink.appendChild(bulletNode);

            let btnName = document.createElement("p");
            btnName.innerHTML = `${navNames[i]}`;
            btnName.classList.add("navText");
            navlink.appendChild(btnName);

            navlink.setAttribute("id", `${String(i)}`);
            btnName.setAttribute("id", `${String(i)}`);

            navlink.addEventListener("click", btnClick);

            if (i === 0) {
              navlink.classList.add("active");
            } else {
              navlink.classList.add("inactive");
            }

            pagination.appendChild(navlink);
          }
        }
      }
    };

    const handleTouchStart = (evt: TouchEvent) => {
      const firstTouch = evt.touches[0];
      yDown = firstTouch.clientY;
    };

    const handleTouchMove = (evt: TouchEvent) => {
      if (!yDown) {
        return;
      }

      let yUp = evt.touches[0].clientY;

      let yDiff = yDown - yUp;

      if (Math.abs(yDiff) > 50) {
        if (yDiff > 0) {
          gotoNext();
        } else {
          gotoPrev();
        }
      }
    };

    pages?.addEventListener("wheel", (e) => {
      e.deltaY < 0 ? gotoPrev() : gotoNext();
    });

    pages?.addEventListener("touchstart", handleTouchStart);
    pages?.addEventListener("touchmove", handleTouchMove);

    init();
  }, []);

  return (
    <div>
      <div className="box">
        <div className="main_container" ref={pageRef}>
          {/* Page 1 */}
          <About />

          {/* Page 2 */}
          <Skills />

          {/* Page 3 */}
          <Projects />

          {/*Page 4 */}
          <ContactPage />
        </div>
      </div>

      <ul className="pagination" ref={paginationRef}></ul>
      <SocialMedia />
    </div>
  );
}
