import { GoogleCircleFilled } from "@ant-design/icons";
import { Avatar, Card, Col, Row, Typography } from "antd";
import { FC } from "react";
import ReactMarkdown from "react-markdown";
import { UserModel } from "../../models/userModel";
import { UserLink } from "../links/userLink";

const { Paragraph } = Typography;

export const Floor: FC<IProps> = ({ user }) => {

    return (
        <Row style={{ flex: 1 }}>
            <Col flex="200px">
                <Card style={{ width: "100%" }} className="issue-left">
                    <UserLink user={user}>用户名</UserLink>
                    <Avatar size={128} icon={<GoogleCircleFilled />} />
                </Card>
            </Col>
            <Col flex="auto">
                <Row>
                    <Col span={24}></Col>
                    <Col span={24}>
                        <ReactMarkdown children={"# title"}></ReactMarkdown>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

interface IProps {
    user: UserModel;
}