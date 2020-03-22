import { List, Card, Skeleton } from 'antd'
import React from 'react'
import beispielbild from '../../assets/img/beispielbild.png'
import './ResultsList.less'

const ImageSkeleton = () => (
  <img
    alt={'loading...'}
    src={beispielbild}
  />
)

const ResultsList: React.FC<{ loading: boolean, results: any[] }> = ({
  loading,
  results
}) => (
  <div className='results-container'>
    <List
      grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 3, xl: 3, xxl: 3 }}
      loading={loading}
      dataSource={results}
      renderItem={item => (
        <List.Item key={item.title}>
          <a
            href={`https://vostel.de${item.link}`}
            target='_blank'
            rel="noopener noreferrer"
          >
            <Card
              className='result-card'
              loading={loading}
              cover={loading
                ? <ImageSkeleton />
                : <img
                  alt={item.title}
                  src={item.image1.w700.url}
                />}
              bordered={false}
            >
              <Skeleton loading={loading} active>
                <h3 className='result-title'>{item.organisation_name}</h3>
                <h4 className='result-secondary-title'>{item.title}</h4>
              </Skeleton>
            </Card>
          </a>
        </List.Item>
      )} />
    </div>
  )

  export default ResultsList
