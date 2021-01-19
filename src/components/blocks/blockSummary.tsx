import { ArrowDownOutlined, WindowsOutlined } from "@ant-design/icons";
import { Avatar, Typography } from "antd";
import React, { FunctionComponent } from "react";
import { BlockModel } from "../../models/blockModel";
import { FlexDiv } from "../flexDiv";
import { BlockLink } from "../links/blockLink";
const { Title, Paragraph } = Typography;

export const BlockSummary: FunctionComponent<IProps> = ({ block }) => (
    <BlockLink block={block}>
        <FlexDiv>
            <div>
                <Avatar size={64} icon={<WindowsOutlined />} />
            </div>
            <FlexDiv flexDirection="column">
                <div>
                    <BlockLink block={block} />
                </div>
                <div>
                    <Paragraph ellipsis={{ rows: 2 }} title={block.description}>
                        {block.description}
                    </Paragraph>
                </div>
            </FlexDiv>
        </FlexDiv>
    </BlockLink>
);

interface IProps {
    block: BlockModel;
}
