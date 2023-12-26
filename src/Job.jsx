const Job = ({ user }) => {
  const { id, order, title, dates, duties, company } = user
  return (
    <div>
      <div>{title}</div>
    </div>
  )
}
export default Job
