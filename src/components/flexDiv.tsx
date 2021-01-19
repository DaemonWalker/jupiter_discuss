import { FunctionComponent } from "react";

class IProps {
    flexDirection?: "column" | "column-reverse" | "row" | "row-reverse" = "column";
}

export const FlexDiv: FunctionComponent<IProps> = ({ flexDirection, children }) => (
    <div
        style={{
            display: "flex",
            flexDirection: flexDirection,
        }}
    >
        {children}
    </div>
);
