import * as React from "react";
import * as Types from "./types";

declare function Button(props: {
  as?: React.ElementType;
  buttonSlot?: Types.Devlink.Slot;
  buttonRuntimeProps?: Types.Devlink.RuntimeProps;
  buttonText?: React.ReactNode;
}): React.JSX.Element;
