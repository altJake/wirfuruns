import { Col, Row } from 'antd'
import React from 'react'
import ResultsList from '../../components/ResultsList'
import FiltersPanel from '../../components/FiltersPanel'
import './BecomeActive.less'

const BecomeActive = () => {
  const [results, setResults] = React.useState<any[]>([])
  const [loading, setLoading] = React.useState(false)
  const fetchResults = () => {
    setLoading(true)
    return fetch('/api/activities')
      .then(res => res.json())
      .then(data => Promise.resolve(data.projects))
      .catch(console.log)
      .finally(() => setLoading(false))
  }
  const fakeSomeMagic = (clear?: boolean) => {
    fetchResults()
      .then(data => {
        if (clear === true) {
          return data
        }

        const randomized = []
        const rand = Math.floor(Math.random() * data.length / 1.5)
        for (let i = 0; i < rand; i++) {
          randomized.push(data[i])
        }
        return randomized
      })
      .then(setResults)
  }

  React.useEffect(() => {
    fetchResults().then(setResults)
  }, [])

  return (
    <Row gutter={24}>
      <Col span={6}>
        <FiltersPanel onChange={fakeSomeMagic} />
      </Col>
      <Col span={18}>
        <ResultsList loading={loading} results={results} />
      </Col>
    </Row>
  )
}

export default BecomeActive
