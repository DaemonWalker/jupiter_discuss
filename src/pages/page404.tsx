import { Col, Row, Typography } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";

const { Text, Title, Paragraph } = Typography;

export const Page404: FC = () => {
    return (
        <Row style={{ flex: 1 }} align="middle" justify="center">
            <Title>404</Title>
            <Paragraph>
                欢迎来到翡翠梦境
            </Paragraph>
            <Paragraph>
                <Link to="/">返回首页</Link>
            </Paragraph>
        </Row >
    );
}