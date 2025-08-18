
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { router } from '@inertiajs/react'

export default function New() {
  const [values, setValues] = useState({
    email: '',
    user_name: '',
    password: '',
  })

  function handleChange(e) {
    const key = e.target.id
    const value = e.target.value
    setValues((values) => ({
      ...values,
      [key]: value,
    }))
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
          <TextInput id="email" type="email" placeholder="name@flowbite.com" required value={values.email} onChange={handleChange}/>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="user_name">Your User Name</Label>
          </div>
          <TextInput id="user_name" type="text" required value={values.user_name} onChange={handleChange}/>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password">Your password</Label>
          </div>
          <TextInput id="password" type="password" required value={values.password} onChange={handleChange}/>
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
