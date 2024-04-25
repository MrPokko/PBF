import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";

export default function AboutPage() {
    return (
        <Section2 isFancy={true}>
            <Heading>About Me</Heading>
            <Post title="My name is Alfa" body="My NIM is 2341727001"/>
        </Section2>
    );
}