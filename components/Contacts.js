import React from 'react';

const Contacts = () => {
  return (
    <section id="contacts" className="flex min-h-screen p-8">
      <div className="contacts__wrapper m-auto flex flex-col">
        <div className="contacts__heading text-center">
          <div className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-center text-2xl font-bold text-transparent">
            <p>Contacts</p>
            <div className="h-0.5 bg-gradient-to-r from-primary to-secondary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
