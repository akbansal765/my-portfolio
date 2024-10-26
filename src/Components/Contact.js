import React from 'react'

const Contact = () => {

  const contactNum = '+91-9855038427';
  const emailAddress = 'ak.bansal.765@gmail.com';

  const btnPressFunc = function(btn){
    btn.style.backgroundColor = 'black';
    btn.style.border = 'white solid 1px';
    
    setTimeout(() => {
      btn.style.backgroundColor = '';
      btn.style.border = '';
    }, 500);
  }

  const copyNumber = function(e){
    navigator.clipboard.writeText(contactNum)
      const btn = e.target;
      btnPressFunc(btn);
  }
  const copyEmail = function(e){
    navigator.clipboard.writeText(emailAddress)
    const btn = e.target;
    btnPressFunc(btn);
  }


  return (
    <div className='contact_component'>
      <button onClick={copyNumber} className="copy_number_btn">Copy Contact Number</button>
      <button onClick={copyEmail} className="copy_email_email">Copy Email Address</button>
    </div>
  )
}

export default Contact
