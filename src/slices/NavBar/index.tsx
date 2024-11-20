import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `NavBar`.
 */
export type NavBarProps = SliceComponentProps<Content.NavBarSlice>;
import styles from "./nav-bar.module.css";
import Image from "next/image";

/**
 * Component for "NavBar" Slices.
 */
const NavBar = ({ slice }: NavBarProps): JSX.Element => {
  console.log(slice.primary);
  return (
    <nav
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles["nav-bar"]}
    >
      <Image
        aria-hidden
        src="/menu_icon.svg"
        alt="menu_icon"
        width={40}
        height={40}
        className={styles["menu_icon"]}
      />
      {isFilled.image(slice.primary.logo) && (
        <figure className={styles.logo}>
          <PrismicNextImage field={slice.primary.logo} />
        </figure>
      )}
      <ul className={styles.menu}>
        <div className={styles["menu-links-group"]}>
          {isFilled.group(slice.primary.links) &&
            slice.primary.links.map((link, i) => (
              <li key={i} style={{ listStyleType: "none" }}>
                <PrismicNextLink field={link.link} />
              </li>
            ))}
        </div>
        <div className={styles["menu-fixed-links"]}>
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
                className={styles["sign-up-link"]}
              />
            </li>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
