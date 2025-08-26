
import { Button, Card, Label, TextInput, Avatar, HelperText, Badge } from "flowbite-react";
import { useState } from "react";
import { router, usePage} from '@inertiajs/react'
import { HiPencil, HiCheck } from "react-icons/hi"
import { Modal } from "flowbite-react";
import EditModal from "./EditModal";

export default function Edit() {
  const { user, avatar, errors} = usePage().props
  const [values, setValues] = useState({
    user:{
      email: user.email,
      user_name: user.user_name,
      password: undefined,
      avatar: avatar
    }
  })

  const [showModal, setShowModal] = useState(false)

  function handleChange(e) {
    const key = e.target.name
    let value = key === 'avatar' ? e.target.files[0] : e.target.value

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
    let data = structuredClone(values)

    if (data.user.password === undefined) {
      delete data.user.password
    } 
    
    if (typeof data.user.avatar === 'string') {
      delete data.user.avatar
    }

    setValues((values) => ({
      ...values,
      user: {
        ...values.user,
        ["avatar"]: "",
      },
    }))

    router.patch(`/users/${user.id}`, data)
  }

  function inputError(name) {
    return typeof errors != 'undefined' && name in errors
  }

  function displayErrors(name) {
    if (inputError(name) ){
      return errors[name].map((e, i)=> (
        <HelperText key={i}>
          <span className="font-medium">Oops!</span> {e}
        </HelperText>
      ))
    }
  }

  console.log("user -> ", user)
  console.log('avatar -> ', avatar)
  return (
    <div className="h-full flex justify-center">
      <Card className="max-w-sm w-full ">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

          <div className="mb-2 block flex justify-center">
            <div className="relative inline-block">
              <Avatar img={avatar} rounded size="xl" />
              <div onClick={() => setShowModal(true)} className="absolute bottom-0 right-0 bg-white rounded-full p-1 border border-gray-200 cursor-pointer">
                <HiPencil className="w-4 h-4 text-gray-600" />
              </div>
            </div>
          </div>
          {typeof values.user.avatar != 'string' && 
            <div className="">
              <Badge icon={HiCheck}>Updating Avatar</Badge>
            </div>
          }
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email">Your email</Label>
            </div>
            <TextInput id="email" name="email" type="email"
              value={values.user.email} onChange={handleChange}
              color={inputError('email') ? "failure" : "gray"}
            />
            {displayErrors('email')}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="user_name">Your User Name</Label>
            </div>
            <TextInput id="user_name" name="user_name" type="text"
              value={values.user.user_name} onChange={handleChange}
              color={inputError('user_name') ? "failure" : "gray"}
            />
            {displayErrors('user_name')}
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
      <EditModal show={showModal} close={setShowModal} handleChange={handleChange} />
    </div>
  );
}
