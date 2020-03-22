import React from 'react'
import { Row, Col, Form, Input, Select, Collapse, DatePicker, Card } from 'antd'
import beispielbild from '../../assets/img/beispielbild.png'
import './BecomeActive.less'

const { Option } = Select
const { Panel } = Collapse
const { RangePicker } = DatePicker
const { Meta } = Card

const BecomeActive = () => (
  <Row gutter={24}>
    <Col span={6}>
      <Card className='filters-pane'>
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
        <Row gutter={[48, 32]}>
          <Col span={8}>
            <Card cover={
              <img
                alt='beispielbild'
                src={beispielbild}
              />
            }>
              <Meta
                title={<span className='meta-title'>NACHBARSCHAFTSHILFE</span>}
                description='Hilf Oma und Opa'
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card cover={
              <img
                alt='beispielbild'
                src={beispielbild}
              />
            }>
              <Meta
                title={<span className='meta-title'>NACHBARSCHAFTSHILFE</span>}
                description='Hilf Oma und Opa'
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card cover={
              <img
                alt='beispielbild'
                src={beispielbild}
              />
            }>
              <Meta
                title={<span className='meta-title'>NACHBARSCHAFTSHILFE</span>}
                description='Hilf Oma und Opa'
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={[48, 32]}>
          <Col span={8}>
            <Card cover={
              <img
                alt='beispielbild'
                src={beispielbild}
              />
            }>
              <Meta
                title={<span className='meta-title'>NACHBARSCHAFTSHILFE</span>}
                description='Hilf Oma und Opa'
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card cover={
              <img
                alt='beispielbild'
                src={beispielbild}
              />
            }>
              <Meta
                title={<span className='meta-title'>NACHBARSCHAFTSHILFE</span>}
                description='Hilf Oma und Opa'
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card cover={
              <img
                alt='beispielbild'
                src={beispielbild}
              />
            }>
              <Meta
                title={<span className='meta-title'>NACHBARSCHAFTSHILFE</span>}
                description='Hilf Oma und Opa'
              />
            </Card>
          </Col>
        </Row>
      </div>
    </Col>
  </Row>
)

export default BecomeActive
