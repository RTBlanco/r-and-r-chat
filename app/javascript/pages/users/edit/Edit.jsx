
import { Button, Card, Label, TextInput, Avatar } from "flowbite-react";
import { useState } from "react";
import { router, usePage } from '@inertiajs/react'

export default function Edit() {
  const { user, errors} = usePage().props
  const [values, setValues] = useState({
    user:{
      email: user.email,
      user_name: user.user_name,
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
    if (values.user.password.length === 0) {
      delete values.user.password
    }
    router.patch(`/users/${user.id}`, values)
  }

  console.log(errors)
  return (
    <div className="h-full flex justify-center">
      <Card className="max-w-sm w-full ">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="">
            <div className="mb-2 block">
              <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="avatar of Jese" size="xl" rounded />
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email">Your email</Label>
            </div>
            <TextInput id="email" name="email" type="email" value={values.user.email} onChange={handleChange}/>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="user_name">Your User Name</Label>
            </div>
            <TextInput id="user_name" name="user_name" type="text" value={values.user.user_name} onChange={handleChange}/>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password">Your password</Label>
            </div>
            <TextInput id="password" name="password" type="password" value={values.user.password} onChange={handleChange}/>
          </div>
          <Button className='mt-3' type="submit">Save</Button>
        </form>
      </Card>
    </div>
  );
}
