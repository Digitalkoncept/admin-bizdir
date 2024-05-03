import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";

export default function Auth({ children }) {
  const [loading, setLoading] = useState();

  const router = useRouter();

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, [router]);
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return <>{children}</>;
}
