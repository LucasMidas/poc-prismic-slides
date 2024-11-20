import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

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
        height: "500px",
        borderRadius: "120px 120px 0px 0px",
        display: "grid",
        gridTemplateColumns: "3fr 2fr",
        justifyItems: "center",
        alignItems: "center",
        gap: "16px",
        width: "100%",
      }}
    >
      <article
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          maxWidth: "500px",
        }}
      >
        <header>
          <PrismicRichText field={slice.primary.footer_section_main_text} />
          <PrismicRichText
            field={slice.primary.footer_section_highlighted_text}
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
      <figure style={{ height: "100%" }}>
        <PrismicNextImage
          field={slice.primary.footer_section_image}
          style={{
            width: "auto",
            objectFit: "contain",
            height: "100%",
            position: "relative",
          }}
        />
      </figure>
    </section>
  );
};

export default FooterSection;
