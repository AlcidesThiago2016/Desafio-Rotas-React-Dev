
type Props = {
    text: string;
};

export default function Card({text}: Props){

    return(
        <div className="card">
            <h2> {text} </h2>
        </div>
    );
}