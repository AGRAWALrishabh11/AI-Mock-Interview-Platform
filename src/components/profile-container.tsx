import {useAuth} from "@clerk/clerk-react";
import {Loader} from "lucide-react";
import { Button } from "./ui/button";
import { UserButton } from "@clerk/clerk-react";
import { Link } from "react-router";

export const ProfileContainer = () => {
    const {isSignedIn, isLoaded} = useAuth();
    if (!isLoaded) {
        return (
            <div className="flex items-center">
                <Loader className="min-w-4 min-h-4 animate-spin" />
            </div>
        );
    }
  return (
    <div className="flex items-center gap-6">
        {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
        ) : (
            <Link to={"/signin"}>
            <Button size={"sm"}>Get Started</Button>
            </Link>
        )}
    </div>
  )
}

