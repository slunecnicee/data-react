import React, { Component } from "react";
import { fetchCoctails } from "../api/cocktails";

import CocktailArticle from "./article";




class Coctailscomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cocktails:{
        data:[],
        isLoaded:false,
        isLoading:true,
        isError:false,
      }
      
    };
    this.handleClick=this.handleClick.bind(this);
   
  }


async componentDidMount(){

try{
    const cocktails=await fetchCoctails();
    this.setState({
        cocktails:{
            data:cocktails,
            isLoaded:true,
            isLoading:false,
            isError:false,
        }
    });
} catch (error){
    this.setState({
        cocktails:{
            data:[],
            isLoaded:true,
            isLoading:false,
            isError:true,
        }
    })
}
  }

 

  handleClick (id) {
   const newArray=[...this.state.cocktails.data]
   const filteredArry=newArray.filter(element=>element.idDrink !== id);
   this.setState({
    cocktails:{
        data:filteredArry,
        isLoading:false,
        isLoaded:true,
        isError:false,
    },
   })
  }

  render() {
    const {cocktails} = this.state;
    
  if (cocktails.isLoading){
    return <h1>Loading...</h1>
  }

  if (cocktails.isError){
    return <h1>Error...</h1>
  }

  return (
    <section className="div3">
      {cocktails.data.map((cocktail) => (
        <CocktailArticle cocktail={cocktail} handleClick={this.handleClick} />
      ))}
    </section>
  );


  }
}

export default Coctailscomponent;
