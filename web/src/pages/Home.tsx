import React, {useState, useEffect, MouseEvent} from 'react'
import {useOvermind} from '@state';
import {useHistory} from 'react-router-dom';
import {Table, Space} from 'antd';
import {UserObj} from '@types';
const {Column} = Table;

export default function Home() {
  const userArr = useOvermind().state.user;
  const {getUsersData} = useOvermind().actions.user;
  const {setPending} = useOvermind().actions.remote;
  const {pending} = useOvermind().state.remote;
  const [err, setErr] = useState<boolean>(false);
  const history = useHistory();

  const onMount = async () => {
    if (!userArr.length) {
      if (!await getUsersData()) {
        setErr(true)
      }
    }
  }

  useEffect(() => {
    onMount();
  }, []);

  if (pending) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (err) {
    return (
      <div>
        <h1>Error fetching data</h1>
      </div>
    );
  }

  const handleClick = (e: MouseEvent, user: UserObj) => {
    e.preventDefault();
    setPending(true);
    history.push(`/user/${user.id}`);
  }

  return (
    <div>
      <Table
        dataSource={userArr}
        onRow={(record, rowIndex) => {
          return {
            onClick: e => handleClick(e, record)
          }
        }}
      >
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="" dataIndex="first_name" key="firstName" />
        <Column title="Email" dataIndex="last_name" key="lastName" />
      </Table>
    </div>
  );
}