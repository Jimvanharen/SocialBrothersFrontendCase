import Head from 'next/head'
import { Key, useEffect, useState } from 'react'
import Blog from './components/Blog';

export const getStaticProps = async () => {
  var requestOptions: Object = {
    method: 'GET',
    headers: {
      'token': 'pj11daaQRz7zUIH56B9Z'
    },
    redirect: 'follow'
  };

  const response = await fetch("https://frontend-case-api.sbdev.nl/api/categories", requestOptions);
  const data = await response.json();

  return {
    props: {
      categoriesProp: data,
    }
  }

}

export default function Home({categoriesProp}) {

  const [berichtNaam, setBerichtNaam] = useState('');
  const [categorie, setCategorie] = useState('');
  const [bericht, setBericht] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [showMoreBool, setShowMoreBool] = useState(false)

  const postBericht = (e: any) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("title", berichtNaam);
    formData.append("content", bericht);
    formData.append("category_id", "1");
    formData.append("image", selectedFile);

    var requestOptions: Object = {
      method: 'POST',
      headers: {
        'token': 'pj11daaQRz7zUIH56B9Z',
      },
      body: formData,
      redirect: 'follow'
    };

    console.log(selectedFile);
    
    fetch("https://frontend-case-api.sbdev.nl/api/posts", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error))
  .finally(() => alert('Succesfully added blog post'));
  }

  const handleShowMore = () => {
    setShowMoreBool(!showMoreBool);
    console.log(showMoreBool)
  }

  return (
    <div className="max-w-full h-full">
      <div className="header-container h-72 object-cover relative flex justify-center items-center">
        <img src="/SBlogo.svg" className="z-10 absolute"></img>
        <img src="/Social Brothers banner1.jpg" className="object-cover w-full" style={{height: 'inherit'}}></img>
      </div>
      <div className="main-container flex gap-32 mt-12 md:flex-row flex-col">
        <div className="md:ml-8 mx-auto h-[600px] addpost-box w-2/4 bg-gray-200 flex justify-start min-w-fit sm:p-0 p-8">
          <form onSubmit={postBericht} className="mt-4 mx-auto flex flex-col gap-7">
            <label htmlFor="berichtenNaam">Berichtnaam</label>
            <input id="berichtenNaam" 
             type="text"
             autoComplete="off"
             required 
             className="border-2 rounded-sm p-2 hover:drop-shadow-xl"
             onChange={(e) => setBerichtNaam(e.target.value)}></input>
            <label htmlFor="categoriesInput">Categories</label>
            <input id="categoriesInput" className="hover:drop-shadow-xl" list="categories" required onChange={(e) => setCategorie(e.target.value)}/>
            <datalist id="categories">
              {categoriesProp.map((categorie: { name: string | number | readonly string[] | undefined; id: Key | null | undefined; }) => (
                <option value={categorie.name} key={categorie.id}/>
              ))}
            </datalist>
            <label htmlFor="berichtPost">Bericht</label>
            <textarea id="berichtPost" className="border-2 resize-none h-40 hover:drop-shadow-xl" required onChange={(e) => setBericht(e.target.value)}></textarea>
            <input type="file" onChange={(e: any) => setSelectedFile(e.target.files[0])}></input>
            <button type="submit" className="text-white bg-orange-500 px-12 py-1 rounded-lg">Bericht aanmaken</button>
          </form>
        </div>
        <div className="blog-collection-box w-2/4 bg-gray-200 md:mr-8 sm:my-0 md:ml-0 m-auto h-2/3 pb-4">
          <div className="grid grid-cols-2">
            <Blog id={1} title="test" category="flagged" text="blabla" image="/SBlogo.svg"/>
            <Blog id={2} title="test" category="flagged" text="blabla" image="/SBlogo.svg" />
            <Blog id={3} title="test" category="flagged" text="blabla" image="/SBlogo.svg" />
            <Blog id={4} title="test" category="flagged" text="blabla" image="/SBlogo.svg" />
            {/* Originally was planning to fetch data from the api to be shown here but the api is down so there is not a lot I can do here */}
              {showMoreBool &&  
                <>
                  <Blog id={5} title="test" category="flagged" text="blabla" image="/SBlogo.svg" />
                  <Blog id={6} title="test" category="flagged" text="blabla" image="/SBlogo.svg" />
                  <Blog id={7} title="test" category="flagged" text="blabla" image="/SBlogo.svg" />
                </>
              }
          </div>
          <div className="flex justify-center">
            <button className="text-white bg-orange-500 px-12 py-1 rounded-lg" onClick={() => handleShowMore()}>{showMoreBool ? 'Minder laden' : 'Meer laden'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
