import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-page";
// git push -u origin

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
})

export default function Home() {
  return (
   <main className="flex h-full bg-sky-500 flex-col items-center justify-center">
    <div className="space-y-6 text-center">
      <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md",
        font.className,
      )}>
        Auth
      </h1>
      <p className="text-lg text-white">A simple Authentication Service</p>
      <div>
      <LoginButton>
      <Button variant={"secondary"} size={"lg"}>
        Sign in
      </Button>
      </LoginButton>
    </div>
    
    </div>
   </main>
  );
}
