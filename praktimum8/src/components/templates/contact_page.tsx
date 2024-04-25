import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";

export default function ContactPage() {
    return (
        <Section2 isFancy={true}>
            <Heading>My Contact</Heading>
            <Post title="Alfa Contact" body="NIM: 2341727001| Phone: 089525311039"/>
        </Section2>
    );
}