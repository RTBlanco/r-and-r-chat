
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { router } from '@inertiajs/react'

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

    console.log(values)
  }

  function handleSubmit(e) {
    e.preventDefault()
    router.post('/users/sign_in', values)
  }

  return (
    <Card className="max-w-sm">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email">Your email</Label>
          </div>
          <TextInput id="email" name="email" type="email" placeholder="name@flowbite.com" required value={values.user.email} onChange={handleChange}/>
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
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
}
