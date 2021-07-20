import { useRouter } from "next/router";

const DebugQueriesPage = () => {
  const router = useRouter();
  return <pre>{JSON.stringify(router.query, null, 2)}</pre>;
};

export default DebugQueriesPage;