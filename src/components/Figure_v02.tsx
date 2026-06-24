import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const slides = [{ src: "/src/assets/figures/900-finals/export/101.svg" }];

export default function Gallery() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div style={{ display: "block" }}>
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => setVisible(true)}
            style={{
              width: "100%",
              height: "auto",
              padding: 0,
              border: 0,
              cursor: "pointer",
              background: "none",
            }}
          >
            <img src={s.src} alt="" style={{ width: "100%", height: "auto" }} />
          </button>
        ))}
      </div>
      <Lightbox
        open={visible}
        close={() => setVisible(false)}
        slides={slides}
        render={{
          // Hide prev/next buttons if not needed
          buttonPrev: slides.length <= 1 ? () => null : undefined,
          buttonNext: slides.length <= 1 ? () => null : undefined,

          // Workaround: forces the image to enlarge to fill lightbox
          slide: ({ slide }) => (
            <img
              src={slide.src}
              alt=""
              style={{
                width: "100%",
                objectFit: "contain",
                display: "block",
                padding: "2%",
                background: "var(--color-surface)",
              }}
            />
          ),
        }}
        carousel={{ padding: 0, spacing: 0 }}
        controller={{ closeOnBackdropClick: true }}
        styles={{
          container: {
            background: "rgba(0, 0, 0, 0.40)",
            padding: 0,
            margin: 0,
          },
        }}
      />
    </>
  );
}
