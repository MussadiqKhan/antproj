import "./App.css";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Divider, Progress, List, Card, Switch, Tabs } from "antd";

function App() {
  const [person, setPer] = useState(0);
  //const [switched, setSwitch] = useState([]);
  const [percentage, setPercentage] = useState(0);
  const { TabPane } = Tabs;
  const dataListPart1 = [
    "XXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXXXXXXXXX"
  ];

  const dataListPart2 = [
    "XXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXXXXXXXXX"
  ];

  const dataListPart3 = [
    "XXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXXXXXXXXX"
  ];
  //TAB -----------------------------------------------------------------------//

  function callback(key) {
    console.log(key);
  }

  //Functionality for progression

  var count =
    dataListPart1.length + dataListPart2.length + dataListPart3.length;
  var tick = 0;
  useEffect(() => {
    onChange();
  });

  const onChange = checked => {
    console.log(checked);

    if (checked) {
      setPer(person + 1);
    } else if (checked == false) {
      setPer(person - 1);
      console.log(person);
    }
    var tick = (person / count) * 100;
    setPercentage(tick.toFixed(2));
  };

  //Show and Hide TABS using state
  const [clss, setClss] = useState(false);
  function showDiv() {
    setClss(!clss);
  }

  return (
    <div className="App">
      <div style={{ background: "#ECECEC", padding: "30px" }}>
        <button className="tab" onClick={showDiv}>
          <div className="card">
            <Card style={{ width: 180 }}>
              <p>Card Title</p>

              <Progress
                className="progress"
                type="circle"
                percent={percentage}
                width={100}
              />
            </Card>
          </div>
        </button>
        <Tabs
          className={clss ? "tab" : "tabs"}
          defaultActiveKey="1"
          onChange={callback}
        >
          <TabPane tab="Tab1" key="1">
            <div>
              <Divider className="divider">Card Part 1</Divider>
              <List
                dataSource={dataListPart1}
                renderItem={item => (
                  <List.Item>
                    <Switch
                      defaultUnChecked
                      className="one"
                      onChange={onChange}
                    />
                    {item}
                  </List.Item>
                )}
              />

              <Divider>Card Part 2</Divider>

              <List
                dataSource={dataListPart2}
                renderItem={item => (
                  <List.Item>
                    <Switch defaultUnChecked onChange={onChange} />
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
        ,
      </div>
      ,
    </div>
  );
}

export default App;
