import './user.css'
import customiseDate from '../../functions/dateFormat'
import { userProps } from '../../interface/interface'

export default function User({ image, firstName, lastName, maidenName, username, email, birthDate, gender, height, weight, address }: userProps): JSX.Element {

  return (
    <div className="user d-flex flex-column bg-white text-center rounded-custom p-3 text-secondary shadow-sm">
      <img src={image} alt="user profil" className="profil-pic rounded-circle mx-auto shadow"/>
      <div className="mt-3 mb-1 fs-3 text-dark">
        <p className='my-0'>{firstName}</p>
        <p className='my-0'>{lastName}</p>
        <p className='my-0'>({maidenName})</p>
      </div>
      <p className='my-0'>@{username}</p>
      <p className='my-0'>{email}</p>
      <div className="hr bg-secondary bg-opacity-10 rounded-3 my-3 mx-auto"></div>
      <div className="my-0">
        <p className='my-0'>{customiseDate(birthDate)}</p>
        <p className='my-0'>{gender}</p>
        <p className='my-0'>{height}cm / {weight}kg</p>
        <div className="border border-gray rounded-custom py-3 my-3">
          <p className='my-0'>{address.address},</p>
          <p className='my-0'>{address.city}</p>
          <p className='my-0'>{address.city}, {address.postalCode}</p>
        </div>
      </div>
    </div>
  )
}
