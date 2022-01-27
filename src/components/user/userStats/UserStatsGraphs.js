import React from 'react';
import './style.scss'
import ApexCharts from 'react-apexcharts'

const UserStatsGraphs = ({ data }) => {

  const [graphs, setGraphs] = React.useState({})
  const [graphs2, setGraphs2] = React.useState({})
  const [total, setTotal] = React.useState(0)

  React.useEffect(() => {
    if (data.length > 0 ) setTotal(data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b))
    const graphAccessData = { 
      series: [], 
      chartOptions: {
        labels: []
      }
    }
    graphAccessData.series = data.length > 0 ? 
      data.map((item) => Number(item.acessos)) :
      []
    graphAccessData.chartOptions.labels = data.length > 0 ?
      data.map(item => item.title) :
      []
    setGraphs(graphAccessData)
    

      const graphAccessData2 = { 
        series: [], 
        chartOptions: {
          xaxis: {
            categories: [],
          },
          plotOptions: {
            bar: {
              columnWidth: '20%'
            }
          }
        }
      }
      graphAccessData2.series = data.length > 0 ? 
        [{ 
          data: data.map((item) => Number(item.acessos)), 
          name:  'item'
        }] :
        []
      graphAccessData2.chartOptions.xaxis.categories = data.length > 0 ?
        data.map(item => item.title) :
        []
    setGraphs2(graphAccessData2)
  }, [data])

  return (
    <section className='graphs'>
      <div className='total'>
        <p>Acessos: { total }</p>
      </div>
      {graphs?.series?.length > 0 && 
            <div className='chart-pie'>
              <strong>Acessos por itens: (%)</strong>
              <ApexCharts
                type='pie'
                series={graphs.series}
                options={graphs.chartOptions}
              />
            </div>
      }
      {graphs2?.series?.length > 0 && graphs2?.series[0]?.data !== undefined &&
        <div className='chart-bar'>
          <strong>Acessos por itens:</strong>
          <ApexCharts
            type='bar'
            series={graphs2.series}
            options={graphs2.chartOptions}
          />
        </div>
      }
    </section>
  );
};

export default UserStatsGraphs;
