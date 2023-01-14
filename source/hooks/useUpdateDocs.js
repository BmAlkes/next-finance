import { doc, updateDoc } from "@firebase/firestore";
import db from "../firebase";

const useUpdateDoc = () => {
  const updateDocHandler = async (collection, id, updateFields) => {
    const categoryDoc = doc(db, collection, id);
    await updateDoc(categoryDoc, updateFields);
  };
  return updateDocHandler;
};

export default useUpdateDoc;
