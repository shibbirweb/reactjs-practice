function tick() {
  var element = (
    <div>
      <h1>Hello world</h1>
      <h4>Time is {new Date().toLocaleTimeString()}</h4>
    </div>
  );

  ReactDOM.render(element, document.querySelector("#app"));
}

setInterval(tick, 1000);
