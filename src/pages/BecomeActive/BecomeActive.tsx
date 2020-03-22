import { Col, Row } from 'antd'
import React from 'react'
import ResultsList from '../../components/ResultsList'
import FiltersPanel from '../../components/FiltersPanel'
import './BecomeActive.less'

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
        <FiltersPanel />
      </Col>
      <Col span={18}>
        <ResultsList loading={loading} results={results} />
      </Col>
    </Row>
  )
}

export default BecomeActive
