import { DatePicker, Form, Input, Select, Divider } from 'antd'
import React from 'react'
import { CompassIcon, CalendarWithStopperIcon } from '../Icons'
import './FiltersPanel.less'

const { RangePicker } = DatePicker
const { Option } = Select

const LabelWithIcon: React.FC<{
  icon: React.ComponentType<any>,
  label: string
}> = ({ icon, label }) => (
  <span className='input-label'>
    {React.createElement(icon, { className: 'input-label-icon' })}
    {label}
  </span>
)

const FiltersPanel: React.FC<{ onChange?: (filters: any) => void }> = props => {
  const { onChange = () => {} } = props
  const [form] = Form.useForm()

  return <div className='filters-pane'>
    <Form
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
      labelAlign='left'
      form={form}
      onValuesChange={(_: any, values: any) => onChange(values)}
    >
      <Form.Item
        name='plz'
        label={<LabelWithIcon icon={CompassIcon} label='Umkreis' />}
      >
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
      <Divider />
      <Form.Item
        name='zeitraum'
        label={<LabelWithIcon icon={CalendarWithStopperIcon} label='Zeitraum' />}
        rules={[{ type: 'array' }]}
      >
        <RangePicker />
      </Form.Item>
      <Divider />
    </Form>
  </div>
}

export default FiltersPanel
