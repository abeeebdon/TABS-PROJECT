import Job from './Job'

const JobInfo = ({ users }) => {
  return (
    <div>
      <div>
        {users.map((user) => {
          console.log(user)
          return <Job key={user.id} user={user} />
        })}
      </div>
    </div>
  )
}
export default JobInfo
