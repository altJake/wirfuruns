import { DatePicker, Form, Input, Select, Divider, Checkbox, Rate, Tag, Button } from 'antd'
import React from 'react'
import {
  CompassIcon,
  CalendarWithStopperIcon,
  OnlineIcon,
  DonationIcon,
  LocationIcon,
  WheelbarrowIcon,
  CogwheelHeadIcon,
  StartPlusIcon
} from '../Icons'
import './FiltersPanel.less'
import { TagProps } from 'antd/lib/tag'

const { RangePicker } = DatePicker
const { Option } = Select
const { CheckableTag } = Tag

const LabelWithIcon: React.FC<{
  icon: React.ComponentType<any>,
  label: string
}> = ({ icon, label }) => (
  <span className='input-label'>
    {React.createElement(icon, { className: 'input-label-icon' })}
    {label}
  </span>
)

const SelectableTag: React.FC<TagProps> = props => {
  const [checked, setChecked] = React.useState(false)
  const handleChange = (newChecked: boolean) => {
    setChecked(newChecked)
  }

  return (
    <CheckableTag
    {...props} checked={checked} onChange={handleChange} />
  )
}

const FiltersPanel: React.FC<{ onChange?: (filters: any) => void }> = props => {
  const { onChange = () => {} } = props
  const [form] = Form.useForm()

  return <div className='filters-pane'>
    <Form
      labelAlign='left'
      form={form}
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
        name='timerange'
        label={<LabelWithIcon icon={CalendarWithStopperIcon} label='Zeitraum' />}
        rules={[{ type: 'array' }]}
      >
        <RangePicker />
      </Form.Item>
      <Divider />
      <Form.Item
        name='types'
        className='type-selector-item'
        rules={[{ type: 'array' }]}
      >
        <Checkbox.Group className='type-selector'>
          <Checkbox value='in_location' className='icon-checkbox'>
            <LocationIcon />
            <span>Vor Ort</span>
          </Checkbox>
          <Checkbox value='online' className='icon-checkbox'>
            <OnlineIcon />
            <span>Online</span>
          </Checkbox>
          <Checkbox value='donation' className='icon-checkbox'>
            <DonationIcon/>
            <span>Spende</span>
          </Checkbox>
        </Checkbox.Group>
      </Form.Item>
      <Divider />
      <Form.Item
        name='physical_intensity'
        className='physical-rate'
      >
        <label htmlFor='physical_intensity'>Körperliche Anstrengung:</label><br />
        <Rate character={<WheelbarrowIcon />} />
      </Form.Item>
      <Divider />
      <Form.Item
        name='special_knowledge'
        className='special-knowledge'
        rules={[{ type: 'array' }]}
      >        
        <div style={{display: 'flex', flexDirection: 'column', marginLeft: '8px'}}>
          <span>
            <CogwheelHeadIcon style={{fill: '#a2dbd3', marginRight: '8px'}} />
            <label htmlFor='special_knowledge'>Besondere Kenntnisse in:</label>
          </span>
          <div style={{padding: '2px'}}>
            {['IT','Rechtskenntnisse','Design','Sprachen'].map(k => <SelectableTag key={k}>{k}</SelectableTag>)}
          </div>
        </div>
      </Form.Item>
      <Divider />
      <Form.Item
        name='special_interests'
        className='special-knowledge'
        rules={[{ type: 'array' }]}
      >        
        <div style={{display: 'flex', flexDirection: 'column', marginLeft: '8px'}}>
          <span>
            <StartPlusIcon style={{fill: '#a2dbd3', marginRight: '8px'}} />
            <label htmlFor='special_interests'>Besonderes Interessen an:</label>
          </span>
          <div style={{padding: '2px'}}>
            {['Obdachlose','Covid-19','Kinder + Jugendliche','Umwelt + Tiere', 'Senioren', 'Vielfalt', 'Geflüchtete', 
          'Menschen mit Behinderung'].map(k => <SelectableTag key={k}>{k}</SelectableTag>)}
          </div>
        </div>
      </Form.Item>
      <Form.Item className='action-buttons'>
        <Button type="primary" htmlType="submit" onClick={onChange}>
          Filter anwenden
        </Button>
        <Button htmlType="button" onClick={() => onChange(true)}>
          Zurücksetzen
        </Button>
      </Form.Item>
    </Form>
  </div>
}

export default FiltersPanel
