import { useState, useEffect } from "react";
import { patchVotes } from "../utils/api";


export const Votes = ({article_id, votes}) => {
    const [voteChange, setVoteChange] = useState(0);
    const [displayedVotes, setDisplayedVotes] = useState(votes)

    console.log(votes, 'votes props arg')
    console.log(article_id, 'art id props arg')

    useEffect(() => {
        setDisplayedVotes(votes)
    }, [votes])

    const giveVote = (inc_votes) => {
        setVoteChange((currChange) => currChange + inc_votes);
        setDisplayedVotes((currVote) => currVote + inc_votes);
        patchVotes(article_id, inc_votes).catch((err) => {
            setVoteChange((currChange) => currChange -1);
        })
    }

    console.log(displayedVotes, 'DIS VOTES')
    return (
        <>
        <button onClick={() => giveVote(1)}>upvote </button>
        <p>{displayedVotes}</p>
        <button onClick={() => giveVote(-1)}>downvote </button>
        </>
    )
}

