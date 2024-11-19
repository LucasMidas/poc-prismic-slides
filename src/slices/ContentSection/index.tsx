import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ContentSection`.
 */
export type ContentSectionProps =
  SliceComponentProps<Content.ContentSectionSlice>;

/**
 * Component for "ContentSection" Slices.
 */
const ContentSection = ({ slice }: ContentSectionProps): JSX.Element => {
  console.log(slice.primary.title);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{
        height: "calc(100vh - 88px)",
        display: "grid",
        gridTemplateColumns: "1.5fr 1fr",
      }}
    >
      <article
        style={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "16px",
        }}
      >
        {isFilled.keyText(slice.primary.title) && (
          <header>
            <h1 style={{ fontSize: "3.5rem", fontWeight: 700 }}>
              {slice.primary.title}
            </h1>
          </header>
        )}
        {isFilled.keyText(slice.primary.subtitle) && (
          <header>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 400 }}>
              {slice.primary.subtitle}
            </h2>
          </header>
        )}
        {isFilled.keyText(slice.primary.text) && (
          <p style={{ fontSize: "1em" }}>{slice.primary.text}</p>
        )}
        <div style={{ display: "flex", gap: "16px", paddingTop: "16px" }}>
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
      {isFilled.image(slice.primary.simpson_image) && (
        <figure
          style={{
            height: "calc(100vh - 88px)",
            display: "flex",
            justifyContent: "right",
          }}
        >
          <PrismicNextImage
            field={slice.primary.simpson_image}
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
