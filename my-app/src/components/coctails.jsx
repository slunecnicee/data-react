
import React from 'react';
import { fetchCoctails } from '../api/cocktails';
import CocktailsContent from './cocktailContent';



class CocktailsComponant extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cocktails:{
            data:[],
            isLoading:true,
            isLoaded:false,
            isError:false,
        },
      };

      this.handleDelete=this.handleDelete.bind(this);
    }
  
    async componentDidMount() {
        try {
            const coctailsData= await fetchCoctails();
            this.setState({
                cocktails:{
                    data:coctailsData,
                    isLoading:false,
                    isLoaded:true,
                    isError:false,
                },
            })
        } catch(err){
            this.setState({
                cocktails:{
                    data:[],
                    isLoading:false,
                    isLoaded:true,
                    isError:true,
                },
            })
        }
  
    }
  
  
    handleDelete(id) {
   const newArry=[...this.state.cocktails.data];
   const filteredArry=newArry.filter(element=>element.idDrink !== id);
    this.setState({
        cocktails: {
            data:filteredArry,
            isLoaded:true,
            isLoading:false,
            isError:false,
        },
    })
    }
  
    render() {
        const {cocktails}=this.state;

 
        if(cocktails.isLoading){
          return <h1>Loading...</h1>
        }

        if(cocktails.isError){
          return <h1>Error...</h1>
        }


      return (
          cocktails.data.map((cocktail)=>{
            const{strDrink,strDrinkThumb,strInstructions, idDrink
            }=cocktail;
            return(
                <CocktailsContent
                key={idDrink}
                 id={idDrink}
                 name={strDrink}
                 pic={strDrinkThumb}
                 instr={strInstructions}
                 onDelete={this.handleDelete}
                 />
            ) 
          })
      );
    }
  }

  export default CocktailsComponant;
  