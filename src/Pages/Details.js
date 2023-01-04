import './Details.css'

const Details = () => {
    return(
        <div className='main-container'>
            <div className='left-side'>
                <div className='image'>
                    <img src='https://i.seadn.io/gcs/files/46cc3cd979a513230fd2f345164bc6af.png' key='image' className='nft'/>
                </div>
                <div className='details-description'>
                    <p>Description</p>
                </div>
                <div className='details-artist'>
                    <p>By XYZ</p>
                </div>
                <div className='details-artist'>
                    <p>About XYZ</p>
                </div>
                <div className='detail'>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority 
                        have suffered alteration in some form, by injected humour, or randomised words 
                        which don't look even slightly believable. If you are going to use a passage of 
                        Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in 
                        the middle of text. All the Lorem Ipsum generators on the Internet tend to 
                        repeat predefined chunks as necessary, making this the first true generator 
                        on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful 
                        of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                        The generated Lorem Ipsum is therefore always free from repetition, injected 
                        humour, or non-characteristic words etc.
                    </p>
                </div>
            </div>
            <div className='right-side'>
                <div className='artist-name'>
                    <p>Artist Name Example</p>
                </div>
                <div className='artist-name'>
                    <p>Artwork Title</p>
                </div>
                <div className='artist-name'>
                    <p>Current Price</p>
                    <h1>25,000$</h1>
                </div>
            </div>
        </div>
    )
    }
    
    export default Details
;