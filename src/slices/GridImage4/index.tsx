import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `GridImage4`.
 */
export type GridImage4Props = SliceComponentProps<Content.GridImage4Slice>;

/**
 * Component for "GridImage4" Slices.
 */
const GridImage4 = ({ slice }: GridImage4Props): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for grid_image4 (variation: {slice.variation})
      Slices
    </section>
  );
};

export default GridImage4;
