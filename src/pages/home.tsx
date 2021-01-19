import React from "react";
import { List, Typography, Divider, Row, Col, Card } from "antd";
import { IssueList } from "../components/issues/issueLists";
import { IssueModel } from "../models/issueModel";
import { IssueSummary } from "../components/issues/issueSummary";
import { AreaSummary } from "../components/areas/areaSummary";
import { AreaModel } from "../models/areaModel";
import { Loading } from "../components/loading";
import { BlockModel } from "../models/blockModel";

const { Text } = Typography;

export class Home extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            areas: [
                {
                    name: "畅谈天下",
                    id: 1,
                    blocks: [
                        {
                            id: 1,
                            name: "日常闲聊",
                            description: "说说日常，平时发生的事情，畅所欲言~",
                            avatar: "",
                        },
                        {
                            id: 1,
                            name: "日常闲聊",
                            description: "说说日常，平时发生的事情，畅所欲言~",
                            avatar: "",
                        },
                        {
                            id: 1,
                            name: "日常闲聊",
                            description: "说说日常，平时发生的事情，畅所欲言~",
                            avatar: "",
                        },
                        {
                            id: 1,
                            name: "日常闲聊",
                            description: "说说日常，平时发生的事情，畅所欲言~",
                            avatar: "",
                        },
                        {
                            id: 1,
                            name: "日常闲聊",
                            description: "说说日常，平时发生的事情，畅所欲言~",
                            avatar: "",
                        },
                    ],
                },
                {
                    name: "技术交流",
                    id: 2,
                    blocks: [
                        {
                            id: 21,
                            name: "Java",
                            description: "Java是世界上最好的语言！",
                            avatar: "",
                        },
                        {
                            id: 22,
                            name: ".Net",
                            description: "听说.Net不只能用在Windows上面？",
                            avatar: "",
                        },
                        {
                            id: 23,
                            name: "前端",
                            description: "Vue vs React vs NG vs JQuery",
                            avatar: "",
                        },
                        {
                            id: 24,
                            name: "移动开发",
                            description: "你用什么手机？",
                            avatar: "",
                        },
                    ],
                },
            ],
            favourites: {
                name: "我的最爱",
                id: 1,
                blocks: [
                    {
                        id: 22,
                        name: ".Net",
                        description: "听说.Net不只能用在Windows上面？",
                        avatar: "",
                    },
                    {
                        id: 23,
                        name: "前端",
                        description: "Vue vs React vs NG vs JQuery",
                        avatar: "",
                    },
                ],
            },
        };
    }
    render() {
        let newIssues: IssueModel[] = [
            {
                title:
                    "这是一个非常长的标题，以至于我都不知道首页能不能完整的把他显示出来。如果你能看到这里，说明你在用一块带鱼屏。",
                replyCount: 1,
                author: { nickName: "daemon", id: 1, avatar: "" },
                replies: [],
                id: 1,
                publishDate: "2020-12-28",
            },
            {
                title: "怎么又下雪了，我吐了",
                replyCount: 120,
                author: { nickName: "daemon", id: 1, avatar: "" },
                replies: [],
                id: 3,
                publishDate: "2020-12-28",
            },
            {
                title: "猜猜年会都有什么奖项",
                replyCount: 4,
                author: { nickName: "daemon", id: 1, avatar: "" },
                replies: [],
                id: 2,
                publishDate: "2020-12-28",
            },
        ];
        return (
            <div className="normal-content">
                <Row gutter={[24, 24]} style={{ flex: 1 }}>
                    <Col lg={12} md={24}>
                        <IssueList title="新帖子" dataSource={newIssues} />
                    </Col>
                    <Col lg={12} md={24}>
                        <IssueList title="24小时热帖" dataSource={newIssues} />
                    </Col>
                </Row>
                <Row gutter={[24, 24]}>
                    <Loading dataSource={this.state.favourites}>
                        <Col span={24}>
                            <Card title={"我的收藏"}>
                                <AreaSummary area={this.state.favourites} />
                            </Card>
                        </Col>
                    </Loading>
                </Row>
                <Row gutter={[0, 24]}>
                    <Col span={24}>
                        <Loading dataSource={this.state.areas}>
                            <List
                                dataSource={this.state.areas}
                                header={<Text>分区板块</Text>}
                                renderItem={(ele: AreaModel) => (
                                    <List.Item>
                                        <Col span={24}>
                                            <AreaSummary area={ele} showTitle={true} />
                                        </Col>
                                    </List.Item>
                                )}
                                bordered
                            ></List>
                        </Loading>
                    </Col>
                </Row>
            </div>
        );
    }
    renderItem = (issueModel: IssueModel, index: number) => {
        return <></>;
    };
}
interface IProps { }
interface IState {
    areas: AreaModel[];
    favourites: AreaModel;
}
