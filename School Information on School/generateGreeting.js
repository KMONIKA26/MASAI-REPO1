function generateGreeting(name, language = 'English') {
    const greetings = {
      'English': `Hello, ${name}!`,
      'Spanish': `¡Hola, ${name}!`,
      'French': `Bonjour, ${name}!`
    };
  
    return greetings[language];
  }
  
  console.log(generateGreeting("Alice")); // Output: "Hello, Alice!"
  console.log(generateGreeting("Bob", "Spanish")); // Output: "¡Hola, Bob!"
  console.log(generateGreeting("Charlie", "French")); // Output: "Bonjour, Charlie!"
  