import type { ChipProps as MaterialChipProps } from "@material-ui/core/Chip";

export type ChipProps = Omit<MaterialChipProps, "size" | "variant">;