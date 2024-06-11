"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header from "./Components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/*(1)
 two way binding:-
 const page = () => {
  const [name, setName] = useState('')

     return <div>
         <input type="text" placeholder="Enter your name" value={name} onChange={(e) => console.log(e.target.value)}/>
     </div>
 }
 export default page
 onChange value = e.target.value <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
 
 (2)App routing
const page = () => {
  return (
    <>
      <div>This is home page</div>
      <Link href="/About">About</Link>
    </>
  );
};
export default page;
(3)DYNAMIC ROUTING :-(3)
(i)a href={`/${elem.id}`} in mapping.(MAIN PAGE.JS)
(ii)make a new folder [id] in app folder and make a page.js file inside the[id] folder
(iii)in page.js inside [id] make a fx .(5)
(1)make params & const {id} = params
(2)copy paste the main page js async fx,variables,useeffect and import
(3)id in retrun part n APIlink 
(4)const {data} = await axios.get("APIlink") & setUsers(data) =>
(5){JSON.stringify(users)} IN RETURN PART 

const page = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
  };
  return (
    <>
      <div>This is home page</div>
      <Link href="/About">About</Link>
      <button
        className="block bg-red-400 text-white"
        onClick={() => {
          getUsers();
        }}
      >
        Get Data
      </button>
      <div>
        {users.map((elem, i) => {
          return (
            <h1>
              {elem.name} <a href={`/${elem.id}`}>Explore More</a>
            </h1>
          );
        })}
      </div>
    </>
  );
};
export default page;
(4)API CONTEXT
(i)normal data flow is from parent to child!
(ii)api context allows any component to derive data instead of passing it in heriachy(one component -other component inside it ):-
(iii)make a Helper Folder inside it make a Context.js file
(iv)in Context.js:-
(1) write a normal code and  make a createContext()
(2)export const MyContext = createContext()
(3){children} as parameter in context Fx
(4) make the data! ex:- const num = 10
(5)use MyContext.Provider to wrap {children} and pass value={num}
(6)"use client"
(7)in layout.js import MyContext(not as obj) and make a <MyContext>{children}</MyContext> inside body.
(8)for receiving data in child component :- import  useContext() and make a const numReal = useContext(MyContext):-this numReal will get the data from the context created by us.

const page = () => {
  const [num, setNum] = useState(10);
  return (
    <>
      This Is My Homepage
      <Header num={num}/>;
    </>
  );
};
export default page;
(5)React Toasitfy:(5)
(i)open the react toastify website copy the install cmd in terminal 
(ii)copy 2 lines of code from react toastify website to import :-import { ToastContainer, toast } from 'react-toastify';&import 'react-toastify/dist/ReactToastify.css';
(iii)<ToastContainer/> in return part
(iv)btn onbclick={fx} & toast("msg") in the fx
(v)documentation in reAD,copy paste code from website acc to your need.
*/
const page = () => {
  const notify = () => {
    toast("Hello World");
  };
  return (
    <>
      <button
        className="bg-red-400 text-white text-xl px-5 py-5"
        onClick={notify}
      >
        login
      </button>
      <ToastContainer />
    </>
  );
};
export default page;
