import React from 'react'
import Headder from '../components/headder'
function loginpage() {
  return (
    <div className='h-screen w-screen bg-gray-50 dark:bg-gray-900'>
        <Headder />
    <div className='flex px-6  mt-12 mb-10 bg-gray-50 dark:bg-gray-900'>
        {/* <Headder/> */}
        <div className='flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800'>
            <div className='flex flex-col overflow-y-auto md:flex-row'>
            <div class="h-32 md:h-auto md:w-1/2">
                <img aria-hidden="true" class="object-cover w-full h-full dark:hidden" src="src\assets\login-office.344df827.jpeg" alt="light"/>
                <img aria-hidden="true" class="hidden object-cover w-full h-full dark:block" src="src\assets\login-office-dark.635369a3.jpeg" alt="dark"/>
                </div>
                <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2 dark:text-gray-200">
      <div className="w-full">
        <div className="mb-6 text-center">
          <p className='text-gray-700 dark:text-gray-200'>
            Welcome back! <br />
            <span className="mb-4 ml-4 text-2xl font-semibold text-gray-700 dark:text-gray-200">
              Login to your account
            </span>
          </p>
        </div>
        <form>
          <label className="block text-sm text-gray-700 dark:text-gray-400">Email</label>
          <input
            className="block w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none text-gray-700 dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray bg-transparent dark:bg-gray-700"
            type="email"
            placeholder="yourname@gmail.com"
          />
          <label className="block text-sm text-gray-700 dark:text-gray-400 mt-4">Password</label>
          <input
            className="block w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none text-gray-700 dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray bg-transparent dark:bg-gray-700"
            type="password"
            placeholder="***************"
          />
          <button className="items-center bg-purple-600 text-base text-white w-full pt-2 pb-2 rounded-lg justify-center cursor-pointer leading-5 transition-colors font-medium active:focus:border-purple-400 my-4">
            Login
          </button>
        </form>
        <p className='text-gray-700 dark:text-gray-200'>
          <a className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline" href="/forgot-password">
            Forgot your password?
          </a>
        </p>
        <p className="mt-1 text-base text-gray-700 dark:text-gray-200">
          Not a user yet? {'  '}
          <a className="text-base font-medium text-purple-600 dark:text-purple-400 hover:underline" href="/signup">
            Create an account
          </a>{'  '}
          here
        </p>
      </div>
    </main>
        </div>
    </div>
    </div>
    </div>
        
  )
}

export default loginpage