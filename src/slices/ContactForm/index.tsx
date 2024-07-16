import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ContentForm`.
 */
export type ContentFormProps = SliceComponentProps<Content.ContentFormSlice>;

/**
 * Component for "ContentForm" Slices.
 */
const ContentForm = ({ slice }: ContentFormProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for content_form (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ContentForm;
