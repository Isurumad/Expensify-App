import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) =>(
  <div>
    <h1>Info</h1>
    <p>This info is: {props.info}</p>
  </div>
);

const withAdminWarnng =(WrappedComponent)=>{
  return (props) =>(
    <div>
      {props.isAdmin && <p>This is private info.Please don't share</p>}
      <WrappedComponent {...props}/>
    </div>
  );
};

const requiredAuthentication = (WrappedComponent)=>{
  return (props) =>(
    <div>
      {props.isAuthenticated ? (<WrappedComponent {...props}/>):(<p>please login</p>)}
    </div>
  );
}
//const AdminInfo = withAdminWarnng(Info);
const AuthInfo = requiredAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info='this is the details'/>,document.getElementById('root'));