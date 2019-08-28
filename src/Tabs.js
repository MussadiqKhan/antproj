import "./App.css";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Divider, Progress, List, Card, Switch, Tabs } from "antd";


const Tabbed = () => {
<Tabs className="tabs" defaultActiveKey="1" onChange={callback}>
  <TabPane tab="Tab1" key="1">
    <div>
      <Divider className="divider">Card Part 1</Divider>
      <List
        dataSource={dataListPart1}
        renderItem={(item, index) => (
          <List.Item>
            <Switch
              defaultUnChecked
              className="one"
              onChange={() => onChange(item, index)}
            />
            {item}
          </List.Item>
        )}
      />

      <Divider>Card Part 2</Divider>

      <List
        dataSource={dataListPart2}
        renderItem={(item, index) => (
          <List.Item>
            <Switch
              defaultUnChecked
              onChange={onChange}
              onChange={() => onChange(item, index)}
            />{" "}
            {item}
          </List.Item>
        )}
      />

      <Divider>Card Part 3</Divider>

      <List
        dataSource={dataListPart3}
        renderItem={item => (
          <List.Item>
            <Switch defaultUnChecked onChange={onChange} /> {item}
          </List.Item>
        )}
      />
    </div>
    ,
  </TabPane>

  <TabPane tab="Tab2" key="2" />

  <TabPane tab="Tab3" key="3" />
</Tabs>
}



export defaul
