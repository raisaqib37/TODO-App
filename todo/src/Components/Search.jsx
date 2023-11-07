import { Button, HStack, Icon, Input } from "@chakra-ui/react";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { db } from "../config/firebase";

const Search = () => {
  const [input, setInput] = useState("");

  const submitController = async (e) => {
    e.preventDefault();
    if(input===""){
      alert("Please enter a valid todo");
      return;
    }
      await addDoc(collection(db,"todos"),{
        Work: input ,
        status: false,
      })
      
  };

  return (
    <form onSubmit={submitController}>
      <HStack px={"4"} py={"2"}>
        <Icon
          cursor={"pointer"}
          position={"absolute"}
          ml={"3"}
          fontSize={"20px"}
          as={AiOutlineSearch}
        />

        <Input
          onChange={(e) => setInput(e.target.value)}
          px={"9"}
          border={"2px"}
          borderColor={"yellow.400"}
          fontWeight={"medium"}
          type="text"
          placeholder={"Add Todo"}
        />
        <Button
          type="submit"
          bg={"transparent"}
          _hover={{
            bg: "transparent",
          }}
        >
          <Icon
            fontSize={"20px"}
            cursor={"pointer"}
            color={"gold"}
            transition={"0.3s ease"}
            _hover={{
              color: "black",
              fontSize: "25px",
            }}
            as={FaPlus}
          />
        </Button>
      </HStack>
    </form>
  );
};

export default Search;
