import React from 'react';
import { useRequest } from '../../../hooks/useRequest';
import { statsGet } from '../../../services/endpoints/userService';
import Error from '../../helpers/Error';
import Head from '../../helpers/Head';
import Loading from '../../helpers/loading';

const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'))

const UserStats = () => {
  const {data, loading, error, request} = useRequest()

  React.useEffect(() => {
    async function getData() {
      const token = localStorage.getItem('token')
      request({
        requestAPI: statsGet({
          TOKEN: token
        })
      })
    }

    getData()
  }, [request])

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (data) return (
    <React.Suspense fallback={<div></div>}>
      <Head title="Estatísticas" />
      <UserStatsGraphs data={data} />
    </React.Suspense>
  )
  else return null
};

export default UserStats;
