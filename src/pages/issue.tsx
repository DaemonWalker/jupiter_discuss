import { Col, Row, Typography } from "antd";
import { FunctionComponent, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Floor } from "../components/issues/floor";
import { UserModel } from "../models/userModel";

const { Paragraph, Title } = Typography;

export const Issue: FunctionComponent<IProps> = ({ match }) => {

    useEffect(() => {
        return () => {

        }
    });

    let submiter: UserModel = {
        nickName: "木瓜凤梨",
        id: 1,
        avatar: ""
    };

    return (
        <div className="normal-content">
            <Row justify="space-around" align="middle">
                <Col flex="200px" className="issue-left">
                    查看:200 回帖:50
                    {/* <Paragraph>查看:200 回帖:50</Paragraph> */}
                </Col>
                <Col flex="auto">
                    <Title level={4}>这是用于测试的标题</Title>
                </Col>
            </Row>
            <Row>
                <Floor user={submiter}></Floor>
            </Row>
        </div>
    );
}

interface MatchParms {
    id: string;
}
interface IProps extends RouteComponentProps<MatchParms> { }