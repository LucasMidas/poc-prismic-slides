import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ContentSection`.
 */
export type ContentSectionProps =
  SliceComponentProps<Content.ContentSectionSlice>;

/**
 * Component for "ContentSection" Slices.
 */
const ContentSection = ({ slice }: ContentSectionProps): JSX.Element => {
  console.log(slice);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {isFilled.richText(slice.primary.title) && (
        <div style={{ textAlign: "center" }}>
          <PrismicRichText field={slice.primary.title} />
        </div>
      )}
      {isFilled.image(slice.primary.simpson_image) && (
        <PrismicNextImage
          field={slice.primary.simpson_image}
          style={{ width: "100vw", height: "100vh" }}
        />
      )}
    </section>
  );
};

export default ContentSection;
