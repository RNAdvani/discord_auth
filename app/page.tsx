import { auth } from "@/auth";
import SignInComponent from "@/components/SignInComponent";

export default async function Home() {
  const session = await auth()
  return (
    <div>
      {JSON.stringify(session)}
      <SignInComponent />
    </div>
  );
}
