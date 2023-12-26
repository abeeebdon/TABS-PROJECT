import { useEffect, useState } from 'react'
import Loading from './Loading'
import JobInfo from './JobInfo'

const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const resp = await fetch(url)
        const response = await resp.json()
        setUsers(response)
        setIsLoading(false)
        setIsError(false)
      } catch (error) {
        setIsLoading(false)
        setIsError(true)
      }
    }
    fetchData()
  }, [])
  return (
    <div>
      {isLoading && <Loading />}
      {isError ? <p>There is an Error</p> : <JobInfo users={users} />}
    </div>
  )
}
export default App
