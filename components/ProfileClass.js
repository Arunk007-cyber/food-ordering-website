import React from "react";
import usercontext from "../utils/userContext";

class Profile extends React.Component{
  
    constructor(props){
        super(props);

        this.state={
            count:0,
            count2:0,
            userinfo:{}
        };
    }
    async componentDidMount(){
      let data=await fetch('https://api.github.com/users/arun007');
      let json=await data.json();
      this.setState({
        userinfo:json,
      })


      this.timer=setInterval(()=>{
        console.log('namaste react op');
      },1000)
    }

    componentDidUpdate(prevprops,prevstate){
//used to call after render
    }

    componentWillUnmount(){
//used to unmount or clear component after we leave pages
   clearInterval(this.timer);
    }

  render(){
    return (
        <div>
          <usercontext.Consumer>
          {({user})=>
          (<h1 className="font-bold text-black-500">{user.name}-{user.email}</h1>)
          }
        </usercontext.Consumer>
        <h1>This is a react class based component</h1>
        <h2>name:{this.props.name}</h2>
        <h3>count:{this.state.count}</h3>
        <h3>count2:{this.state.count2}</h3>
        <button onClick={()=>{
          this.setState({
            count:1,
            count2:1
          })
        }}>Setstate</button>
        {console.log('userinfo',this.state.userinfo)}
   
        

        <h3>{this.state.userinfo.id}</h3>
        <h3>{this.state.userinfo.name}</h3>
        <img src={this.state.userinfo.avatar_url} />
        </div>
    );
  }

}

export default Profile;