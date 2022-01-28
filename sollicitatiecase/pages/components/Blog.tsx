import { Router, useRouter } from 'next/router';

const Blog = ({id, title, category, text, image}) => {
  const router = useRouter();
  return <div className="flex flex-col justify-center items-center cursor-pointer m-12" onClick={() => router.push(`/blog/${id}`)}>
      <img className="sm:visible invisible object-cover" src={image}></img>
      <h3 className="text-lg">{title}</h3>
      <h4 className="text-sm">{category}</h4>
      <p>{text}</p>
  </div>;
};

export default Blog;
