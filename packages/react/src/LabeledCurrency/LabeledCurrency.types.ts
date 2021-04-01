import { CurrencyProps } from "@components/Currency";
import { Omit } from "@material-ui/types";
import { Optional } from "@components/types/Optional";
import { TypographyProps } from "@components/Typography";

type OmittedCurrencyKeys = "css";
type OmittedCurrencyProps = Omit<CurrencyProps, OmittedCurrencyKeys>;

export interface LabeledCurrencyProps {

    /**
     * @example `{ value: 100 }`
     * @required
     */
    CurrencyProps?: Optional<OmittedCurrencyProps, "value">;

    /**
     * @optional
     */
    CurrencyTypographyProps?: TypographyProps;

    /**
     * @example "The total amount to be paid will be $100"
     * @required
     * @type string
     */
    "aria-label": TypographyProps["aria-label"];

    /**
     * @optional
     * @type "off" | "assertive" | "polite"
     */
    "aria-live"?: TypographyProps["aria-live"];

    /**
     * @example "Total amount to be paid"
     * @required
     * @type node
     */
    children: TypographyProps["children"];

    /**
     * @optional
     * @type string
     */
    className?: TypographyProps["className"];

    /**
     * @default true
     * @example true
     * @optional
     * @type boolean
     */
    gutterBottom?: TypographyProps["gutterBottom"];

    /**
     * @default horizontal
     * @optional
     * @type "horizontal" | "vertical"
     */
    orientation?: "horizontal" | "vertical";

    /**
     * @default true
     * @example true
     * @optional
     * @type boolean
     */
    paragraph?: TypographyProps["paragraph"];

    /**
     * @optional
     */
    ref?: TypographyProps["ref"];

    /**
     * @example "alert"
     * @optional
     * @type "alert" | string
     */
    role?: TypographyProps["role"];

    /**
     * @optional
     */
    value?: CurrencyProps["value"];

    /**
     * @default bodyText1
     * @example "bodyText1"
     * @optional
     */
    variant?: TypographyProps["variant"];
}
