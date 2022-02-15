import HelloWorld from "../components/helloWorld/helloWorld";
import ClickMe from "../components/testy/button";

export default function Home() {
    return <>
        <h3>This click me is an example of state management</h3>
        <ClickMe />
        <HelloWorld message={"I was called from Home"} />
    </>
}