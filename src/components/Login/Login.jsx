import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleSubmit = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loginUser = result.user;
        setUser(loginUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  const handleSingOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center">
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Email" size="lg" />
          <Input label="Password" size="lg" />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          {user ? (
            <Button onClick={handleSingOut} variant="gradient" fullWidth>
              Sign Out
            </Button>
          ) : (
            <Button onClick={handleSubmit} variant="gradient" fullWidth>
              Sign In
            </Button>
          )}
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold">
              Sign up
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
      {user && (
        <div>
          <h1>Name: {user?.displayName}</h1>
          <p>Email: {user?.email}</p>
          <img src={user?.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
