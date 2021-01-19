import { Badge, Col, Descriptions, Row, Space, Typography } from "antd";
import { MessageOutlined } from "@ant-design/icons";
import React from "react";
import { IssueModel } from "../../models/issueModel";
import { UrlUtil } from "../../utils/urlUtil";
import { Link } from "react-router-dom";
import { UserLink } from "../links/userLink";
import { IssueLink } from "../links/issueLink";
const { Paragraph } = Typography;

export class IssueSummary extends React.Component<IProps, IState> {
    render() {
        return (
            <Row gutter={36} style={{ width: "100%" }}>
                <Col span={12}>
                    <IssueLink issue={this.props.issue}></IssueLink>
                </Col>
                <Col span={4} style={{ textAlign: "right" }}>
                    <UserLink user={this.props.issue.author} />
                </Col>
                <Col span={4} style={{ textAlign: "right" }}>
                    {this.props.issue.publishDate}
                </Col>
                <Col span={4}>
                    <div style={{ textAlign: "right" }}>
                        <MessageOutlined twoToneColor="#52c41a" />
                        <Badge count={this.props.issue.replyCount} overflowCount={99}></Badge>
                    </div>
                </Col>
            </Row>
        );
    }
}

interface IProps {
    issue: IssueModel;
}

interface IState {}
