# Simple Component

Simple component is a stripped down version of MercedUI only having the ability to create reactive components.

For more features and tools try MercedUI at: https://github.com/AlexMercedCoder/MercedUI

The CDN link for Simple Component is: http://www.alexmercedcoder.com/SC.js

Youtube Tutorials: https://www.youtube.com/playlist?list=PLY6oTPmKnKbYrP3DfCUTYYADu0IT9DRZZ

To install via NPM: npm install @alexmerced/simple_components

## simpleComponent

Function for creating a web component that is useable in your html.

**simpleComponent(config)**

The config object has many properties to help build your component:
prefix = the prefix to your tag tag
name = the name of your component (the html tag name would be prefix-name)
builder = function that returns template (state, props) => {return templateString}
state = initial state object
connected = pass in a string with your connectedCallback function `connectedCallback(){stuff to happen when component mounted}`
disconnected = pass in a string with your disconnectedCallback function `disconnectedCallback(){stuff to happen when component unmounted}`
observe: pass in string with ObservedAttributes function for component constructor
other: string to define other methods and/or define attributeChangedCallback/adoptedCallback

### Defining a component

```

simpleComponent({
    prefix: 'test',
    name: 'test',
    builder: (state, props) => {
        return `<h1>${state.hello}</h1>
    <h2> ${props.user} </h2>`;
    },
    state: { hello: 'hello world' }
});

const comps = document.querySelectorAll('test-test');

```

### using components in your HTML

In the below code we see the component used three times with different props along with three button that update each components state.

```
<test-test user="jones"></test-test>
<test-test user="harry"></test-test>
<test-test user="james"></test-test>
<button onclick="comps[0].setState({hello: 'one'})">One</button>
<button onclick="comps[1].setState({hello: 'two'})">Two</button>
<button onclick="comps[2].setState({hello: 'three'})">Three</button>
```
