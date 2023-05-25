import logo from './logo.svg';
import './App.css';
import CocktailsComponant from './components/coctails';
import PostsComponant from './components/posts';




function App() {
  return (
    <div className="App">
   
<div className='wrp'>
<CocktailsComponant/>
</div>

<div className='posts-wrp'>
<PostsComponant/>
</div>


 </div>
  );
}

export default App;
