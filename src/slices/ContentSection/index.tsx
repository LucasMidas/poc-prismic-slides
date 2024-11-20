import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./content-section.module.css";
/**
 * Props for `ContentSection`.
 */
export type ContentSectionProps =
  SliceComponentProps<Content.ContentSectionSlice>;

/**
 * Component for "ContentSection" Slices.
 */
const ContentSection = ({ slice }: ContentSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles["content-section-container"]}
    >
      <article className={styles["content-section-article"]}>
        {isFilled.keyText(slice.primary.title) && (
          <header>
            <h1 className={styles["content-section-header"]}>
              {slice.primary.title}
            </h1>
          </header>
        )}
        {isFilled.keyText(slice.primary.subtitle) && (
          <header>
            <h2 className={styles["content-section-secondary-header"]}>
              {slice.primary.subtitle}
            </h2>
          </header>
        )}
        {isFilled.keyText(slice.primary.text) && (
          <p className={styles["content-section-description"]}>
            {slice.primary.text}
          </p>
        )}
        <div className={styles["content-section-call-to-action"]}>
          {isFilled.link(slice.primary.download_link) && (
            <PrismicNextLink
              field={slice.primary.download_link}
              style={{
                padding: "10px 20px",
                borderRadius: "6px",
                background: "#6439FF",
                color: "white",
              }}
            >
              {slice.primary.download_link.text}
            </PrismicNextLink>
          )}
          {isFilled.link(slice.primary.more_information_link) && (
            <PrismicNextLink
              field={slice.primary.more_information_link}
              style={{
                padding: "10px 20px",
                borderRadius: "6px",
                background: "#F7F7F7",
                color: "black",
              }}
            >
              {slice.primary.more_information_link.text}
            </PrismicNextLink>
          )}
        </div>
      </article>
      <span className={styles["content-section-decoration"]} />
      {isFilled.image(slice.primary.phone_image) && (
        <figure className={styles["content-section-image"]}>
          <PrismicNextImage
            field={slice.primary.phone_image}
            style={{
              padding: "16px 0px",
              width: "auto",
              objectFit: "contain",
              height: "100%",
              position: "relative",
            }}
          />
        </figure>
      )}
    </section>
  );
};

export default ContentSection;
