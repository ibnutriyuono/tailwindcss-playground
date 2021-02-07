import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { handleUserAuth } from '../../store/actions/userAction'
import { useDispatch } from 'react-redux'

function AuthForm(props) {
  const [hiddenPassword, setHiddenPassword] = useState(true)
  const [hiddenConfirmPassword, setHiddenConfirmPassword] = useState(true)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()
  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (props.form === 'login') {
      if (password !== confirmPassword) {
        alert('NOPE')
      } else {
        dispatch(handleUserAuth(true))
        history.push('/')
      }
    } else {
      alert('ALLO REGISTER')
    }
  }
  return (
    <div className="flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          {
            props.form === 'login'
              ? <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  Sign in
                </h2>
              : <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  Sign up
                </h2>
          }
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            {
              props.form === 'login'
                ? <Link to="/register" className="ml-3 font-medium text-green-500 hover:text-green-700">
                    register new account
                  </Link>
                : <Link to="/login" className="ml-3 font-medium text-green-500 hover:text-green-700">
                    already have an account
                  </Link>
            }
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleOnSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-3">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input 
                id="email-address" 
                name="email" 
                type="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
            </div>
            <div>
              <div className="relative mb-3 w-full flex flex-wrap items-stretch">
                <label htmlFor="password" className="sr-only">Password</label>
                <input 
                  id="password" 
                  name="password" 
                  type={ hiddenPassword ? 'password' : 'text' } 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                <span className="absolute right-0 z-10 py-1 pr-2 w-8 h-full leading-snug bg-transparent rounded text-base font-normal text-gray-400 text-center flex items-center justify-center">
                  <i onClick={ () => setHiddenPassword(!hiddenPassword) } className={`fa cursor-pointer ${hiddenPassword ? "fa-eye" : "fa-eye-slash"}`}></i>
                </span>
              </div>
            </div>
            <div>
              <div className="relative mb-3 w-full flex flex-wrap items-stretch">
                <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                <input 
                  id="confirmPassword" 
                  name="confirmPassword" 
                  type={ hiddenConfirmPassword ? 'password' : 'text' } 
                  required 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirm Password" />
                <span className="absolute right-0 z-10 py-1 pr-2 w-8 h-full leading-snug bg-transparent rounded text-base font-normal text-gray-400 text-center flex items-center justify-center">
                  <i onClick={ () => setHiddenConfirmPassword(!hiddenConfirmPassword) } className={`fa cursor-pointer ${hiddenConfirmPassword ? "fa-eye" : "fa-eye-slash"}`}></i>
                </span>
              </div>
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              {
                props.form === 'login'
                  ? 'Sign in'
                  : 'Sign up'
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AuthForm
