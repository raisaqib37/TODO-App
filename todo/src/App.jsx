import { Box, Checkbox, HStack, Heading, Icon } from "@chakra-ui/react";
import TopNav from "./Components/TopNav";
import Search from "./Components/Search";
import { Stack } from "@chakra-ui/react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Modal from "./Components/Modal";
import { useEffect, useState } from "react";
import { db } from "./config/firebase";
import { collection, doc, onSnapshot } from "firebase/firestore";
import TodoCard from "./Components/TodoCard";
import NotFound from "./Components/NotFound";

function App() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const Toggle = () => {
    setShow(!show);
  };

  useEffect(() => {
    const todoRef = collection(db, "todos");
    onSnapshot(todoRef, (snapshots) => {
      const todosList = snapshots.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      setData(todosList);
    });
  });
  

  return (
    <Stack>
      <TopNav />
      <Search />
      {data?.length <= 0 ? (
        <NotFound />
      ) : (
        data.map((todoo) => (
          <TodoCard key={todoo.id} todos={todoo} toggle={Toggle} />
        ))
      )}

      {show ? <Modal /> : ""}
    </Stack>
  );
}

export default App;
