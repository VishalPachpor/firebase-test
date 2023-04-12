import logo from './logo.svg';
import './App.css';
import { authentication } from './firebase';
import { TwitterAuthProvider, signInWithPopup } from 'firebase/auth';

function App() {
  const SignInWithTwitter = ()=>{
    const provider = new TwitterAuthProvider();
    console.log("function is running...")
    signInWithPopup(authentication,provider)
    .then((re)=> {
      console.log(re);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  
  return (
    <div className="App">
      <button onClick={SignInWithTwitter}>Login with twitter</button>
    </div>
  );
}

export default App;
