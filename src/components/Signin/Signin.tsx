import React from 'react';

interface Props {
  onRouteChange: (route) => void;
}

const Signin = (props: Props) => (
  <div>
    <article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center'>
      <main className='pa4 black-80'>
        <form className='measure'>
          <fieldset
            id='sign_up'
            className='ba b--transparent ph0 mh0'
          >
            <legend
              className='f1 fw6 ph0 mh0'
              style={{ margin: 'auto' }}
            >
              Sign In
            </legend>
            <div className='mt3'>
              <label
                className='db fw6 lh-copy f6'
                htmlFor='email-address'
              >
                Email
              </label>
              <input
                className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                type='email'
                name='email-address'
                id='email-address'
              />
            </div>
            <div className='mv3'>
              <label className='db fw6 lh-copy f6' htmlFor='password'>
                Password
              </label>
              <input
                className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                type='password'
                name='password'
                id='password'
              />
            </div>
          </fieldset>
          <div>
            <input
              onClick={() => props.onRouteChange('home')}
              className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
              type='submit'
              value='Sign in'
            />
          </div>
          <div className='lh-copy mt3'>
            <p
              onClick={() => props.onRouteChange('register')}
              className='f6 link dim black db pointer'
            >
              Register
            </p>
          </div>
        </form>
      </main>
    </article>
  </div>
);

export default Signin;
