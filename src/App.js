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
      
      localStorage.setItem("token", re.user.accessToken);
      var accessTokenres = localStorage.getItem("token");
      alert(accessTokenres);
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
