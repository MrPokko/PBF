import Heading from "./heading";
import Section2 from "./section2";

export default function Post({ title, body }: { title: string, body:string}) {
    return(
        <Section2 isFancy={true}>
            <Heading>
                {title}
            </Heading>
            <p><i>{body}</i></p>
        </Section2>
    );
}