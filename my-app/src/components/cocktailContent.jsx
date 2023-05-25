 
 import {Component} from "react";
 
 
 class CocktailsContent extends Component{
    constructor (props){
        super (props)
    }



    render() {
        const {id,name,pic,instr,onDelete}=this.props
        return(
            <article className='cocktails'>
                <div className="cocktail-name">
                <h2>{name}</h2>
                </div>
                <img src={pic} alt={name} />
                <div className="instr">
                    <h4>Instructions:</h4>
                   <p>{instr}</p>
                </div>
                <button onClick={(e)=>onDelete(id)}>Delete me</button>
                </article>
        )
    }
 }


 export default CocktailsContent;
