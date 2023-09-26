import { UserRow } from "./UserRow"

export const UsersList = ({users = [], handlerRemove, handlerUpdate}) => {
  return (
    <>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>username</th>
                    <th>email</th>
                    <th>update</th>
                    <th>remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(({id, username, email}) => (
                        <UserRow
                            key={id}
                            id={id}
                            username={username}
                            email={email}
                            handlerRemove={handlerRemove}
                            handlerUpdate={handlerUpdate} />
                    ))
                }
            </tbody>
        </table>
    </>
  )
}
