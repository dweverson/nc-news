import '../css/Votes.css'
import { useState, useEffect } from "react";
import { patchVotes } from "../utils/api";


export const Votes = ({article_id, votes}) => {
    const [displayedVotes, setDisplayedVotes] = useState(votes)

    useEffect(() => {
        setDisplayedVotes(votes)
    }, [votes])

    const giveVote = (inc_votes) => {
        setDisplayedVotes((currVote) => currVote + inc_votes);
        patchVotes(article_id, inc_votes).catch((err) => {
            setDisplayedVotes((currVote) => currVote -1);
        })
    }

    return (
        <div className='votes'>
            <i 
             onClick={() => giveVote(1)}
             className="fa-solid fa-square-caret-up">
             </i>
        <p>{displayedVotes}</p>
        <i 
             onClick={() => giveVote(-1)}
             className="fa-solid fa-square-caret-down">
             </i>
        </div>
    )
}

