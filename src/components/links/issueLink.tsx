import React from 'react';
import { Link } from 'react-router-dom';
import { UrlUtil } from '../../utils/urlUtil';
import { Typography } from 'antd'
import { IssueModel } from '../../models/issueModel';
const { Paragraph } = Typography;

export class IssueLink extends React.Component<IProps>{
    render() {
        return (
            <Link to={UrlUtil.getIssuePage(this.props.issue.id)}>
                <Paragraph ellipsis title={this.props.issue.title}>
                    {this.props.issue.title}
                </Paragraph>
            </Link>
        );
    }
}

interface IProps {
    issue: IssueModel;
}