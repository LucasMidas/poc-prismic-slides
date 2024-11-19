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
        height: "calc(100vh - 150px)",
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        backgroundColor: "blue",
      }}
    >
      <section>
        {isFilled.keyText(slice.primary.title) && (
          <header>
            <h1>{slice.primary.title}</h1>
          </header>
        )}
        {isFilled.keyText(slice.primary.title) && (
          <header>
            <h2>{slice.primary.title}</h2>
          </header>
        )}
        {isFilled.keyText(slice.primary.text) && <p>{slice.primary.text}</p>}

        <div>
          {isFilled.link(slice.primary.download_link) && (
            <span>
              <PrismicNextLink field={slice.primary.download_link}>
                {slice.primary.download_link.text}
              </PrismicNextLink>
            </span>
          )}
          {isFilled.link(slice.primary.more_information_link) && (
            <span>
              <PrismicNextLink field={slice.primary.more_information_link} />
            </span>
          )}
        </div>
      </section>
      {isFilled.image(slice.primary.simpson_image) && (
        <figure style={{ width: "100%", padding: "16px", height: "100%" }}>
          <PrismicNextImage
            field={slice.primary.simpson_image}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </figure>
      )}
    </section>
  );
};

export default ContentSection;
