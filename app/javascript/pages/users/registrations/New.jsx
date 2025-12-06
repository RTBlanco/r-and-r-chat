
import { Button, Card, Label, TextInput, HelperText} from "flowbite-react";
import { useState } from "react";
import { router, Link , usePage } from '@inertiajs/react'

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
    router.post('/users', values)
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

  return (
    <div className="h-full flex justify-center">
      <Card className="max-w-sm w-full ">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email">Your email</Label>
            </div>
            <TextInput sizing="lg" id="email" name="email" type="email"
              placeholder="name@rnr.com" required 
              value={values.user.email} onChange={handleChange}  
              color={inputError('email') ? "failure" : "gray"}
            />
            {displayErrors('email')}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="user_name">Your User Name</Label>
            </div>
            <TextInput sizing="lg" id="user_name" name="user_name" type="text" 
              required value={values.user.user_name} onChange={handleChange}
              color={inputError('user_name') ? "failure" : "gray"}
            />
            {displayErrors('user_name')}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password">Your password</Label>
            </div>
            <TextInput sizing="lg" id="password" name="password" type="password" 
              required value={values.user.password} onChange={handleChange}
              color={inputError('password') ? "failure" : "gray"}
            />
            {displayErrors('password')}
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
