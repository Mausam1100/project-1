import React from 'react';

const About = (props) => {
  return (
    <div className="bg-gray-100 flex items-center justify-center p-4 py-14" style={{backgroundColor: props.darkMode? "rgb(100 116 139": "white"}}>
      <div className="max-w-2xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">About Our Text Manipulation Tool</h1>
        <p className="text-gray-600 mb-4">
          Welcome to our Text Manipulation Tool! This tool allows you to write or paste your text and perform various operations on it with ease. Here are the key features we offer:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-600">
          <li><strong>Lower Case:</strong> Convert your text to lower case.</li>
          <li><strong>Upper Case:</strong> Convert your text to upper case.</li>
          <li><strong>Reset:</strong> Reset your text to its original form.</li>
          <li><strong>Copy:</strong> Copy your manipulated text to the clipboard.</li>
          <li><strong>Trim:</strong> Remove whitespace from the beginning and end of your text.</li>
        </ul>
        <p className="text-gray-600 mb-4">
          Whether you're a writer, developer, or just someone who needs to quickly adjust text formatting, our tool is here to help. It's simple, fast, and efficient, making your text manipulation tasks easier than ever.
        </p>
        <p className="text-gray-600">
          Try out our tool today and see how it can simplify your workflow!
        </p>
      </div>
    </div>
  );
}

export default About;
