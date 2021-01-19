import { Space } from "antd";
import React, {
    ClassType,
    Component,
    ComponentClass,
    ComponentState,
} from "react";

export class IconText extends React.Component<IProps> {
    render() {
        return (
            <Space>
                {React.createElement(this.props.icon)}
                {this.props.text}
            </Space>
        );
    }
}

interface IProps {
    text: string;
    icon: any;
}
