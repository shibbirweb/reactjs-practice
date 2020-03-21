function NumberList(props) {
  /* let items = props.number.map(num => {
    return <li key={num}>{num * 2}</li>;
  }); */

  let items = props.objects.map((obj, index) => {
    return (
      <li key={index}>
        <h3>{obj.title}</h3>
        <p>{obj.body}</p>
      </li>
    );
  });

  return <ul>{items}</ul>;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const objects = [
  { id: 1, title: "First title", body: "First body" },
  { id: 2, title: "Second title", body: "Second body" },
  { id: 3, title: "Third title", body: "Third body" },
  { id: 4, title: "Fourth title", body: "Fourth body" }
];

ReactDOM.render(
  <NumberList objects={objects} />,
  document.getElementById("app")
);
