//////////////////////////////
//Simple Component Library by Alex Merced of AlexMercedCoder.com
/////////////////////////////

//////////////
//CaptureProps
/////////////

const captureProps = (element) => {
    const att = [...element.attributes];
    const entries = att.map((value) => {
        return [value.name, value.value];
    });

    return Object.fromEntries(entries);
};

///////////////
//SimpleComponent
//////////////

const simpleComponent = (options) => {
    options.state = JSON.stringify(options.state);
    const string = `

class ${options.prefix}${options.name} extends HTMLElement {
    constructor() {
        super();
        ${options.observe ? options.observe : ''}
        this.builder = ${options.builder}
        this.state = ${options.state}
        this.postBuild = ${options.postBuild ? options.postBuild : () => {}} 
        this.props = {}
        this.attachShadow({ mode: 'open' });
        this.build()
    }
    ${options.connected ? options.connected : ''}

    ${options.disconnected ? options.disconnected : ''}

    ${options.other ? options.other : ''}

    build(){
      this.props = captureProps(this)
      this.shadowRoot.innerHTML = this.builder(this.state, this.props)
      this.postBuild(this.state, this.props)
    }

    setState(newState) {
      this.state = { ...this.state, ...newState };
      this.build()
    }

}

window.customElements.define('${options.prefix}-${options.name}', ${
        options.prefix
    }${options.name})`;

    if (options.debug) {
        options.debug === true ? console.log(string) : '';
    }

    eval(string);
};
