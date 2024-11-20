import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Prueba`.
 */
export type PruebaProps = SliceComponentProps<Content.PruebaSlice>;

/**
 * Component for "Prueba" Slices.
 */
const Prueba = ({ slice }: PruebaProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for prueba (variation: {slice.variation}) Slices
    </section>
  );
};

export default Prueba;
