import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/header/index";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <section className="todoapp">
        <Header />
        <Content />
      </section>
      <Footer />
    </TodoProvider>
  );
}

export default App;
