import React from 'react'
import {
  Row,
  Col,
  Form,
  Input,
  Select,
  Collapse,
  DatePicker,
  Card,
  List,
  Skeleton 
} from 'antd'
import beispielbild from '../../assets/img/beispielbild.png'
import './BecomeActive.less'

const { Option } = Select
const { Panel } = Collapse
const { RangePicker } = DatePicker

const ImageSkeleton = () => (
  <img
    alt={'loading...'}
    src={beispielbild}
  />
)

const BecomeActive = () => {
  const [results, setResults] = React.useState<any[]>([])
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    fetch('/api/activities')
      .then(res => res.json())
      .then(data => setResults(data.projects))
      .catch(console.log)
      .finally(() => setLoading(false))
  }, [])

  return (
    <Row gutter={24}>
      <Col span={6}>
        <Card className='filters-pane' bordered={false}>
          <Form labelCol={{ span: 7 }} wrapperCol={{ span: 17 }} labelAlign='left'>
            <Form.Item label='Umkreis' name='plz'>
              <Input.Group compact>
                <Input style={{ width: '40%' }} placeholder='PLZ' />
                <Select defaultValue='25km' style={{ width: '46%' }}>
                  <Option value='25km'>25 km</Option>
                  <Option value='50km'>50 km</Option>
                  <Option value='75km'>75 km</Option>
                  <Option value='100km'>100 km</Option>
                  <Option value='unlimited'>Unbegrenzt</Option>
                </Select>
              </Input.Group>
            </Form.Item>
            <Collapse className='more-filters-collapse' bordered={false}>
              <Panel key='more' header='Weitere Filter'>
                <Form.Item label='Projektdauer' name='dauer' rules={[{ type: 'array' }]}>
                  <RangePicker />
                </Form.Item>
              </Panel>
            </Collapse>
          </Form>
        </Card>
      </Col>
      <Col className='main-area' span={18}>
        <Card className='tip-of-the-day'>
          Zusammenhalt, das gilt bei uns nicht nur in Krisenzeiten - <br />
          Das gilt jetz, morgen und über alle Grenzen hinweg
        </Card>
        <div className='results-container'>
          <List
            grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 3, xl: 3, xxl: 3 }}
            loading={loading}
            dataSource={results}
            renderItem={item => (
              <List.Item key={item.title}>
                <a href={`https://vostel.de${item.link}`} target='_blank' rel="noopener noreferrer">
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
      </Col>
    </Row>
  )
}

export default BecomeActive
