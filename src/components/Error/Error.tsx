
export default function Error({ error }: any) {
  return (
    <div>
      <p className="mx-4 my-auto text-danger fw-bolder">Une erreur est survenue lors de la récupération des données : {error.message}</p>
    </div>
  )
}
