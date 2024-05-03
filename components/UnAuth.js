import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function UnAuth({ children }) {
  const { data: session, loading } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!loading && session) {
      router.push("/");
    }
  }, [session, loading, router]);

  if (!session) {
    return <>{children}</>;
  }
  return <p>Loading...</p>;
}
