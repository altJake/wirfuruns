import React from 'react'
import { Row, Col, Form, Input, Select, Collapse, DatePicker, Card } from 'antd'
import beispielbild from '../../assets/img/beispielbild.png'
import './Home.less'

const { Option } = Select
const { Panel } = Collapse
const { RangePicker } = DatePicker
const { Meta } = Card

const Home = () => (
  <Row gutter={24}>
    <Col span={6}>
      <Card style={{ backgroundColor: '#bbb' }}>
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
    <Col span={18} style={{ background: '#ddd', padding: '24px' }}>
      <Card>
        Tip of the Day / Motivation
      </Card>
      <div style={{ paddingTop: '24px' }}>
        <Row gutter={[48, 32]}>
          <Col span={8}>
            <Card cover={
              <img
                alt='beispielbild'
                src={beispielbild}
              />
            }>
              <Meta
                title='NACHBARSCHAFTSHILFE'
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
                title='NACHBARSCHAFTSHILFE'
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
                title='NACHBARSCHAFTSHILFE'
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
                title='NACHBARSCHAFTSHILFE'
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
                title='NACHBARSCHAFTSHILFE'
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
                title='NACHBARSCHAFTSHILFE'
                description='Hilf Oma und Opa'
              />
            </Card>
          </Col>
        </Row>
      </div>
    </Col>
  </Row>
)

export default Home
