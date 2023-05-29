import React from "react";
import { DatePicker, Space, Rate, Badge, Dropdown, Table } from "antd";
import { DownOutlined } from "@ant-design/icons";

const onChange = (date, dateString) => {
  /*
  date(obj): format lại ngày tháng năm theo sever
  api qui định format là :dd/MM/yyyy
  client :MM/dd/yyyy => dùng date chuyển về format backend cần  
  */
  console.log(date, dateString);
};
const items = [
  {
    key: "1",
    label: "Action 1",
  },
  {
    key: "2",
    label: "Action 2",
  },
];
export default function DemonAntd() {
  const expandedRowRender = () => {
    const columns = [
      {
        title: "Date",
        dataIndex: "date",
        key: "date",
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Status",
        key: "state",
        render: () => {
          return <i className="fa fa-heart text-danger"></i>;
        },
      },
      {
        title: "Upgrade Status",
        dataIndex: "upgradeNum",
        key: "upgradeNum",
      },
      {
        title: "Action",
        dataIndex: "operation",
        key: "operation",
        render: () => (
          <Space size="middle">
            <a>Pause</a>
            <a>Stop</a>
            <Dropdown
              menu={{
                items,
              }}
            >
              <a>
                More <DownOutlined />
              </a>
            </Dropdown>
          </Space>
        ),
      },
    ];
    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i.toString(),
        date: "2014-12-24 23:12:00",
        name: "This is production name",
        upgradeNum: "Upgraded: 56",
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };
  const columns = [
    {
      title: "Họ tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Platform",
      dataIndex: "platform",
      key: "platform",
    },
    {
      title: "Version",
      dataIndex: "version",
      key: "version",
    },
    {
      title: "Upgraded",
      dataIndex: "upgradeNum",
      key: "upgradeNum",
    },
    {
      title: "Creator",
      dataIndex: "creator",
      key: "creator",
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Action",
      key: "operation",
      render: () => <a>Publish</a>,
    },
  ];
  const data = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i.toString(),
      name: "Screen",
      platform: "iOS",
      version: "10.3.4.5654",
      upgradeNum: 500,
      creator: "Jack",
      createdAt: "2014-12-24 23:12:00",
    });
  }
  return (
    <div className="container">
      <Space direction="vertical">
        <DatePicker
          onChange={onChange}
          format={"MM/DD/YYYY"}
          showTime={true}
          showToday={true}
        />
        <Rate
          style={{ color: "purple" }}
          allowHalf
          defaultValue={2.5}
          onChange={(value) => {
            console.log(value);
          }}
        />
        <Table
          columns={columns}
          expandable={{
            expandedRowRender,
            defaultExpandedRowKeys: ["0"],
          }}
          dataSource={data}
        />
      </Space>
    </div>
  );
}
