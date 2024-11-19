import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `NavBar`.
 */
export type NavBarProps = SliceComponentProps<Content.NavBarSlice>;

/**
 * Component for "NavBar" Slices.
 */
const NavBar = ({ slice }: NavBarProps): JSX.Element => {
  return (
    <nav
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{
        width: "auto",
        height: "88px",
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
        padding: "16px",
        justifyContent: "space-between",
      }}
    >
      {isFilled.image(slice.primary.logo) && (
        <figure style={{ display: "flex", alignItems: "center" }}>
          <PrismicNextImage field={slice.primary.logo} />
        </figure>
      )}
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 1fr",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {isFilled.group(slice.primary.links) &&
            slice.primary.links.map((link, i) => (
              <li key={i} style={{ listStyleType: "none" }}>
                <PrismicNextLink field={link.link} />
              </li>
            ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "16px",
          }}
        >
          {isFilled.link(slice.primary.sign_in) && (
            <li style={{ listStyleType: "none" }}>
              <PrismicNextLink
                field={slice.primary.sign_in}
                style={{ color: "#6439FF" }}
              />
            </li>
          )}
          {isFilled.link(slice.primary.sign_up) && (
            <li style={{ listStyleType: "none" }}>
              <PrismicNextLink
                field={slice.primary.sign_up}
                style={{
                  padding: "10px 20px",
                  borderRadius: "6px",
                  background: "#6439FF",
                  color: "white",
                }}
              />
            </li>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
