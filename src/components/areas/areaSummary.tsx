import { Card, Col, Row, Space } from "antd";
import { FunctionComponent } from "react";
import { AreaModel } from "../../models/areaModel";
import { BlockSummary } from "../blocks/blockSummary";
import { FlexDiv } from "../flexDiv";

interface IProps {
    area: AreaModel;
    showTitle?: boolean;
}

export const AreaSummary: FunctionComponent<IProps> = ({ area, showTitle }) => (
    <Row>
        <Col span={24}>
            <Card title={showTitle ? area.name : ""} bordered={false}>
                <Row>
                    {area.blocks.map((block) => (
                        <Col lg={4} md={8} xs={24}>
                            <BlockSummary block={block} key={`blocks${Math.random()}`} />
                        </Col>
                    ))}
                </Row>
            </Card>
        </Col>
    </Row>
);
