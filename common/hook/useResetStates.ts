import { MenuContext } from "common/context/Menu"
import { useRouter } from "next/router"
import { useContext, useEffect } from "react"

export const useResetStates = () => {
  const { resetState } = useContext(MenuContext);
  const router = useRouter();
  useEffect(() => {
    resetState();
  }, [router.asPath]);
}


