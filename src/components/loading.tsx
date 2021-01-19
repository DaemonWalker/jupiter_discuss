import { Col, Row, Spin } from "antd";
import { FunctionComponent } from "react";

interface IProps {
    dataSource: any;
}

export const Loading: FunctionComponent<IProps> = ({ dataSource, children }) =>
    dataSource ? (
        <>{children}</>
    ) : (
        <Row justify="center">
            <Col style={{ textAlign: "center" }}>
                <Spin size="large" />
            </Col>
        </Row>
    );
