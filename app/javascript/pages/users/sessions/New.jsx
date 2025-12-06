
import { Button, Card, Checkbox, Label, TextInput, HelperText } from "flowbite-react";
import { useState } from "react";
import { router, Link, usePage } from '@inertiajs/react'

export default function New() {

  const { errors } = usePage().props
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
    router.post('/users/sign_in', values)
  }

  return (
    <div className="h-full flex justify-center">
      <Card className="max-w-sm w-full ">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="user_name">User Name</Label>
            </div>
            <TextInput sizing="lg" id="user_name" name="user_name" type="text" required 
              value={values.user.user_name} onChange={handleChange}
              color={errors ? "failure" : "gray"}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password">Password</Label>
            </div>
            <TextInput sizing="lg" id="password" name="password" type="password" required
              value={values.user.password} onChange={handleChange}
              color={errors ? "failure" : "gray"}
            />
            { errors &&
              <HelperText>
                <span className="font-medium">Oops!</span> {errors}
              </HelperText>
            }
          </div>
          <Button className='mt-3' type="submit">Submit</Button>
        </form>

        <div className="flex items-center gap-2">
            <Label className="flex">
              Dont have an account?&nbsp;
              <Link href="/users/sign_up" className="text-cyan-600 hover:underline dark:text-cyan-500">
                Sign Up!
              </Link>
            </Label>
          </div>
      </Card>
    </div>
  );
}
