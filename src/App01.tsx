import Content from "./components/Content";
import Provider from "./components/Provider";

export default function App() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  }
  return (
    <Provider style={{
      color: 'red'
    }}
    heading={<h2>Provider Component</h2>}
    onChange={handleChange}
    >
      <Content name="Hoàng An" email="hoangan.web@example.com" status="active"/>
    </Provider>
  )
}
