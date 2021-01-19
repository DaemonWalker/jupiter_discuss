import React from "react";
import { List, Col } from "antd";
import { Link } from "react-router-dom";
import { IssueModel } from "../../models/issueModel";
import { IconText } from "../iconText";
import { MessageOutlined } from "@ant-design/icons";
import { IssueLink } from "../links/issueLink";
import { UserLink } from "../links/userLink";
import { IssueSummary } from "./issueSummary";
import { listenerCount } from "process";

export class IssueList extends React.Component<IProps, IState> {
    render() {
        return (
            <List
                header={<div>{this.props.title}</div>}
                itemLayout="horizontal"
                footer={this.generateFooter()}
                dataSource={this.props.dataSource}
                renderItem={(item, idx) => (
                    <List.Item>
                        Show<IssueSummary issue={item} />
                    </List.Item>
                )}
                bordered
            />
        );
    }

    generateFooter = (): JSX.Element => {
        if (this.props.showShowmoreButton == false) {
            return <></>;
        }
        return (
            <div style={{ textAlign: "right" }}>
                <Link to={this.props.showmoreLink ?? ""}>显示更多</Link>
            </div>
        );
    };
}

const defaultProps = {
    maxShowCount: 10,
    showShowmoreButton: false,
    showmoreLink: "",
};
type IProps = {
    title: string;
    dataSource: IssueModel[];
} & Partial<typeof defaultProps>;
interface IState {}
