import React, {Component, Fragment} from 'react'
import YouTubeComp from '../../../component/YouTubeComp'

class YoutubeCompPage extends Component {
    render() {
        return(
            <Fragment>
                <div>
                    <h3>YouTube Component</h3>
                    <hr />
                    <YouTubeComp 
                        time="4:30"
                        tnail="https://i.ytimg.com/vi/dHkAYwr1o0E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSeNJyTeQe71IF7goj-at9p9RR3w"
                        title="Hail to The King !"
                        desc="Solo guitar cover by Dippa"
                    />
                    <YouTubeComp 
                        time="16:53"
                        tnail="https://i.ytimg.com/vi/WZ-2WT_AS4c/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZBkKmJg-T2ske_FHRv1cIGjXWfg"
                        title="Gembels di Situ Gunung"
                        desc="Situ Gunung "
                    />
                    <YouTubeComp 
                        time="4:30"
                        tnail="https://i.ytimg.com/vi/v8JISg7Xfxs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBodTexRhnxJ9IosQduTOdWihyzyg"
                        title="Welcome to the Jungle"
                        desc="Solo guitar cover by Dippa"
                    />
                    <YouTubeComp 
                        time="9.54"
                        tnail="https://i.ytimg.com/vi/UHBKkp4_ieA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCG7V4UElfJe6OcqQ-DjhWPk4MgYg"
                        title="Almost Easy drum Cover"
                        desc="Drum cover by Dippa"
                    />
                    <YouTubeComp />
                </div>
            </Fragment>
        )
    }
}

YouTubeComp.defaultProps = {
    time: "4:00",
    tnail: "https://i.ytimg.com/vi/bOtX5GtPzUU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDnbavkeYRfqZjC37ZSG4weKE2yqg",
    title: "Decode !",
    desc: "Manggung MCD Alfa Indah"
}

export default YoutubeCompPage