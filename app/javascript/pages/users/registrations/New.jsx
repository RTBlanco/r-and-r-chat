
import { Button, Card, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { router, Link } from '@inertiajs/react'

export default function New() {
  const [values, setValues] = useState({
    user:{
      email: '',
      user_name: '',
      password: '',
    }
  })

  function handleChange(e) {
    const key = e.target.name
    const value = e.target.value
    setValues((values) => ({
      ...values,
      user: {
        ...values.user,
        [key]: value,
      },
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    router.post('/users/sign_up', values)
  }

  return (
    <div className="h-full flex justify-center">
      <Card className="max-w-sm w-full ">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email">Your email</Label>
            </div>
            <TextInput id="email" name="email" type="email" placeholder="name@rnr.com" required value={values.user.email} onChange={handleChange}/>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="user_name">Your User Name</Label>
            </div>
            <TextInput id="user_name" name="user_name" type="text" required value={values.user.user_name} onChange={handleChange}/>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password">Your password</Label>
            </div>
            <TextInput id="password" name="password" type="password" required value={values.user.password} onChange={handleChange}/>
          </div>
          <Button className='mt-3' type="submit">Submit</Button>
        </form>

        <div className="flex items-center gap-2">
            <Label className="flex">
              Already have an account?&nbsp;
              <Link href="/users/sign_in" className="text-cyan-600 hover:underline dark:text-cyan-500">
                Sign in!
              </Link>
            </Label>
          </div>
      </Card>
    </div>
  );
}
