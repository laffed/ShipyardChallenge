import React, {useEffect} from 'react'
import {useOvermind} from '@state';

export default function Home() {
  const userArr = useOvermind().state.user;
  const isLoading = useOvermind().state.remote;

  const onMount = async () => {

  }

  useEffect(() => {
    onMount();
  }, []);


  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}