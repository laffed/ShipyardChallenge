import React, {useState, useEffect} from 'react'
import {useOvermind} from '@state';
import {useParams, useHistory} from 'react-router-dom';
import {UserObj, ParamTypes} from '@types';

export default function User() {
  const {getSingleUserData} = useOvermind().actions.user;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<UserObj | false>(false)
  const {userId} = useParams<ParamTypes>();
  const history = useHistory();

  const onMount = async () => {
    const res = await getSingleUserData(userId);
    if (!res) {
      history.push("/404");
      return;
    }
    setData(res);
    setLoading(false);
  }

  useEffect(() => {
    if (!data) {
      onMount();
    }
  }, []);

  if (loading || data === false) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }


  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <h1>{`${data.first_name} ${data.last_name}`}</h1>
      <h3>{`Email: ${data.email}`}</h3>
      <h3>{`Favorite Color: ${data.favorite_color}`}</h3>
      <h3>{data.number_of_pets > 0 ? `Parent to ${data.number_of_pets}` : `Doesn't own any pets.`}</h3>
    </div>
  );
}