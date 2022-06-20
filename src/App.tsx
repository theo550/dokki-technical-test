import { useEffect, useState } from 'react'
import './App.css'
import User from './components/user/User'
import Error from './components/Error/Error'
import { userProps } from './interface/interface'


export default function App(): JSX.Element {

  const [users, setUsers] = useState<userProps[]>([])
  const [fetchError, setFetchError] = useState<boolean>(false)
  const [errorContent, setErrorContent] = useState<string>('')

  // Get users data from API: https://dummyjson.com/users
  const getUsersDataFromApi = () => {
    fetch('https://dummyjson.com/users')
    .then(res => {
      if(res.ok){
        setFetchError(false)
        return res.json()
      } else {
        console.log('une erreur est survenue')
        setFetchError(true)
      }
    })
    .then(res => setUsers(res.users))
    .catch(error => setErrorContent(error))
  }
  
  useEffect(() => {
    getUsersDataFromApi()
  }, [])


  return (
    <div className="bg-black bg-opacity-10">
      <ul className='d-flex flex-wrap list-unstyled justify-content-center m-0 py-3'>
        {users.map((user: userProps, index: number): JSX.Element => {
          return(
            <li className='m-2' key={index}>
              <User firstName={user.firstName} lastName={user.lastName} image={user.image} birthDate={user.birthDate} maidenName={user.maidenName} username={user.username} email={user.email} gender={user.gender} weight={user.weight} height={user.height} address={user.address}/>
            </li>)
          })
        }
        {fetchError ? <Error error={errorContent}/> : ''}
      </ul>
    </div>
  )
}
