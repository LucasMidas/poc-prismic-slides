import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import styles from "./carrousel.module.css";
/**
 * Props for `Carrousel`.
 */
export type CarrouselProps = SliceComponentProps<Content.CarrouselSlice>;

/**
 * Component for "Carrousel" Slices.
 */
const Carrousel = ({ slice }: CarrouselProps): JSX.Element => {
  console.log(slice);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles["carrousel-container"]}
    >
      <div className={styles["carrousel-texts-container"]}>
        <header>
          {isFilled.keyText(slice.primary.carrousel_title) && (
            <h1 style={{ fontSize: "2em", color: "#6439FF" }}>
              {slice.primary.carrousel_title}
            </h1>
          )}
        </header>
        {isFilled.keyText(slice.primary.carrousel_information) && (
          <p style={{ maxWidth: "90%" }}>
            {slice.primary.carrousel_information}
          </p>
        )}
      </div>
      <div
        style={{
          height: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "16px",
        }}
      >
        {isFilled.group(slice.primary.carrousel_cards) &&
          slice.primary.carrousel_cards.map((item, i) => (
            <>
              <article
                key={i}
                style={{
                  display: "flex",
                  width: "244px",
                  height: "266px",
                  padding: "16px",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRadius: "20px",
                  backgroundColor: "white",
                }}
              >
                <PrismicNextImage field={item.card_icon} />
                <h1>{item.card_title}</h1>
                <span
                  style={{ height: "2px", backgroundColor: "#F7F7F7" }}
                ></span>
                <p>{item.card_description}</p>
                <PrismicNextLink
                  field={item.card_link}
                  style={{ textAlign: "right" }}
                >
                  <Image
                    src="/assets/icon.png"
                    alt="arrow_icon"
                    width={30}
                    height={20}
                  />
                </PrismicNextLink>
              </article>
              <article
                key={i}
                style={{
                  display: "flex",
                  width: "244px",
                  height: "266px",
                  padding: "16px",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRadius: "20px",
                  backgroundColor: "white",
                }}
              >
                <PrismicNextImage field={item.card_icon} />
                <h1>{item.card_title}</h1>
                <span
                  style={{ height: "2px", backgroundColor: "#F7F7F7" }}
                ></span>
                <p>{item.card_description}</p>
                <PrismicNextLink
                  field={item.card_link}
                  style={{ textAlign: "right" }}
                >
                  <Image
                    src="/assets/icon.png"
                    alt="arrow_icon"
                    width={30}
                    height={20}
                  />
                </PrismicNextLink>
              </article>
            </>
          ))}
      </div>
    </section>
  );
};

export default Carrousel;
