import {Button, TextField} from "@vaadin/react-components";
import {useState} from "react";
import Markdown from "react-markdown";



export default function Chat(){
    const [question, setQuestion]=useState<string>("");
    const [response, setResponse]=useState<string>("");

    async function send() {
        // ChatAiService.ragChat(question).then(resp=> {
        //     setResponse(resp);
        // });
    }
    return(
        <div className={"p-m"}>
            <h1>Chat Bot</h1>
            <div>
                <TextField style={{width:'80%' }}
                           onChange={(e=>setQuestion(e.target.value))}/>
                <Button theme="primary" onClick={send}>Send</Button>
                <div>
                    <Markdown>
                        {response}
                    </Markdown>

                </div>
            </div>
        </div>
    );
}