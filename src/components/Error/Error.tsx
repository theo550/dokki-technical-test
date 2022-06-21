import './error.css'

export default function Error({ error }: any) {
  return (
    <div className="container error-container d-flex align-items-center flex-column justify-content-center">
      <h1>{error.name}</h1>
      <p>Une erreur est survenue lors de la récupération des données :</p>
      <p className="text-danger fw-bolder">{error.message}</p>
    </div>
  )
}
