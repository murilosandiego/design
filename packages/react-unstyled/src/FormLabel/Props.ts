import type { ElementType, HTMLAttributes, ReactNode, Ref } from "react";

type Attributes = HTMLAttributes<HTMLLabelElement | HTMLElement>

type ClassKey =
  | "root" | string;

export interface Props {

  /**
   * The content of the component.
   *
   * @optional
   * @type node
   */
  children?: ReactNode

  /**
   * @optional
   * @type object
   */
  classes?: Record<ClassKey, Attributes["className"]>

  /**
   * @optional
   * @type string
   */
  className?: Attributes["className"]

  /**
   * @default "label"
   * @optional
   * @type element
   */
  component?: ElementType

  /**
   * @optional
   * @type ref
   */
  ref?: Ref<HTMLLabelElement>
}
