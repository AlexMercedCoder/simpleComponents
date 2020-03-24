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
