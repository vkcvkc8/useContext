import React, { createContext, useContext } from 'react';

// Create a context
const MessageContext = createContext();

// Parent component
function Parent() {
  const message = 'Hello from Parent!';

  return (
    <MessageContext.Provider value={message}>
      <Child2 />
    </MessageContext.Provider>
  );
}

// Child component (accesses context)
function Child() {
  const message = useContext(MessageContext);

  return <div>i am in child --- {message}</div>;
}

// Child2 component (accesses context)
function Child2() {
  const message = useContext(MessageContext);

  return <div>i am in child 2 --- {message}</div>;
}

// App component
function App() {
  return (
    <div>
      <h1>Using Context API</h1>
      <Parent />
      <Child />
      <Child2 />
    </div>
  );
}

export default App;
