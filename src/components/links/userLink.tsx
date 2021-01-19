import React from 'react';
import { Link } from 'react-router-dom';
import { UserModel } from "../../models/userModel";
import { UrlUtil } from '../../utils/urlUtil';
import { Typography } from 'antd'
const { Paragraph } = Typography;

export class UserLink extends React.Component<IProps>{
    render() {
        return (
            <Link to={UrlUtil.getUserPage(this.props.user.id)}>
                <Paragraph ellipsis title={this.props.user.nickName}>
                    {this.props.user.nickName}
                </Paragraph>
            </Link>
        );
    }
}

interface IProps {
    user: UserModel;
}