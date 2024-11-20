import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from "./footer-section.module.css";
/**
 * Props for `FooterSection`.
 */
export type FooterSectionProps =
  SliceComponentProps<Content.FooterSectionSlice>;

/**
 * Component for "FooterSection" Slices.
 */
const FooterSection = ({ slice }: FooterSectionProps): JSX.Element => {
  console.log(slice.primary);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{
        backgroundColor:
          slice.primary.footer_section_background_color || "#0C8CE9",
      }}
      className={styles["footer-section-container"]}
    >
      <span
        style={{
          width: "50vw",
          height: "100%",
          backgroundColor: "#00FFB3",
          position: "absolute",
          zIndex: "1",
          rotate: "-105deg",
          borderRadius: "100px",
          bottom: "-480px",
          left: "-32px",
        }}
      />
      <span className={styles["footer-section-background-right"]} />
      <article className={styles["footer-section-article"]}>
        <header>
          <PrismicRichText
            field={slice.primary.footer_section_main_text}
            components={{
              heading1: ({ children }) => (
                <h1
                  style={{
                    fontSize: "2em",
                    fontWeight: 400,
                    textWrap: "balance",
                  }}
                >
                  {children}{" "}
                  <strong>
                    {slice.primary.footer_section_highlighted_text}
                  </strong>
                </h1>
              ),
            }}
          />
        </header>
        <PrismicRichText field={slice.primary.footer_section_secondary_text} />
        <PrismicNextLink
          field={slice.primary.footer_section_link}
          style={{
            padding: "10px 20px",
            borderRadius: "6px",
            background: "#6439FF",
            color: "white",
            width: "fit-content",
          }}
        />
      </article>
      <figure className={styles["footer-section-image"]}>
        <PrismicNextImage
          field={slice.primary.footer_section_image}
          style={{
            right: "-24px",
            width: "auto",
            objectFit: "contain",
            height: "99%",
          }}
        />
      </figure>
    </section>
  );
};

export default FooterSection;
