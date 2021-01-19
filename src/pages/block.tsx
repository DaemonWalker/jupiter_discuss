import { Col, List, Row, Typography } from "antd";
import React, { FunctionComponent, useEffect, useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { IssueSummary } from "../components/issues/issueSummary";
import { Loading } from "../components/loading";
import { BlockModel } from "../models/blockModel";
import { IssueModel } from "../models/issueModel";
import { isLoading } from "../utils/extenssions";

const { Text, Title } = Typography;


let state: State | null = null;

export const Block: FunctionComponent<IProps> = ({ match }) => {
    //const [state, setState] = useState<State>(new State());
    state = {
        id: match.params.id,
        top: [],
        topics: [
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
        ],
        block: { name: ".Net", description: "welcome to .Net 5", avatar: "", id: 22 },
    };
    useEffect(() => {
        console.log(match.params.id);
        return () => {
            state = {
                id: match.params.id,
                top: [],
                topics: [
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
                ],
                block: { name: ".Net", description: "welcome to .Net 5", avatar: "", id: 22 },
            }
        }
    });

    return (
        <div className="normal-content">
            <Loading dataSource={state}>
                <Row gutter={[0, 24]}>
                    <Col span={24}>
                        <Title level={3}>{state?.block.name}</Title>
                    </Col>
                    <Col span={24}>
                        <Text>{state?.block.description}</Text>
                    </Col>
                    <Col span={24}>
                        <List
                            header={<Text>置顶</Text>}
                            loading={isLoading(state?.top)}
                            dataSource={state?.top}
                            bordered
                        />
                    </Col>
                    <Col span={24}>
                        <List
                            bordered
                            header={<Text>帖子一览</Text>}
                            renderItem={(item: IssueModel) => <List.Item><IssueSummary issue={item} /></List.Item>}
                            dataSource={state?.topics}
                            loading={isLoading(state?.topics)}
                            pagination={{
                                pageSize: 20,
                                onChange: (idx, size) => console.log(idx, size),
                                showSizeChanger: true,
                            }}
                        /></Col>
                </Row>
            </Loading>
        </div>
    );
}

interface MatchParams {
    id: string;
}
interface IProps extends RouteComponentProps<MatchParams> { }

class State {
    id: string = "";
    block: BlockModel = {
        id: 0,
        name: "",
        description: "",
        avatar: ""
    };
    topics: IssueModel[] = [];
    top: IssueModel[] = [];
}
