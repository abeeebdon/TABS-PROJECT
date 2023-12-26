import { useEffect, useState } from 'react'
import Loading from './Loading'
import JobInfo from './JobInfo'
import BtnContainer from './BtnContainer'

const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [currentItem, setCurrentItem] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
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
  console.log(users)
  return (
    <section className="jobs-center">
      <BtnContainer
        users={users}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      {isLoading && <Loading />}
      {!isLoading && !isError && (
        <JobInfo users={users} currentItem={currentItem} />
      )}
    </section>
  )
}
export default App
