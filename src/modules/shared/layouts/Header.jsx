import React, { Component } from 'react';
import axios from 'axios';

class Header extends Component {

  submitSignUpForm(event) {
    console.log('Event', event);
    event.preventDefault();

    const email = document.getElementById('email');
    const emailValue = email.value;

    const name = document.getElementById('name');
    const nameValue = name.value;

    const password = document.getElementById('password');
    const passwordValue = password.value;

    const passwordConfirmation = document.getElementById('password_confirmation');
    const passwordConfirmationValue = passwordConfirmation.value;

    console.log('Name value', nameValue);
    console.log('Email value', emailValue);
    console.log('pass value', passwordValue);
    console.log('pass conf value', passwordConfirmationValue);

    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          console.log(httpRequest.responseText);
        } else {
          alert('There was a problem with the request.');
        }
      };
    }
    httpRequest.open('POST', 'https://behero-blog-api.herokuapp.com/signup');
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send('user[name]=' + encodeURIComponent(nameValue) + '&user[email]=' + encodeURIComponent(emailValue));

    // axios.post('http://localhost:4000/signup',
    //   {
    //     user: {
    //       name: nameValue,
    //       email: emailValue,
    //       password: passwordValue,
    //       password_confirmation: passwordConfirmationValue,
    //     }
    //   }
    // )
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }

  render() {
    return (
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <a className="text-muted" href={null}>Subscribe</a>
          </div>
          <div className="col-4 text-center">
            <a className="blog-header-logo text-dark" href='/'>Large</a>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <a className="text-muted" href={null}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-3"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
            </a>
            <a className="btn btn-sm btn-outline-secondary" href={null} data-toggle="modal" data-target="#signup">
              Sign up
            </a>

            <div className="modal fade" id="signup" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Signup</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <form onSubmit = {this.submitSignUpForm}>
                    <div className="modal-body">
                      <div className="form-group">
                        <label htmlFor="name">Your name</label>
                        <input type="name" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter your name" />
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>

                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                      </div>

                      <div className="form-group">
                        <label htmlFor="password_confirmation">Password confirmation</label>
                        <input type="password" className="form-control" id="password_confirmation" placeholder="Password confirmation" />
                      </div>

                      <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
