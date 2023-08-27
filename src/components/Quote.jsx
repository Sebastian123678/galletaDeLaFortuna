// Destructurar la prop en parametro
const Quote = ({ phrase  }) => {
  return (
    <div className="container_phrase">
        <p>{phrase.phrase}</p>
        <p>Autor: <span>{phrase.author}</span></p>
    </div>
  )
}

export default Quote