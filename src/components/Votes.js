import { useState } from "react";
import { patchVotes } from "../utils/api";

export const Votes = ({article_id, votes}) => {
    const [voteChange, setVoteChange] = useState(0);

    console.log(votes, 'votes props arg')
    console.log(article_id, 'art id props arg')

    const giveVote = () => {
        setVoteChange((currChange) => currChange + 1);
        patchVotes(article_id).catch((err) => {
            setVoteChange((currChange) => currChange -1);
        })
    }

    return (

    <button onClick={() => giveVote()}>upvote {votes + voteChange} downVote</button>
    )
}

