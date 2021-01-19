import { Link } from "react-router-dom";
import { BlockModel } from "../../models/blockModel";
import { UrlUtil } from "../../utils/urlUtil";
import { Typography } from "antd";
import { FunctionComponent } from "react";
const { Title } = Typography;

interface IProps {
    block: BlockModel;
}

export const BlockLink: FunctionComponent<IProps> = ({ block, children }) => {
    if (children) {
        return <Link to={UrlUtil.getBlockPage(block.id)}>{<>{children}</>}</Link>;
    }

    return (
        <Link to={UrlUtil.getBlockPage(block.id)}>
            <Title level={5}>{block.name}</Title>
        </Link>
    );
};
