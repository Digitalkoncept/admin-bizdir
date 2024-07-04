import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Spinner from "./Spinner";
import { useEffect } from "react";

export default function UnAuth({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== 'loading' && session) {
      router.push("/");
    }
  }, [session, status, router]);

  if (!session) {
    return <>{children}</>;
  }
  return <Spinner/>;
}
