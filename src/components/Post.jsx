function Post({image , title}) {
    return <div class="col">
        <div class="card" style={{width:"18rem"}}>
    <img src={image} class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
    </div>
  </div>
  </div>;
}

export default Post;