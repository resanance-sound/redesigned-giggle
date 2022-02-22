import HelloWorld from "../components/helloWorld/helloWorld";
import ClickMe from "../components/testy/button";

export default function Home() {
    return <>
        <HelloWorld message={"I was called from Home"} />
        <h3>subtitle: This click me is an example of state management</h3>
        <ClickMe />

        woop woop i am response, lets dance. 
    </>
}