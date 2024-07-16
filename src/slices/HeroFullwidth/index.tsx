import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeroFullwidth`.
 */
export type HeroFullwidthProps =
  SliceComponentProps<Content.HeroFullwidthSlice>;

/**
 * Component for "HeroFullwidth" Slices.
 */
const HeroFullwidth = ({ slice }: HeroFullwidthProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for hero_fullwidth (variation: {slice.variation})
      Slices
    </section>
  );
};

export default HeroFullwidth;
