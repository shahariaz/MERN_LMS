import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Login = () => {
  const [loginInput, setloginInput] = useState({
    email: "",
    password: "",
  });
  const [signupInput, setsignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleInput = (e, type) => {
    const { name, value } = e.target;
    if (type === "login") {
      setloginInput({ ...loginInput, [name]: value });
    } else {
      setsignupInput({ ...signupInput, [name]: value });
    }
  };
  return (
    <div className=' flex items-center justify-center '>
      <Tabs defaultValue='account' className='w-[400px]'>
        <TabsList className='grid w-full grid-cols-2'>
          <TabsTrigger value='signup'>SignUp</TabsTrigger>
          <TabsTrigger value='login'>Login</TabsTrigger>
        </TabsList>
        <TabsContent value='signup'>
          <Card>
            <CardHeader>
              <CardTitle>SignUp</CardTitle>
              <CardDescription>
                Fill in your details to create an account.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-2'>
              <div className='space-y-1'>
                <Label htmlFor='name'>Name</Label>
                <Input
                  id='name'
                  type='text'
                  required='true'
                  placeholder='shahariaz..'
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='saru@gmail.com'
                  required='true'
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='password'>Password</Label>
                <Input
                  id='password'
                  type='password'
                  placeholder='********'
                  required='true'
                  onChange={(e) => handleInput(e)}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>SingUp</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value='login'>
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Enter your credentials to access your account.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-2'>
              <div className='space-y-1'>
                <Label htmlFor='current'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='saru@gmail.com'
                  required='true'
                  onChange={(e) => handleInput(e, "login")}
                />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='new'>Password</Label>
                <Input
                  id='password'
                  type='password'
                  placeholder='********'
                  required='true'
                  onChange={(e) => handleInput(e, "login")}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default Login;
