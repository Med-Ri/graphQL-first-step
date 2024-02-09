import React, { useState } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      name
      userName
      age
      nationality
    }
  }
`;

const CREATE_USER_MUTATION = gql`
  mutation CreateUser ($input: CreateUserInput! ) {
    createUser(input: $input){
      name
      id
    }
  
  
  }




`

const UsersData = () => {
  const { data, loading , error } = useQuery(QUERY_ALL_USERS);

  const [name , setName] = useState('');
  const [userName, setUserName] = useState('');
  const [age , setAge] = useState(0)
  const [nationality, setNationality] = useState('')


  const [createNewUser] = useMutation(CREATE_USER_MUTATION)




  if (loading) {
    return <h1> LOADING...  </h1>
  }

  if (error) {
    console.log('error', error)
  }


  return( 
    <div>
        <div className="bg-warning p-2">
          <h1> Add New User </h1>

          <div className="d-flex flex-column container-sm w-25">
            <input 
              className="my-2" 
              type="text" 
              placeHolder = "Name..." 
              onChange={(e) => setName(e.target.value)}  
            />
            <input 
              className="my-2" 
              type="text" 
              placeHolder = "User_Name..." 
              onChange={(e) => setUserName(e.target.value)}    
            />
            <input 
              className="my-2" 
              type="number" 
              min={0} 
              placeHolder = "Age..." 
              onChange={(e) => setAge(parseInt(e.target.value))}   
            />
            
            <input 
              className="my-2" 
              type="text" 
              placeHolder = "Nationality..." 
              onChange={(e) => setNationality(e.target.value.toUpperCase())}   
            />
            
            
            <button 
              onClick={()=>{
                createNewUser({variables: {input : {
                  name,
                  userName,
                  age,
                  nationality
                }}})
              }}
            > 
              Add New User 
            </button>
          </div>


        </div>

       


        <h1> List of users </h1>
        {
            data && data?.users?.map ((user , i) => {
                return (
                    <div key={i}>
                        <hr></hr>
                        <h1> {user?.name} </h1>
                        <h2> User_Name : {user?.userName} </h2>
                        <h2> Age: {user?.age} </h2>
                        <h2> Nationality : {user?.nationality} </h2>
                        <hr></hr>
                    </div>
                )
            })
        }
    </div>
  );
};

export default UsersData;
