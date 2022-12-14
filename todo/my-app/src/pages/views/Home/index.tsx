import { Space, Switch, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react'
import { useThemeSwitcher } from 'react-css-theme-switcher';

type Props = {}
interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    // render(text, record) {
    //   return {
    //     props: {
    //       style: {background: "red"}
    //     },
    //     children: <>{text}</>
    //   }
    // }
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const Home = (props: Props) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>();
  const { switcher, themes } = useThemeSwitcher();

  function toggleTheme(isChecked: boolean) { // added
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };
  return (
    <div>
      <div className="main fade-in"> // added
        <Switch
          checkedChildren="????"
          unCheckedChildren="????"
          checked={isDarkMode}
          onChange={toggleTheme}
        />
      </div>
      <Table dataSource={data} columns={columns} />;
    </div>
  )
}

export default Home