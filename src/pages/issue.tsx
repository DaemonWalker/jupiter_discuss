import { FunctionComponent, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

export const Issue: FunctionComponent<IProps> = () => {

    useEffect(() => {
        return () => {

        }
    });

    return (<></>);
}

interface MatchParms {
    id: string;
}
interface IProps extends RouteComponentProps<MatchParms> { }