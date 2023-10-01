import { useEffect } from "react";

function useDocumentTitle(count) {
  return useEffect(() => {
    document.title = `Count is ${count}`;
  }, [count]);
}

export default useDocumentTitle;
