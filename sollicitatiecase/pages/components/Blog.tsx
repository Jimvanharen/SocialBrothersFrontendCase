const Blog = ({title, category, text, image}) => {
  return <div className="w-1/3 flex flex-col justify-center items-center cursor-pointer m-12">
      <img src={image}></img>
      <h3 className="text-lg">{title}</h3>
      <h4 className="text-sm">{category}</h4>
      <p>{text}</p>
  </div>;
};

export default Blog;
