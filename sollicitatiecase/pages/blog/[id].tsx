import React from 'react';

export const getStaticPaths = async () => {
  return {
    paths: [
    { params: { id: '1'}}, 
    { params: { id: '2'}}, 
    { params: { id: '3'}}, 
    { params: { id: '4'}}, 
    { params: { id: '5'}},
    { params: { id: '6'}}, 
    { params: { id: '7'}}],
    fallback: false,
  }
}

export const getStaticProps = async () => {
  return {
    props: {},
  }
}

const Details = () => {
  return (
  <div>
   <h1>Hier zou de blog moeten komen staan, helaas kan ik niet fetchen naar de database waardoor dit onmogelijk word. <br /> 
   Ik had het ook kunnen hardcoden maar denk niet dat dat echt verschil maak met dat ik het duidelijk laat maken dat ik het snap</h1>   
  </div>
  );
};

export default Details;
