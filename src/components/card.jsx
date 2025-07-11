const Card = ({imgURL, title, desc, alt}) => {
    return(
        <div>
            <div className="card bg-base-100 w-70 shadow-sm">
  <figure>
    <img
      src={imgURL}
      alt={alt} 
      className="h-48 w-96 object-cover"
      />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{desc}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Lihat</button>
    </div>
  </div>
</div>
        </div>
    )
}


export default Card

