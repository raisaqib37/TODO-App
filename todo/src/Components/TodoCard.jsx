import { Checkbox, HStack, Heading, Icon } from "@chakra-ui/react";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { AiOutlineEdit} from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { db } from "../config/firebase";

const TodoCard = (props) => {
const handleStatusChange= async (todo)=>{
  
  await updateDoc(doc(db,"todos",todo.id),{
    status: !todo.status,
  })
  
}

const remove = async(id) =>{
await deleteDoc(doc(db,"todos",id))
} 


  return (
    <HStack  justifyContent={"space-between"} mx={"4"} borderRadius={"md"} p={"3"} h={"20%"} bg={"yellow.200"}>
        
      <HStack key={props.key}>
        <Checkbox onChange={()=>handleStatusChange(props.todos)} border={"black"} checked={props.todos.status? "" : "checked"}/>
        <Heading cursor={"pointer"} fontSize={"md"} textDecoration={props.todos.status? "line-through" : "none"}>{props.todos.Work}</Heading>  
      </HStack>
      <HStack>
        <Icon onClick={()=>remove(props.todos.id)}
          cursor={"pointer"}
          _hover={{
            color: "red.600",
          }}
          fontSize={"20px"}
          as={MdDelete}
        />
      </HStack>
      </HStack>
  );
};

export default TodoCard;
