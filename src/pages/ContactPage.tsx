import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen py-16 px-6">
      <h1 className="font-headline text-3xl md:text-5xl font-bold text-center mb-12">
        Contact Us
      </h1>

    <div className="text-center max-w-6xl md:mb-20 mx-auto flex flex-col md:flex-row items-center justify-center md:gap-64">
      
      <div className="flex-1 ml-14 space-y-4 text-left font-serif text-lg">
        <p><span className="font-bold">Email:</span> iedc@cusat.ac.in</p>
        <p><span className="font-bold">Phone:</span> +91 7907 600 633</p>
        <p><span className="font-bold">Address:</span> Near University Guest House, CUSAT</p>
        <p>
          <span className="font-bold">Website:</span>{' '}
          <a href="https://cittic.cusat.ac.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            iedc.cusat.ac.in
          </a>
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="w-56 h-56  rounded-lg flex items-center justify-center text-gray-500 overflow-hidden">
          <img 
            src="/images/IEDC Logo.svg" 
            alt="Logo" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>

    <div className="text-center max-w-6xl md:mb-20 mx-auto flex flex-col md:flex-row items-center justify-center md:gap-64">
      
      <div className="flex-1 ml-14 space-y-4 text-left font-serif text-lg">
        <p><span className="font-bold">Email:</span> npcrusa@gmail.com</p>
        <p><span className="font-bold">Phone:</span> 011 - 49725600</p>
        <p><span className="font-bold">Address:</span> RUSA Resource Centre, Old CRS Building, Jawaharlal Nehru University,Aruna Asaf Ali Marg, New Delhi-110067</p>
        <p>
          <span className="font-bold">Website:</span>{' '}
          <a href="https://rusa.nic.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            rusa.nic.in
          </a>
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="w-56 h-56  rounded-lg flex items-center justify-center text-gray-500 overflow-hidden">
          <img 
            src="/images/rusa.jpeg" 
            alt="Logo" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>

    <div className="text-center max-w-6xl md:mb-20 mx-auto flex flex-col md:flex-row items-center justify-center md:gap-64">
      
      <div className="flex-1 ml-14 space-y-4 text-left font-serif text-lg">
        <p><span className="font-bold">Email:</span> cittic@cusat.ac.in</p>
        <p><span className="font-bold">Phone:</span> +91 7907 600 633</p>
        <p><span className="font-bold">Address:</span> Near University Guest House, CUSAT</p>
        <p>
          <span className="font-bold">Website:</span>{' '}
          <a href="https://cittic.cusat.ac.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            cittic.cusat.ac.in
          </a>
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="w-56 h-56  rounded-lg flex items-center justify-center text-gray-500 overflow-hidden">
          <img 
            src="/images/Cittic Logo.svg" 
            alt="Logo" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>

    </div>
  );
};

export default ContactPage;


